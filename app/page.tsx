import Heading from "@/components/Landing/Heading";
import MyProjects from "@/components/Landing/MyProjects";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex min-w-full font-satoshi font-medium flex-col">
      <Heading />
      <MyProjects />
    </div>
  );
}
