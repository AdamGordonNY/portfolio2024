import Contact from "@/components/Contact";
import BackgroundAndSkills from "@/components/Landing/BackgroundAndSkills";
import Heading from "@/components/Landing/Heading";
import MyProjects from "@/components/Landing/MyProjects";

export default function Home() {
  return (
    <div className="flex min-w-full mq450:w-[390px] flex-col font-satoshi font-medium">
      <Heading />
      <MyProjects />
      <BackgroundAndSkills />
      <Contact />
    </div>
  );
}
