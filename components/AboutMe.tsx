"use client";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "@/components/ui/animated-modal";
import ReusableButton from "./ReusableButton";
const AboutMe = () => {
  return (
    <div className="custom-responsive-width mx-4 flex w-fit flex-col items-center font-satoshi">
      <Modal>
        <ModalTrigger className="flex flex-col items-center">
          <ReusableButton
            text="My Journey - a Brief History"
            className="place-self-center"
            type="nav"
          ></ReusableButton>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <p>
              Before I decided to go back to school for a degree in Computer
              Science, I was a middle manager in a call center for a successful
              window replacement company.
            </p>
            <p>
              I have a track record of success in this area, as well as a long
              dream to run my own business or join a team of open-minded,
              forward-thinking individuals. I&apos;ve experience adversity
              throughout my life many times and it&apos;s a testament to my
              personal resiliency that I am still optimistic this can be
              achieved.
            </p>
            <p>
              While my primary objective is to do the work I got a degree in, I
              have a wide array of interests and because I maintain an open mind
              and a willingness to learn, I am confident that I can adapt to any
              situation and thrive in it, as long as there is a core foundation
              of trust and support within the team itself. I had gone to school
              for business after high school, because my parents implanted in my
              head without adding much else, that education was important. So
              without much direction or reason for why I was in college and alot
              of personal issues finding out who I am and what I waned to do, I
              never completed my business degree (though it did save me a year
              of school when I went back for Computer Science).
            </p>
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default AboutMe;
