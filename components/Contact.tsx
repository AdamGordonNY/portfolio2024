"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
const Contact = () => {
  return (
    <div className="">
      <h1 className="modern-h1-medium mb-6">
        Thanks for stopping by!. Let&apos;s get in touch!
      </h1>
      <div className="mb-6 flex justify-center space-x-6">
        <a href="#" className="hover:underline">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="#" className="hover:underline">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="#" className="hover:underline">
          <i className="fab fa-twitter"></i> Twitter
        </a>
        <a href="#" className="hover:underline">
          <i className="fab fa-instagram"></i> Instagram
        </a>
      </div>
      <p className="text-sm">
        <Link
          href={`mailto:adam@adam-gordon.info`}
          className="medium-paragraph-regular"
        >
          adam@adam-gordon.info
        </Link>
        <Image src="/public/icn.svg" alt="email" width={20} height={20} />
      </p>
      <div className="flex w-full justify-between px-10">
        <p className="modern-body-medium">© 2024 Adrian — created with ❤️</p>
        <p className="text-sm">adam@adam-gordon.info</p>
      </div>
    </div>
  );
};

export default Contact;
