import type { Metadata } from "next";
import { RedNightChapterOne } from "@/components/motion-story/RedNightChapterOne";

export const metadata: Metadata = {
  title: "Red Night — Chapter One | Motion Story",
  description:
    "A dark-fantasy motion story adaptation of Chapter One: Red Night — the massacre of Ikuwamiri, the Queen of Witches, and the egg that hatched from a fallen beast.",
};

export default function MotionStoryPage() {
  return <RedNightChapterOne />;
}
