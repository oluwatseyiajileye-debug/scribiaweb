import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { TrustIndicators } from "@/components/home/TrustIndicators";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { HowItWorks } from "@/components/home/HowItWorks";
import { TestimonialTeaser } from "@/components/home/TestimonialTeaser";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Academic writing, research support, data analysis, and professional writing services for students, researchers, and professionals in Nigeria.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <FeaturedServices />
      <HowItWorks />
      <TestimonialTeaser />
      <CTASection />
    </>
  );
}
