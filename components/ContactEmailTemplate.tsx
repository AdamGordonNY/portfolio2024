import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";
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
      <Preview>New message from {`${senderEmail}`}e</Preview>
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
