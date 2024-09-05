"use client";
import { IconLoader2 } from "@tabler/icons-react";
import React from "react";
import { useFormStatus } from "react-dom";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="relative p-[3px]" disabled={pending}>
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500" />
      <div className="bg-black modern-paragraph-regular  group relative flex items-center justify-center rounded-[6px]   px-8 py-2 text-white-900 transition duration-200 hover:bg-transparent">
        Send Message
        {pending && <IconLoader2 className="animate-spin align-middle" />}
      </div>
    </button>
  );
}
