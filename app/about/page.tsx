import Contact from "@/components/Contact";
import Heading from "@/components/Landing/Heading";
import MyProjects from "@/components/Landing/MyProjects";

export default function Home() {
  return (
    <div className="flex min-w-full flex-col font-satoshi font-medium">
      <Heading />
      <MyProjects />
      <div className="">
        <span></span>
      </div>

      <Contact />
    </div>
  );
}
