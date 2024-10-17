"use client";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import { testimonials } from "@/lib/data";
const Testimonials = () => {
  const testimons: { quote: string; name: string; title: string }[] = [];
  testimonials.forEach((test, idx) => {
    testimons.push({ title: test.name, quote: test.quote, name: test.name });
  });
  return (
    <div className="flex  items-center justify-center">
      <InfiniteMovingCards items={testimons!} direction="left" speed="fast" />
    </div>
  );
};

export default Testimonials;
