"use client";

import Link from "next/link";
import ParticleField from "./ParticleField";
import HeroCarousel, { type Slide } from "./HeroCarousel";
import { display, body } from "@/app/fonts";

const SLIDES: Slide[] = [
   {
    title: "We are DevOps",
    subtitle: "A community of builders shipping real projects together.",
  },
  {
    title: "our Moto",
    subtitle: "Build from Basics -- Our approach starts with a solid foundation to create extraordinary results",
  },
  {
    title: "From idea to deploy",
    subtitle: "Hackathons, workshops, and hands-on engineering culture.",
  },
];


export default function Hero({ fontFamily }: { fontFamily: string }) {
  return (
    <section className={`hero ${display.variable} ${body.variable}`} id="top">
      {/* deep space gradient + horizon glow */}
      <div className="hero__space" aria-hidden="true" />
      <div className="hero__horizon" aria-hidden="true" />
      <div className="hero__rim" aria-hidden="true" />

      {/* particle word */}
      <ParticleField
        className="hero__canvas"
        word="DEVOPS"
        fontFamily={fontFamily}
        fontWeight={650}
        density={3}
      />

      <div className="hero__grain" aria-hidden="true" />

      <div className="hero__top">
        <HeroCarousel slides={SLIDES} interval={7000} />
      </div>

      <div className="hero__cta">
        <Link href="/aboutus" className="hero__ctaBtn">
          About Us
        </Link>
      </div>

     
    </section>
  );
}
