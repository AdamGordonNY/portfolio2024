import PostDetails from "@/components/PostDetails";
import { Separator } from "@/components/ui/separator";
import { getPostsFromDevTo } from "@/lib/actions/actions";
import { Post } from "@prisma/client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
const Page = async () => {
  const data = await getPostsFromDevTo();

  return (
    <div className="custom-responsive-width flex   flex-col text-center font-satoshi  text-white-900">
      <div className="custom-responsive-width flex items-center justify-between pt-10 md:mx-20 ">
        <h1 className="base-regular md:modern-h3 font-inter">
          Cross Posted from{" "}
        </h1>

        <Link href={`https://devtoday.adam-gordon.info/posts`}>
          <Image
            src="/images/do-logo.svg"
            alt="devTodaylogo"
            width={100}
            height={50}
            className="text-gradient"
          />
        </Link>
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
