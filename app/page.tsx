import Landing from "@/components/Landing";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  bg-dark-100 ">
      <Navbar />
      <Landing />
    </main>
  );
}
