import { ContactFormEmail } from "@/components/ContactEmailTemplate";
import { getErrorMessage, validateString } from "@/lib/utils";
import { Resend } from "resend";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(formData: FormData) {
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
  try {
    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "adam@adam-gordon.info",
      subject: `You have  a message from your contact form`,
      replyTo: senderEmail,
      react: ContactFormEmail({ message, senderEmail }) as React.ReactElement,
    });

    try {
      return Response.json(data);
    } catch (error) {
      return Response.json({ error }, { status: 500 });
    }
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }
}
