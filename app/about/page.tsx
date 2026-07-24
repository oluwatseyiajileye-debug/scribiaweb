import type { Metadata } from "next";
import Image from "next/image";
import { BookOpen, ShieldCheck, Target, Users2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { CTASection } from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SCRIBIA Writing Services is a Nigerian academic and research writing consultancy supporting students, researchers, lecturers, and professionals.",
};

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every document is structured around your institution's exact requirements and standards.",
  },
  {
    icon: ShieldCheck,
    title: "Integrity",
    description: "Original, well-referenced work that supports — never undermines — your academic standing.",
  },
  {
    icon: BookOpen,
    title: "Research Depth",
    description: "A methodical approach to literature, methodology, and analysis, not surface-level writing.",
  },
  {
    icon: Users2,
    title: "Professionalism",
    description: "Clear communication, agreed timelines, and consistent quality across every engagement.",
  },
];

const audiences = [
  {
    title: "Students",
    description: "Undergraduate and postgraduate students working on projects, theses, and dissertations.",
  },
  {
    title: "Researchers",
    description: "Independent and institutional researchers developing articles, proposals, and reviews.",
  },
  {
    title: "Lecturers",
    description: "Academic staff who need research support, data analysis, or publication-ready manuscripts.",
  },
  {
    title: "Professionals",
    description: "Entrepreneurs and organisations that need clear, polished business and technical writing.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border">
        <Container className="grid grid-cols-1 items-center gap-12 py-20 lg:grid-cols-2 lg:py-24">
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-gold-400/60 bg-gold-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-magenta-700 dark:bg-gold-950/40 dark:text-gold-300">
              About SCRIBIA
            </span>
            <h1 className="font-display text-4xl font-semibold leading-tight text-magenta-900 sm:text-5xl dark:text-magenta-100">
              A research consultancy built on precision, not shortcuts
            </h1>
            <p className="text-lg leading-relaxed text-foreground-muted">
              SCRIBIA Writing Services is a Nigerian-based academic and
              professional writing consultancy. We support students,
              researchers, lecturers, and professionals with high-quality
              academic writing, research support, data analysis, and
              professional documentation — approached the way an experienced
              research team would, not a quick assignment service.
            </p>
            <p className="leading-relaxed text-foreground-muted">
              Our work is grounded in a clear process: understand your
              requirements, confirm scope and timeline, and deliver
              well-researched, properly referenced work that stands up to
              academic scrutiny.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative flex h-64 w-64 items-center justify-center rounded-full border border-gold-400/40 bg-surface-muted p-6 sm:h-80 sm:w-80">
              <Image
                src="/logo.png"
                alt="SCRIBIA Writing Services"
                width={280}
                height={280}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading
            eyebrow="What We Stand For"
            title="The principles behind every project"
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="flex flex-col gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-magenta-50 text-magenta-700 dark:bg-magenta-900/30 dark:text-magenta-200">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="font-display text-lg font-semibold text-foreground">{title}</h3>
                <p className="text-sm leading-relaxed text-foreground-muted">{description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-border bg-surface-muted py-20 sm:py-24">
        <Container className="flex flex-col gap-12">
          <SectionHeading eyebrow="Who We Work With" title="Support at every stage of research and writing" />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audiences.map((a) => (
              <div key={a.title} className="flex flex-col gap-2 rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-display text-lg font-semibold text-magenta-700 dark:text-magenta-300">
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground-muted">{a.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Let's discuss your project"
        description="Reach out with your requirements and we'll confirm scope, timeline, and pricing before any work begins."
      />
    </>
  );
}
