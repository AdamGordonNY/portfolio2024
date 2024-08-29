"use client";
import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { useFormStatus } from "react-dom";
import { GradientButton } from "./TailwindCssButtons";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button className="p-[3px] relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl" />
      <div className="px-8 py-2  bg-black rounded-[6px] modern-paragraph-regular    relative group transition duration-200 text-white-900 hover:bg-transparent">
        Submit
      </div>
    </button>
  );
}
