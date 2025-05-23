
import { motion } from "framer-motion";

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact-form');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-primary to-secondary p-4 relative">
      <div className="absolute top-8 left-8">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <img 
            src="/lovable-uploads/47cfb3ce-7813-443e-a580-9308f6c8f70c.png" 
            alt="Studio 232 Logo" 
            className="w-10 h-10 object-contain"
          />
          <h1 className="text-2xl font-bold text-white">
            Studio 232
          </h1>
        </motion.div>
      </div>
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold text-white mb-6"
        >
          Grow Your Business with Custom AI Solutions
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
          onClick={scrollToContact}
          className="bg-accent hover:bg-accent/90 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors"
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};
