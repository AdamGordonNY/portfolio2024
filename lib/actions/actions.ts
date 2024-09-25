"use server";

import React from "react";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import { ContactFormEmail } from "@/components/ContactEmailTemplate";
import prisma from "@/db";
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
        podcasts: true,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
  }
};
