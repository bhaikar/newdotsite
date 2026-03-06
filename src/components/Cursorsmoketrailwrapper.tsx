"use client";

import dynamic from "next/dynamic";

const CursorSmokeTrail = dynamic(
  () => import("@/components/Cursorsmoketrail"),
  { ssr: false }
);

export default function CursorSmokeTrailWrapper() {
  return <CursorSmokeTrail />;
}