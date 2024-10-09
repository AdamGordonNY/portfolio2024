"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import { ContactFormEmail } from "@/components/ContactEmailTemplate";
import prisma from "@/db";
// eslint-disable-next-line camelcase
import { unstable_cache, revalidateTag } from "next/cache";
const resend = new Resend(process.env.RESEND_API_KEY);
// server action using Resend.com , to send email from contact form.
export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  console.log(formData);
  try {
    data = await resend.emails.send({
      from: "adam@adam-gordon.info",
      to: "adam@adam-gordon.info",
      subject: `You have  a message from your contact form`,
      replyTo: senderEmail,
      react: ContactFormEmail({ message, senderEmail }) as React.ReactElement,
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};

export const getPostsFromDevTo = async () => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: 21 },
      include: {
        posts: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });
    const posts = user?.posts;
    console.log(posts);
    return posts;
  } catch (error) {
    console.log(error);
  }
};
export async function _incrementPostViews(postId: number) {
  if (!postId) {
    throw new Error("Post ID is required.");
  }

  try {
    const post = await prisma.post.update({
      where: { id: postId },
      data: {
        views: {
          increment: 1,
        },
      },
    });
    return post.views;
  } catch (error) {
    console.error("Error incrementing post views:", error);
    throw new Error(
      "An unexpected error occurred while incrementing post views."
    );
  }
}
export const incrementPostViews = unstable_cache(
  _incrementPostViews,
  ["incrementPostViews"],
  {
    tags: ["views"],
    revalidate: 1,
  }
);
export const incrementViews = async ({
  id,
  contentType,
}: {
  id: number;
  contentType: string;
}) => {
  try {
    let updatedContent;
    switch (contentType) {
      case "post":
        updatedContent = await incrementPostViews(id);
        revalidateTag("views");
        break;
      default:
        throw new Error("Invalid content type");
    }
    console.log(updatedContent);
    return updatedContent;
  } catch (error) {
    console.error("Error incrementing views:", error);
    throw error;
  }
};
