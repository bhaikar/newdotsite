import { Jost, Karla } from "next/font/google";

/** Geometric display face — used for the particle word, hero headline and nav. */
export const display = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

/** Slightly quirky humanist face for supporting copy. */
export const body = Karla({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-body",
  display: "swap",
});
