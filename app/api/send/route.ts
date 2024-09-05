import { ContactFormEmail } from "@/components/ContactEmailTemplate";
import { Resend } from "resend";
import * as React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST({ request }: { request: Request }) {
  const { senderEmail, message } = await request.json();
  try {
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["adamg42685@gmail.com"],
      subject: "Portfolio Message",
      react: ContactFormEmail({ senderEmail, message }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
