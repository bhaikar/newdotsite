import Hero from "@/components/Hero";
import { display } from "./fonts";

export default function Page() {
  // The canvas rasterises the word itself, so it needs a real family name
  // rather than a CSS variable — next/font exposes one via `.style`.
  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <Hero fontFamily={display.style.fontFamily} />
      
    </div>
  );
}
