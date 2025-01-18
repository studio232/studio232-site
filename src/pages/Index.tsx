import { Hero } from "@/components/Hero";
import { Expertise } from "@/components/Expertise";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Expertise />
      <Process />
      <CTA />
    </main>
  );
};

export default Index;