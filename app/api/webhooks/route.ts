import { headers } from "next/headers";
import { WebhookEvent } from "@/lib/types";
import { Webhook } from "svix";
import type { NextApiRequest } from "next";
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function POST(req: NextApiRequest) {
  const secret = process.env.WEBHOOK_SECRET;

  // These were all sent from the server

  const payload = req.body;
  // Get the headers
  const headerPayload = headers();
  const svixId = headerPayload.get("svix-id")!;
  const svixTimestamp = headerPayload.get("svix-timestamp")!;
  const svixSignature = headerPayload.get("svix-signature")!;
  const wh = new Webhook(secret!);
  const evt = wh.verify(payload, {
    "svix-id": svixId,
    "svix-timestamp": svixTimestamp,
    "svix-signature": svixSignature,
  }) as WebhookEvent;
  // Throws on error, returns the verified content on success
}
