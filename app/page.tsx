import Landing from "@/components/Landing";
import ProjectOverview from "@/components/Projects/ProjectOverview";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center ">
      <Landing />

      <ProjectOverview />
    </main>
  );
}
