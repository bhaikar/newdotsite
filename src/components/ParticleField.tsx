"use client";

import { useEffect, useRef } from "react";

type Particle = {
  hx: number; // home x
  hy: number; // home y
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  hue: number;
  light: number;
  alpha: number;
  targetAlpha: number;
  amp: number; // wander radius
  speed: number; // wander speed
  phase: number;
};

type Star = { x: number; y: number; r: number; a: number; phase: number };

type Props = {
  /** The word rendered as particles. */
  word?: string;
  /** Font family string used to rasterise the word (pass a next/font familyName). */
  fontFamily?: string;
  /** Font weight used for rasterisation. */
  fontWeight?: number;
  /** Lower = denser cloud. 3 is dense, 6 is sparse. */
  density?: number;
  className?: string;
};

/** Colour ramp across the word: lime -> green -> cyan -> indigo -> magenta. */
const HUE_STOPS: [number, number][] = [
  [0.0, 74],
  [0.26, 146],
  [0.48, 186],
  [0.7, 256],
  [1.0, 304],
];

function hueAt(t: number): number {
  const c = Math.min(1, Math.max(0, t));
  for (let i = 0; i < HUE_STOPS.length - 1; i++) {
    const [p0, h0] = HUE_STOPS[i];
    const [p1, h1] = HUE_STOPS[i + 1];
    if (c >= p0 && c <= p1) {
      const k = (c - p0) / (p1 - p0);
      return h0 + (h1 - h0) * k;
    }
  }
  return HUE_STOPS[HUE_STOPS.length - 1][1];
}

/** Cheap approximation of a normal distribution, range roughly -1..1. */
function gauss(): number {
  return (Math.random() + Math.random() + Math.random() - 1.5) / 1.5;
}

