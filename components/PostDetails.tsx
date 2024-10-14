"use client";

import { Separator } from "./ui/separator";

import React, { useEffect } from "react";
import { useDebounceCallback } from "usehooks-ts";
import { incrementViews } from "@/lib/actions/actions";
import { format } from "date-fns/format";
import HTMLParser from "./HTMLParser";
const PostDetails = ({
  post,
}: {
  post: {
    tags?: string[] | undefined;
    title?: string | undefined;
    body?: string;
    image?: string | null;
    id?: number;
    createdAt?: Date;
  };
}) => {
  const { body, title, id, createdAt } = post;
  const debouncedIncrementViews = useDebounceCallback(incrementViews, 30000);

  useEffect(() => {
    if (id) debouncedIncrementViews({ id, contentType: "post" });
  }, [id, debouncedIncrementViews]);
  const formattedDate = format(createdAt!, "MMMM dd, yyyy");

  return (
    <section className="custom-responsive-width flex w-full flex-col flex-wrap items-center gap-y-6 pt-10 font-inter text-white-900">
      <section className="custom-responsive-width  flex  flex-col gap-y-6">
        <div className="flex flex-col items-center justify-between ">
          <span className="modern-h3 max-md:base-regular">
            {title ?? "Missing Post Title!"}
          </span>{" "}
          <span className="body-regular mb-5">{formattedDate}</span>
        </div>

        {body && <HTMLParser htmlString={body!} />}
      </section>

      <Separator
        orientation="horizontal"
        className="text-white-border dark:bg-dark-700 dark:text-dark-700 my-4 size-px w-full"
      />
    </section>
  );
};

export default PostDetails;
