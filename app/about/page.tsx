import Contact from "@/components/Contact";
import Heading from "@/components/Landing/Heading";
import MyProjects from "@/components/Landing/MyProjects";

export default function Home() {
  return (
    <div className="custom-responsive-width min-size-full flex min-h-screen flex-col font-satoshi">
      <Heading />
      <MyProjects />

      <Contact />
    </div>
  );
}
