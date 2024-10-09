import PostDetails from "@/components/PostDetails";
import { Separator } from "@/components/ui/separator";
import { getPostsFromDevTo } from "@/lib/actions/actions";
import { Post } from "@prisma/client";
import Link from "next/link";
import React from "react";

const Page = async () => {
  const data = await getPostsFromDevTo();

  return (
    <div className="mq450:w-[375px] flex   flex-col text-center font-satoshi  text-white-900">
      <div className=" flex justify-center pt-10 md:mx-20 ">
        <h1 className="font-inter">Cross Posted from </h1>
        <span className="text-gradient">
          <Link href={`https://devtoday.adam-gordon.info/posts`}>
            https://devtoday.adam-gordon.info{" "}
          </Link>
        </span>{" "}
      </div>
      <Separator orientation="horizontal" />
      {data &&
        data.map((post, idx) => (
          <div key={idx} className="mq450:w-full  mq450:flex md:mx-10">
            {" "}
            <PostDetails post={post as Partial<Post>} />
          </div>
        ))}
    </div>
  );
};

export default Page;
