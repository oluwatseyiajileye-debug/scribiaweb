export type SoftwareTool = {
  name: string;
  initials: string;
  useCase: string;
};

export const softwareTools: SoftwareTool[] = [
  {
    name: "SPSS",
    initials: "SPSS",
    useCase:
      "Statistical software widely used for descriptive statistics, regression, ANOVA, and survey data analysis in the social sciences.",
  },
  {
    name: "AMOS",
    initials: "AMOS",
    useCase:
      "Structural Equation Modelling (SEM) software for testing relationships between variables, commonly used in behavioural and management research.",
  },
  {
    name: "SmartPLS",
    initials: "PLS",
    useCase:
      "Partial Least Squares SEM tool favoured for testing complex models, including studies with smaller sample sizes.",
  },
  {
    name: "STATA",
    initials: "STA",
    useCase:
      "Statistical software used for econometrics, panel data analysis, and large-scale quantitative research.",
  },
  {
    name: "EViews",
    initials: "EV",
    useCase:
      "Specialised in time-series analysis, forecasting, and econometric modelling.",
  },
  {
    name: "GraphPad Prism",
    initials: "GP",
    useCase:
      "Used for biological and medical statistical analysis and for producing publication-quality graphs.",
  },
  {
    name: "MATLAB",
    initials: "ML",
    useCase:
      "Numerical computing platform used for simulations, engineering analysis, and algorithm development.",
  },
  {
    name: "R Programming",
    initials: "R",
    useCase:
      "Open-source statistical programming language used for advanced data analysis, visualisation, and machine learning.",
  },
];
