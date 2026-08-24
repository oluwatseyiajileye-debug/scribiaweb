// Sample writer profiles — placeholder content for launch.
// Writers are identified by alias only (no real names or photos) to protect
// their privacy and SCRIBIA's talent pool. Replace with real (anonymised) profiles.

export type Writer = {
  alias: string;
  specialty: string;
  yearsExperience: number;
  bio: string;
  rating: number;
  projectsCompleted: number;
};

export const writers: Writer[] = [
  {
    alias: "Writer A",
    specialty: "Sciences",
    yearsExperience: 6,
    bio: "Specialises in lab-based and quantitative projects across biology, chemistry, and biochemistry, with strong SPSS and Excel analysis support.",
    rating: 4.9,
    projectsCompleted: 140,
  },
  {
    alias: "Writer B",
    specialty: "Social Sciences",
    yearsExperience: 8,
    bio: "Focuses on survey-based research in sociology, political science, and public administration, with a strong grasp of Nigerian institutional context.",
    rating: 4.9,
    projectsCompleted: 210,
  },
  {
    alias: "Writer C",
    specialty: "Management & Business Studies",
    yearsExperience: 5,
    bio: "Handles business, accounting, and management projects, including market research reports and case-study-based dissertations.",
    rating: 4.8,
    projectsCompleted: 165,
  },
  {
    alias: "Writer D",
    specialty: "Engineering & Technology",
    yearsExperience: 7,
    bio: "Covers computer science, electrical, and mechanical engineering final-year projects, including system design and implementation write-ups.",
    rating: 4.9,
    projectsCompleted: 120,
  },
  {
    alias: "Writer E",
    specialty: "Medicine & Health Sciences",
    yearsExperience: 9,
    bio: "Experienced with nursing, public health, and pharmacy research, including clinical literature reviews and epidemiological survey design.",
    rating: 5.0,
    projectsCompleted: 190,
  },
  {
    alias: "Writer F",
    specialty: "Law",
    yearsExperience: 6,
    bio: "Specialises in legal research writing, case analysis, and doctrinal methodology for undergraduate and postgraduate law projects.",
    rating: 4.8,
    projectsCompleted: 95,
  },
  {
    alias: "Writer G",
    specialty: "Arts & Humanities",
    yearsExperience: 10,
    bio: "Covers English, history, and mass communication projects, with strong editorial and referencing precision.",
    rating: 4.9,
    projectsCompleted: 230,
  },
  {
    alias: "Writer H",
    specialty: "Education",
    yearsExperience: 7,
    bio: "Focuses on educational management, curriculum studies, and classroom-based action research for education faculties.",
    rating: 4.8,
    projectsCompleted: 150,
  },
];
