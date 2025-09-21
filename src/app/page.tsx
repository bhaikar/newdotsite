"use client";

import Spline from "@splinetool/react-spline";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-white">
      <div className="relative w-full h-[100vh]">
        {/* Spline scene */}
        <Spline scene="https://prod.spline.design/Hwlcz5JZMTZgK9OQ/scene.splinecode" />

        {/* Overlay glassmorphic button (doesn't block mouse) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Link href="/aboutus" className="pointer-events-auto">
            <button className="px-8 py-4 rounded-2xl text-white font-semibold text-lg 
              bg-white/10 backdrop-blur-md border border-white/20 
              shadow-xl hover:bg-white/20 transition duration-300">
              Go to About Us
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
