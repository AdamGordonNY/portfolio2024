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
