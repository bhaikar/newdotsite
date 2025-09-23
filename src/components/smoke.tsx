"use client";

import { useEffect, useRef } from "react";
import WebGLFluidEnhanced from "webgl-fluid-enhanced";

export default function FluidEffect() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const simulationRef = useRef<WebGLFluidEnhanced | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    // Function to set canvas size
    const setSize = () => {
      container.style.width = container.offsetWidth + "px";
      container.style.height = container.offsetHeight + "px";
    };
    setSize();

    const simulation = new WebGLFluidEnhanced(container);
    simulationRef.current = simulation;

    simulation.setConfig({
      backgroundColor: "#000000",
      densityDissipation: 0.9,
      pressureIterations: 30,
      splatRadius: 0.05,
      shading: true,
      colorful: false,
      colorPalette: ["#ffffff", "#a3c9f1"],
      transparent: true,
      bloom: true,
      bloomIntensity: 0.8,
      bloomThreshold: 0.2,
      bloomSoftKnee: 0.5,
      sunrays: false,
    });

    simulation.start();

    window.addEventListener("resize", setSize);

    return () => {
      simulation.stop();
      window.removeEventListener("resize", setSize);
    };
  }, []);

  return <div ref={containerRef} className="absolute inset-0 -z-10 pointer-events-none" />;
}
// If you control the type definition, add 'splat' to it: