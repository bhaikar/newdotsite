"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export type Slide = { title: string; subtitle: string };

type Props = {
  slides: Slide[];
  /** ms between automatic advances. 0 disables autoplay. */
  interval?: number;
};

export default function HeroCarousel({ slides, interval = 7000 }: Props) {
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"in" | "out">("in");
  const pending = useRef<number | null>(null);

  const go = useCallback(
    (dir: number) => {
      if (pending.current !== null) return;
      setPhase("out");
      pending.current = window.setTimeout(() => {
        setIndex((i) => (i + dir + slides.length) % slides.length);
        setPhase("in");
        pending.current = null;
      }, 260);
    },
    [slides.length]
  );

  useEffect(() => {
    if (!interval || slides.length < 2) return;
    const id = window.setInterval(() => go(1), interval);
    return () => window.clearInterval(id);
  }, [go, interval, slides.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "ArrowRight") go(1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  useEffect(
    () => () => {
      if (pending.current !== null) window.clearTimeout(pending.current);
    },
    []
  );

  const slide = slides[index];

  return (
    <div className="carousel" role="group" aria-roledescription="carousel">
      <button
        type="button"
        className="carousel__arrow"
        onClick={() => go(-1)}
        aria-label="Anterior"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path
            d="M15 5 8 12l7 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div className="carousel__body" aria-live="polite">
        <div className={`carousel__inner carousel__inner--${phase}`}>
          <h1 className="carousel__title">{slide.title}</h1>
          <p className="carousel__subtitle">{slide.subtitle}</p>
        </div>
      </div>

      <button
        type="button"
        className="carousel__arrow"
        onClick={() => go(1)}
        aria-label="Siguiente"
      >
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
          <path
            d="m9 5 7 7-7 7"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
