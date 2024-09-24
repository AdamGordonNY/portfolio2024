export type Process = {
  id: number;
  title: string;
  purpose: string;
  steps: {
    step: number;

    description: string;
    image?: string;
  }[];
};
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
  tech: string[]; // tech stack
  summary: string; // retrospective on the project
  mission: string; // What was the goal of the project?
  procedure: Process[];
  result: {
    outcome: string;
    goals?: string;
    learning: string;
    challenges: string;
    nextSteps: {
      step: number;
      description: string;
    }[];
  };
  teamMembers: {
    name: string;
    role: string;
  }[];
};
export type EmailType =
  | "email.sent"
  | "email.delivered"
  | "email.delivery_delayed"
  | "email.complained"
  | "email.bounced"
  | "email.opened"
  | "email.clicked";

export interface WebhookEvent {
  created_at: string;
  data: {
    created_at: string;
    email_id: string;
    from: string;
    subject: string;
    to: string[];
  };
  type: EmailType;
}
