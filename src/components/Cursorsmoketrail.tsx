"use client";

import { useEffect } from "react";

export default function CursorSmokeTrail() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.style.cssText =
      "position:fixed;top:0;left:0;width:100vw;height:100vh;pointer-events:none;z-index:99999;";
    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) {
      // Context creation failed (rare) — bail out cleanly instead of throwing.
      document.body.removeChild(canvas);
      return;
    }

    // ── DPR-aware sizing ────────────────────────────────────
    // Without this, canvas.width/height use CSS pixels directly and the
    // drawing looks blurry on high-DPI/Retina displays.
    let dpr = Math.min(window.devicePixelRatio || 1, 2); // cap to avoid huge canvases on 3x displays

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width  = window.innerWidth  * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width  = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // reset + scale, avoids compounding on repeated resizes
    };
    resize();
    window.addEventListener("resize", resize);

    // ── Particle types ─────────────────────────────────────
    // Mix of: glassy bubbles, water droplets, shimmer sparks
    type P = {
      x: number; y: number;
      vx: number; vy: number;
      life: number; maxLife: number;
      size: number;
      type: "bubble" | "droplet" | "shimmer";
      hue: number;       // for color variety
      wobble: number;    // bubble wobble offset
      wobbleSpeed: number;
    };

    const pool: P[] = [];

    // ── Tuning: reduced trail density ──────────────────────
    const MAX_PARTICLES     = 80;  // hard cap regardless of spawn rate
    const SPAWNS_PER_TICK   = 1;   // was 5
    const SPAWN_CHANCE      = 0.5; // only spawn on ~half of moving frames, thins the trail further

    let mx = 0, my = 0, pmx = 0, pmy = 0;
    let moving = false;
    let moveTid: ReturnType<typeof setTimeout>;

    const onMove = (e: MouseEvent) => {
      pmx = mx; pmy = my;
      mx  = e.clientX;
      my  = e.clientY;
      moving = true;
      clearTimeout(moveTid);
      moveTid = setTimeout(() => { moving = false; }, 80);
    };
    window.addEventListener("mousemove", onMove);

    const spawn = () => {
      if (pool.length >= MAX_PARTICLES) return; // hard cap — prevents unbounded growth

      const dx   = mx - pmx;
      const dy   = my - pmy;
      const spd  = Math.sqrt(dx * dx + dy * dy);
      const rand = Math.random();
      const type: P["type"] = rand < 0.5 ? "bubble" : rand < 0.8 ? "droplet" : "shimmer";

      // hue: 180–240 = cyan/blue/teal range matching site theme
      const hue  = 185 + Math.random() * 55;
      const life = type === "shimmer"
        ? 0.3 + Math.random() * 0.3
        : 0.6 + Math.random() * 0.8;

      pool.push({
        x:  mx + (Math.random() - 0.5) * 12,
        y:  my + (Math.random() - 0.5) * 12,
        vx: (Math.random() - 0.5) * 1.4,
        vy: (Math.random() - 0.5) * 1.4 - (type === "bubble" ? 0.8 : 0.3),
        life, maxLife: life,
        size: type === "shimmer"
          ? 2  + Math.random() * 4
          : type === "bubble"
          ? 6  + Math.random() * 14 + Math.min(spd * 0.2, 8)
          : 3  + Math.random() * 7  + Math.min(spd * 0.15, 6),
        type, hue,
        wobble:      Math.random() * Math.PI * 2,
        wobbleSpeed: 0.08 + Math.random() * 0.12,
      });
    };

    // ── Draw helpers ───────────────────────────────────────

    const drawBubble = (p: P, alpha: number) => {
      const r = p.size;
      // slightly elliptical wobble
      const scaleX = 1 + Math.sin(p.wobble) * 0.12;
      const scaleY = 1 + Math.cos(p.wobble) * 0.08;

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.scale(scaleX, scaleY);

      // glass body — very translucent fill
      const body = ctx.createRadialGradient(-r*0.3, -r*0.3, r*0.05, 0, 0, r);
      body.addColorStop(0,   `hsla(${p.hue}, 80%, 90%, ${alpha * 0.25})`);
      body.addColorStop(0.5, `hsla(${p.hue}, 70%, 70%, ${alpha * 0.10})`);
      body.addColorStop(1,   `hsla(${p.hue}, 60%, 50%, ${alpha * 0.05})`);
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fillStyle = body;
      ctx.fill();

      // glass rim — crisp edge
      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.strokeStyle = `hsla(${p.hue}, 90%, 85%, ${alpha * 0.6})`;
      ctx.lineWidth   = 0.8;
      ctx.stroke();

      // specular highlight — top-left glint
      const glint = ctx.createRadialGradient(-r*0.35, -r*0.35, 0, -r*0.35, -r*0.35, r*0.45);
      glint.addColorStop(0,   `rgba(255,255,255,${alpha * 0.7})`);
      glint.addColorStop(0.5, `rgba(255,255,255,${alpha * 0.2})`);
      glint.addColorStop(1,   `rgba(255,255,255,0)`);
      ctx.beginPath();
      ctx.arc(-r*0.3, -r*0.3, r*0.42, 0, Math.PI * 2);
      ctx.fillStyle = glint;
      ctx.fill();

      // small secondary glint bottom-right
      ctx.beginPath();
      ctx.arc(r*0.35, r*0.3, r*0.15, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${alpha * 0.3})`;
      ctx.fill();

      ctx.restore();
    };

    const drawDroplet = (p: P, alpha: number) => {
      const r = p.size;
      // teardrop shape pointing downward
      ctx.save();
      ctx.translate(p.x, p.y);

      const drop = ctx.createRadialGradient(-r*0.2, -r*0.2, 0, 0, 0, r);
      drop.addColorStop(0,   `hsla(${p.hue}, 85%, 85%, ${alpha * 0.55})`);
      drop.addColorStop(0.6, `hsla(${p.hue}, 75%, 65%, ${alpha * 0.30})`);
      drop.addColorStop(1,   `hsla(${p.hue}, 65%, 50%, ${alpha * 0.05})`);

      ctx.beginPath();
      ctx.arc(0, 0, r, 0, Math.PI * 2);
      ctx.fillStyle = drop;
      ctx.fill();

      // rim
      ctx.strokeStyle = `hsla(${p.hue}, 90%, 80%, ${alpha * 0.5})`;
      ctx.lineWidth   = 0.6;
      ctx.stroke();

      // glint
      ctx.beginPath();
      ctx.arc(-r*0.25, -r*0.25, r*0.3, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255,255,255,${alpha * 0.6})`;
      ctx.fill();

      ctx.restore();
    };

    const drawShimmer = (p: P, alpha: number) => {
      // star-like sparkle
      const r = p.size;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.wobble);

      ctx.strokeStyle = `hsla(${p.hue}, 100%, 90%, ${alpha})`;
      ctx.lineWidth   = 0.8;

      for (let i = 0; i < 4; i++) {
        const angle = (i / 4) * Math.PI;
        ctx.beginPath();
        ctx.moveTo(Math.cos(angle) * r * 2.5, Math.sin(angle) * r * 2.5);
        ctx.lineTo(-Math.cos(angle) * r * 2.5, -Math.sin(angle) * r * 2.5);
        ctx.stroke();
      }

      // center dot
      ctx.beginPath();
      ctx.arc(0, 0, r * 0.6, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 100%, 95%, ${alpha * 0.9})`;
      ctx.fill();

      ctx.restore();
    };

    // ── Render loop ────────────────────────────────────────
    let last = performance.now();
    let raf: number;

    const tick = () => {
      raf = requestAnimationFrame(tick);

      const now = performance.now();
      const dt  = Math.min((now - last) / 1000, 0.05);
      last = now;

      if (moving && Math.random() < SPAWN_CHANCE) {
        for (let s = 0; s < SPAWNS_PER_TICK; s++) spawn();
      }

      // clearRect uses CSS-pixel coordinates because ctx is scaled by dpr above.
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      for (let i = pool.length - 1; i >= 0; i--) {
        const p = pool[i];
        p.life -= dt;
        if (p.life <= 0) { pool.splice(i, 1); continue; }

        p.wobble += p.wobbleSpeed;
        p.vx += (Math.random() - 0.5) * 0.1;
        p.vy -= 0.02;          // float upward
        p.vx *= 0.98;
        p.vy *= 0.98;
        p.x  += p.vx;
        p.y  += p.vy;

        if (p.type !== "shimmer") p.size += 0.15;  // bubbles grow slightly

        const t     = p.life / p.maxLife;           // 1→0
        const alpha = t < 0.2
          ? t / 0.2                                 // fade out
          : t > 0.85
          ? (1 - t) / 0.15                          // fade in
          : 1;

        if      (p.type === "bubble")  drawBubble(p,  alpha * 0.80);
        else if (p.type === "droplet") drawDroplet(p, alpha * 0.70);
        else                           drawShimmer(p, alpha * 0.8);
      }
    };

    tick();

    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(moveTid);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", resize);
      if (document.body.contains(canvas)) {
        document.body.removeChild(canvas);
      }
    };
  }, []);

  return null;
}