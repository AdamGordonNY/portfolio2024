import Landing from "@/components/Landing";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-dark-100 p-24">
      <div className="flex w-full flex-col content-center items-center justify-center">
        {" "}
        <h1 className="modern-h1 z-10 flex w-full items-center justify-center text-center text-white-900  ">
          Hi! I&apos;m Adam. I&apos;m a <br /> Next.JS developer <br />
          from New York.
        </h1>
        <p className="modern-paragraph-regular z-10 text-white-800">
          Web developer creating top-notch digital experiences with passion and
          precision
        </p>
      </div>

      <Landing />
    </main>
  );
}
