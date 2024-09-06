import Contact from "@/components/Contact";
import Heading from "@/components/Landing/Heading";
import MyProjects from "@/components/Landing/MyProjects";

export default function Home() {
  return (
    <div className="custom-responsive-width flex min-w-full flex-col font-satoshi">
      <Heading />
      <MyProjects />

      <Contact />
    </div>
  );
}
