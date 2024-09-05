"use client";
import React from "react";

import { Input } from "./ui/input";

import { sendEmail } from "@/lib/actions/actions";
import { toast } from "sonner";
import SubmitButton from "./SubmitButton";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "./ui/textarea";
import { ContactFormEmail } from "./ContactEmailTemplate";

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
