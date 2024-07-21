"use client";
import React from "react";
import reactElementToJSXString from "react-element-to-jsx-string";
import { toast, Toaster } from "sonner";
import { ButtonsCard } from "./ui/tailwind-css-buttons";
import { buttons } from "@/lib/constants";
import { useRouter } from "next/navigation";
import Image from "next/image";
import nextArrow from "@/public/nextarrow.svg";
export const GradientButton = ({
  text,
  className,
}: {
  text: string;
  className: string;
}) => {
  const router = useRouter();
  const handleNavigate = async () => {
    router.push("/projects");
  };
  return (
    <div
      className={`${className} inline-flex  w-[225px] h-16 items-center gap-x-[10px] justify-center rounded-full bg-gradient-to-b from-gradient-start to-gradient-end px-8 py-1 text-center text-white-900 transition duration-200 hover:shadow-xl focus:ring-2 focus:ring-blue-400`}
    >
      <button
        type="button"
        onClick={handleNavigate}
        className="inline-flex justify-between items-center max-h-full "
      >
        <span className="mr-2">{text}</span>
        <Image
          src={nextArrow}
          alt="arrow"
          width={16}
          height={16}
          className="ml-2 place-self-auto"
        />
      </button>
    </div>
  );
};
export function TailwindcssButtons() {
  const copy = (button: any) => {
    if (button.code) {
      copyToClipboard(button.code);
      return;
    }
    const buttonString = reactElementToJSXString(button.component);

    if (buttonString) {
      const textToCopy = buttonString;
      copyToClipboard(textToCopy);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
        toast.success("Copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text to clipboard:", err);
        toast.error("Error copying to clipboard");
      });
  };
  return (
    <div className="w-full px-4 pb-40">
      <Toaster position="top-center" />
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1  gap-10 md:grid-cols-2 lg:grid-cols-3">
        {buttons.map((button, idx) => (
          <ButtonsCard key={idx} onClick={() => copy(button)}>
            {button.component}
          </ButtonsCard>
        ))}
      </div>
    </div>
  );
}
