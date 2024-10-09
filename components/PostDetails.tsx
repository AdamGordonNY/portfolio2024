"use client";

import { Separator } from "./ui/separator";

import React, { useEffect, useState } from "react";
import { useDebounceCallback } from "usehooks-ts";
import { incrementViews } from "@/lib/actions/actions";
import dompurify from "dompurify";
import { format } from "date-fns/format";
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
  const [postBody, setPostBody] = useState<string>("");
  useEffect(() => {
    if (id) debouncedIncrementViews({ id, contentType: "post" });
  }, [id, debouncedIncrementViews]);
  const formattedDate = format(createdAt!, "MMMM dd, yyyy");
  useEffect(() => {
    const cleanHTML = async (body: string) => {
      const clean = await dompurify.sanitize(body);
      if (!clean) {
        return body;
      }
      return clean;
    };

    cleanHTML(body!).then((cleaned) => {
      setPostBody(cleaned);
    });
  }, [body]);
  return (
    <section className="mq450:max-w-[375px] flex w-full flex-col flex-wrap items-center gap-y-6 pt-10 font-inter text-white-900">
      <section className="mq450:max-w-[375px] mx-2 flex  flex-col gap-y-6">
        <div className="flex flex-col items-center justify-between px-3">
          <h1 className="modern-h1 ">{title ?? "Missing Post Title!"}</h1>{" "}
          <span>{formattedDate}</span>
        </div>

        {postBody && (
          <div
            dangerouslySetInnerHTML={{ __html: postBody }}
            className="body-regular text-white-400 flex-col items-center justify-center text-center font-inter max-md:text-left"
          />
        )}
      </section>

      <Separator
        orientation="horizontal"
        className="text-white-border dark:bg-dark-700 dark:text-dark-700 my-4 size-px w-full"
      />
    </section>
  );
};

export default PostDetails;
