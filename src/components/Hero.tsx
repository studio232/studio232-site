
import { motion } from "framer-motion";
import { ParticleBackground } from "./ParticleBackground";

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-form');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary p-4 relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      <div className="absolute top-0 left-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <img 
            src="/lovable-uploads/3aac652b-c46f-4d9c-a3a7-ac9bb60176d3.png" 
            alt="Studio 232 Logo" 
            className="w-48 h-48 object-contain"
          />
        </motion.div>
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10 backdrop-blur-sm p-8 rounded-2xl bg-white/5">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          <span className="relative inline-block">
            Grow 
            <motion.span
              className="absolute bottom-1 left-0 w-full h-1 bg-accent"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1.2, delay: 1 }}
            />
          </span>{" "}
          Your Business with Custom AI Solutions
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-200 mb-12"
        >
          We develop tailored AI technologies that drive growth, optimize processes, and solve your unique business challenges.
        </motion.p>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(129, 140, 248, 0.5)" }}
          whileTap={{ scale: 0.95 }}
          onClick={scrollToContact}
          className="bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all"
        >
          Get Started
        </motion.button>
      </div>
      
      {/* Animated lines */}
      <motion.div 
        className="absolute bottom-10 left-0 w-full h-[1px] bg-white/10"
        initial={{ scaleX: 0, transformOrigin: "left" }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
    </section>
  );
};
