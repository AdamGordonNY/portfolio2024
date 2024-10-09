/* eslint-disable no-unused-vars */
import { Prisma } from "@prisma/client";
export type ContentCategoryType =
  | "Post"
  | "Podcast"
  | "Meetup"
  | "Comment"
  | "Group"
  | "User";
export enum ContentCategoryEnum {
  POST,
  PODCAST,
  MEETUP,
  COMMENT,
}

export type PostContent = Prisma.PostGetPayload<{
  include: {
    comment: {
      include: {
        author: true;
      };
    };
    user: {
      include: {
        posts: true;
        id: true;
        name: true;
      };
    };
    group: true;
  };
}>;
export type UserContent = Prisma.UserGetPayload<{
  include: {
    posts: {
      include: {
        comment: true;
        user: true;
      };
    };
  };
}>;
export type ContentType = UserContent;

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
  mission: {
    task: {
      title: string;
      description: string;
      goal: string;
      result: string;
      takeaways: string[];
    }[];
  }[]; // What was the goal of the project?

  nextSteps: {
    step: number;
    description: string;
  }[];
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