export default function ParticleField({
  word = "Brainit",
  fontFamily = "system-ui, sans-serif",
  fontWeight = 600,
  density = 4,
  className,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerRef = useRef({ x: -9999, y: -9999, down: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let raf = 0;
    let time = 0;
    let particles: Particle[] = [];
    let stars: Star[] = [];
    let disposed = false;

    /* ---------------------------------------------------------------- stars */

    function buildStars() {
      const count = Math.round((width * height) / 6800);
      stars = new Array(count).fill(0).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * Math.random() * 1.5 + 0.25,
        a: 0.25 + Math.random() * 0.6,
        phase: Math.random() * Math.PI * 2,
      }));
    }

    /* ------------------------------------------------------------ particles */

    /**
     * Rasterise the word to an offscreen canvas, then sample its opaque pixels
     * to produce particle "home" coordinates.
     */
    function sampleWord(): { x: number; y: number; t: number }[] {
      const off = document.createElement("canvas");
      const octx = off.getContext("2d", { willReadFrequently: true });
      if (!octx) return [];

      off.width = Math.max(1, Math.floor(width));
      off.height = Math.max(1, Math.floor(height));

      // Scale the type to the viewport, but keep it inside sane bounds.
      const fontSize = Math.max(
        56,
        Math.min(width * 0.155, height * 0.42, 300)
      );

      octx.font = `${fontWeight} ${fontSize}px ${fontFamily}`;
      octx.textAlign = "center";
      octx.textBaseline = "middle";
      octx.fillStyle = "#fff";
      octx.fillText(word, off.width / 2, off.height / 2);

      const metrics = octx.measureText(word);
      const textW = metrics.width;
      const left = off.width / 2 - textW / 2;

      const step = Math.max(2, Math.round(density));
      const data = octx.getImageData(0, 0, off.width, off.height).data;
      const points: { x: number; y: number; t: number }[] = [];

      for (let y = 0; y < off.height; y += step) {
        for (let x = 0; x < off.width; x += step) {
          const alpha = data[(y * off.width + x) * 4 + 3];
          if (alpha > 140) {
            points.push({
              x,
              y,
              t: Math.min(1, Math.max(0, (x - left) / textW)),
            });
          }
        }
      }
      return points;
    }

    function buildParticles(preservePositions: boolean) {
      const points = sampleWord();
      const previous = particles;

      particles = points.map((pt, i) => {
        const hue = hueAt(pt.t);

        // The cloud gets progressively looser toward the right of the word,
        // so the tail blooms into a nebula instead of reading as crisp type.
        const looseness = 0.35 + Math.pow(pt.t, 1.8) * 3.4;

        const hx = pt.x + gauss() * looseness * 6;
        const hy = pt.y + gauss() * looseness * 6;

        const old = preservePositions ? previous[i] : undefined;

        return {
          hx,
          hy,
          x: old ? old.x : Math.random() * width,
          y: old ? old.y : Math.random() * height,
          vx: 0,
          vy: 0,
          size: Math.random() < 0.14 ? 2 : 1,
          hue: hue + gauss() * 10,
          light: 52 + Math.random() * 22,
          alpha: old ? old.alpha : 0,
          targetAlpha: 0.45 + Math.random() * 0.55 - pt.t * 0.12,
          amp: (1.4 + Math.random() * 3.2) * looseness,
          speed: 0.25 + Math.random() * 0.5,
          phase: Math.random() * Math.PI * 2,
        };
      });
    }

    /* --------------------------------------------------------------- layout */

    function resize() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rect = canvas!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas!.width = Math.floor(width * dpr);
      canvas!.height = Math.floor(height * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      buildStars();
      buildParticles(true);
    }

    /* ---------------------------------------------------------------- frame */

    function frame() {
      if (disposed) return;
      time += reduceMotion ? 0.0025 : 0.01;

      ctx!.clearRect(0, 0, width, height);

      // --- stars -------------------------------------------------------
      ctx!.globalCompositeOperation = "source-over";
      for (const s of stars) {
        const tw = 0.7 + Math.sin(time * 1.6 + s.phase) * 0.3;
        ctx!.fillStyle = `rgba(214, 232, 255, ${s.a * tw})`;
        ctx!.fillRect(s.x, s.y, s.r, s.r);
      }

      // --- particle word -----------------------------------------------
      ctx!.globalCompositeOperation = "lighter";

      const p = pointerRef.current;
      const R = 130;
      const R2 = R * R;

      for (const q of particles) {
        // Drift target: home position orbited by a slow individual wobble.
        const wx = q.hx + Math.cos(time * q.speed + q.phase) * q.amp;
        const wy = q.hy + Math.sin(time * q.speed * 1.27 + q.phase) * q.amp;

        q.vx += (wx - q.x) * 0.014;
        q.vy += (wy - q.y) * 0.014;

        // Pointer pushes particles aside.
        const dx = q.x - p.x;
        const dy = q.y - p.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < R2) {
          const d = Math.sqrt(d2) || 1;
          const force = (1 - d / R) * (p.down ? 9 : 4.5);
          q.vx += (dx / d) * force;
          q.vy += (dy / d) * force;
        }

        q.vx *= 0.9;
        q.vy *= 0.9;
        q.x += q.vx;
        q.y += q.vy;

        if (q.alpha < q.targetAlpha) q.alpha += 0.012;

        // Bloom halo, then a brighter core pixel on top.
        ctx!.fillStyle = `hsla(${q.hue}, 100%, ${q.light}%, ${q.alpha * 0.13})`;
        ctx!.fillRect(q.x - q.size * 2, q.y - q.size * 2, q.size * 5, q.size * 5);

        ctx!.fillStyle = `hsla(${q.hue}, 100%, ${Math.min(
          94,
          q.light + 20
        )}%, ${q.alpha})`;
        ctx!.fillRect(q.x, q.y, q.size, q.size);
      }

      raf = requestAnimationFrame(frame);
    }

    /* -------------------------------------------------------------- events */

    function onPointerMove(e: PointerEvent) {
      const rect = canvas!.getBoundingClientRect();
      pointerRef.current.x = e.clientX - rect.left;
      pointerRef.current.y = e.clientY - rect.top;
    }
    function onPointerLeave() {
      pointerRef.current.x = -9999;
      pointerRef.current.y = -9999;
    }
    function onPointerDown() {
      pointerRef.current.down = true;
    }
    function onPointerUp() {
      pointerRef.current.down = false;
    }

    let resizeTimer: ReturnType<typeof setTimeout>;
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 160);
    }

    /* ---------------------------------------------------------------- init */

    // Wait for webfonts so the rasterised word uses the real typeface.
    const start = () => {
      if (disposed) return;
      resize();
      raf = requestAnimationFrame(frame);
    };

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(start).catch(start);
    } else {
      start();
    }

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("pointerup", onPointerUp);
    canvas.addEventListener("pointerleave", onPointerLeave);

    return () => {
      disposed = true;
      cancelAnimationFrame(raf);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      canvas.removeEventListener("pointerleave", onPointerLeave);
    };
  }, [word, fontFamily, fontWeight, density]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
