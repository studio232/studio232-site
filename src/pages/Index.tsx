
import { Hero } from "@/components/Hero";
import { Expertise } from "@/components/Expertise";
import { Process } from "@/components/Process";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <Expertise />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
};

export default Index;
