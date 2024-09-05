export type CaseStudy = {
  title: string;
  subtitle?: string;
  description: string;
  images: string[];
  cardImage: string;
  links: {
    repo: string;
    liveSite: string;
    portfolioPath?: string;
  };
  tech: string[];
  summary: string;
  mission: string;
  features: {
    id: number;
    title: string;
    purpose: string;
  }[];
  process: {
    id: number;
    title: string;
    description: string;
  }[];

  result: {
    outcome: string;
    goals?: string;
    learning: string;
    challenges: string;
    nextSteps: string[];
  };
  teamMembers: {
    name: string;
    role: string;
  }[];
};
