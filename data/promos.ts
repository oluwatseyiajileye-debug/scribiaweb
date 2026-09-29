export type PromoHighlight = {
  label: string;
  detail: string;
};

export type PromoTerm = {
  question: string;
  answer: string;
};

export type Promo = {
  slug: string;
  active: boolean;
  badge: string;
  /** ISO timestamp (with timezone offset) the promo ends. Powers the countdown timer. Optional - omit for an open-ended promo. */
  endsAt?: string;
  title: string;
  discountLabel: string;
  discountSubtext: string;
  tagline: string;
  description: string;
  highlights: PromoHighlight[];
  bookingFee: string;
  catalogueUrl: string;
  whatsappMessage: string;
  terms: PromoTerm[];
};

export const promos: Promo[] = [
  {
    slug: "crazy-promo",
    active: true,
    badge: "For 14 Days Only (or while slots last)",
    endsAt: "2026-10-13T23:59:59+01:00",
    title: "SCRIBIA Crazy Promo",
    discountLabel: "50% OFF",
    discountSubtext: "Complete Undergraduate Projects (Chapters 1-5)",
    tagline: "Secure your project future before the rushing and financial pressure starts.",
    description:
      "Resumption is here, and while everyone is settling back into school, this is the best time to put your final-year project plans in place - before deadlines, supervisor pressure, and financial demands start to pile up.",
    highlights: [
      { label: "14 Days Only", detail: "Or while slots last." },
      { label: "No Topic Yet? No Problem", detail: "You can still secure your promotional slot." },
      { label: "Just ₦5,000 to Book", detail: "This forms part of the total project price." },
    ],
    bookingFee: "₦5,000",
    catalogueUrl: "https://wa.me/c/15879131656380",
    whatsappMessage:
      "Hello SCRIBIA Writing Services, I'd like to secure a slot on the SCRIBIA Crazy Promo (50% off complete undergraduate projects, Chapters 1-5).",
    terms: [
      {
        question: "1. Eligibility",
        answer:
          "The promotion is available to undergraduate students seeking support with their final-year research/project work.",
      },
      {
        question: "2. Promotional Period",
        answer:
          "The 50% discount is available for 14 days from the official commencement of the promotion, after which the offer automatically ends unless otherwise announced by SCRIBIA.",
      },
      {
        question: "3. What the Promotion Covers",
        answer:
          "The promotion applies ONLY to complete undergraduate project support covering Chapters 1-5. Individual chapters, partial projects, or isolated sections do not qualify for the 50% promotional rate.",
      },
      {
        question: "4. Final Price",
        answer:
          "The 50% discount is applied to SCRIBIA's applicable project-service fee. The final price still depends on the student's topic, department/faculty, research scope, complexity, and specific requirements. The catalogue provides only an estimated pricing range - it is not a final quotation.",
      },
      {
        question: "5. ₦5,000 Booking Payment",
        answer:
          "A non-refundable ₦5,000 booking payment is required to secure a promotional slot. The ₦5,000 is NOT an additional charge - it forms part of the total agreed project fee and will be deducted from the student's balance. A slot is not considered secured until the booking payment has been received and confirmed by SCRIBIA.",
      },
      {
        question: "6. Topic Not Required at Booking",
        answer:
          "Students do not need to have a final or approved topic before securing a promotional slot. However, the promotional price will only be confirmed after SCRIBIA reviews the student's eventual topic and project requirements.",
      },
      {
        question: "7. Topic Changes",
        answer:
          "Once a topic and scope have been agreed upon, changing the topic, research direction, or substantially altering the project scope may attract additional charges and may affect the promotional arrangement.",
      },
      {
        question: "8. Corrections",
        answer:
          "Corrections arising from the agreed project and legitimate supervisor feedback will be attended to as part of the agreed service. However, corrections resulting from a change of topic, change in research direction, new requirements introduced after approval, or information previously withheld by the student may attract additional charges.",
      },
      {
        question: "9. AI & Plagiarism Reports",
        answer:
          "AI-detection and plagiarism/similarity reports are NOT included in the Crazy Promo package. Students who require these services may request them separately at the applicable rate.",
      },
      {
        question: "10. Data Collection & External Expenses",
        answer:
          "The promotional price does not automatically include external expenses such as fieldwork, transportation, laboratory testing, printing, questionnaires/data collection expenses, paid databases, software/licensing fees, publication fees, or other third-party services. Where such expenses are required, they will be discussed separately with the student.",
      },
      {
        question: "11. Data & Information Provided by the Student",
        answer:
          "Students are responsible for providing accurate information, departmental guidelines, supervisor instructions, research instruments, data, and other materials required for their project where applicable. SCRIBIA is not responsible for delays or inaccuracies resulting from incomplete, inaccurate, or late information supplied by the student.",
      },
      {
        question: "12. Payment",
        answer:
          "Where a payment plan is approved, the student must follow the agreed payment schedule. Failure to meet an agreed payment obligation may result in work being paused until the outstanding payment is resolved.",
      },
      {
        question: "13. Delivery Timeline",
        answer:
          "Project delivery timelines depend on the scope of work, availability of required information/data, student response time, supervisor feedback, and the agreed work schedule. Delays caused by late payments, unavailable information, delayed responses, or prolonged supervisor feedback may affect the delivery timeline.",
      },
      {
        question: "14. Cancellation & Refunds",
        answer:
          "The ₦5,000 booking payment is non-refundable once the promotional slot has been secured. Where substantial work has already commenced, any cancellation will be handled according to the amount of work already completed and the outstanding obligations under the agreed project arrangement.",
      },
      {
        question: "15. Promotional Slot",
        answer:
          "The promotional offer is personal to the student who secures the slot and cannot be transferred, sold, or exchanged for cash.",
      },
      {
        question: "16. Other Discounts",
        answer:
          "The Crazy Promo cannot be combined with other SCRIBIA discounts, promotions, or special offers.",
      },
      {
        question: "17. Project Scope",
        answer:
          "The 50% promotional rate applies only to the project scope agreed upon at the beginning of the engagement. Requests for additional chapters, substantial additional analysis, new research objectives, additional studies, or other work outside the agreed scope may attract additional charges.",
      },
      {
        question: "18. Academic Responsibility",
        answer:
          "SCRIBIA provides research and academic support. Students remain responsible for understanding their work, complying with their institution's academic regulations, communicating with their supervisors, and submitting work in accordance with their institution's requirements.",
      },
      {
        question: "19. Approval & Results",
        answer:
          "Payment for the promotional service does not guarantee supervisor approval, departmental approval, examination results, graduation, publication, or a particular academic grade. Academic decisions remain with the relevant institution and its authorized personnel.",
      },
      {
        question: "20. Student Communication",
        answer:
          "Students are expected to respond promptly to requests for information, clarification, corrections, and approvals. Extended periods without communication may affect the agreed timeline.",
      },
      {
        question: "21. Promotional Closure",
        answer:
          "SCRIBIA reserves the right to close the promotion at the end of the stated 14-day period or earlier where operational capacity has been reached.",
      },
      {
        question: "22. Acceptance",
        answer:
          "By making the ₦5,000 booking payment, the student confirms that they have read, understood, and accepted these Terms & Conditions.",
      },
    ],
  },
];
