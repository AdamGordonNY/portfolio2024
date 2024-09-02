"use client";
import React from "react";

import { Input } from "./ui/input";

import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import { sendEmail } from "@/lib/actions/actions";
import { toast } from "sonner";
import SubmitButton from "./SubmitButton";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
};

export const ContactFormEmail = ({
  message,
  senderEmail,
}: ContactFormEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from {`${name}`}e</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 rounded-md px-10 py-4">
              <Heading className="leading-tight">
                You received the following message from the contact form
              </Heading>
              <Text>{message.replace(/'/g, "&apos;")}</Text>
              <Hr />
              <Text>The sender&apos;s email is: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
const ContactForm = () => {
  const form = useForm<typeof ContactFormEmail>({
    defaultValues: {
      message: "",
      senderEmail: "",
    },
  });

  return (
    <Form {...form}>
      <form
        className="mt-10 flex min-w-full flex-col gap-y-2  dark:text-dark-100  "
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            console.log(data);
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <FormField
          name="senderEmail"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    name="senderEmail"
                    placeholder="Your Name and Contact Info"
                    required
                    className="flex w-full flex-1 rounded-lg text-white-900"
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />
        <FormField
          name="message"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Textarea
                    {...field}
                    name="message"
                    placeholder="Your message"
                    required
                    rows={10}
                    maxLength={5000}
                    className="flex w-full flex-1 resize-none rounded-lg text-white-900"
                  />
                </FormControl>
              </FormItem>
            );
          }}
        />
        <SubmitButton />
      </form>
    </Form>
  );
};

export default ContactForm;
