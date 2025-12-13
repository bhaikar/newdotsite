"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Redirect to index.html immediately
    window.location.href = "/index.html";
  }, []);

  // Show a loading state while redirecting
  return (
    <main className="flex items-center justify-center min-h-screen bg-white">
      <div className="text-center">
        <p className="text-gray-600">Loading...</p>
      </div>
    </main>
  );
}
