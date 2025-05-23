
import { Hero } from "@/components/Hero";
import { Expertise } from "@/components/Expertise";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ScrollProgress } from "@/components/ScrollProgress";

const Index = () => {
  return (
    <main className="min-h-screen">
      <ScrollProgress />
      <Hero />
      <Expertise />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
