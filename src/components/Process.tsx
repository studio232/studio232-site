
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const processSteps = [
  {
    title: "Consultation",
    description: "We begin by understanding your business goals, challenges, and opportunities for AI integration.",
  },
  {
    title: "Needs Assessment & ROI Analysis",
    description: "Identify and prioritize challenges based on potential impact and return on investment.",
  },
  {
    title: "Solution Development",
    description: "Design and develop custom AI solutions tailored to your unique requirements.",
  },
  {
    title: "Implementation",
    description: "Seamlessly integrate AI technologies into your existing systems and workflows.",
  },
  {
    title: "Training & Onboarding",
    description: "If needed, provide comprehensive training to ensure your team can effectively utilize new AI tools.",
  },
  {
    title: "Ongoing Support & Optimization",
    description: "Offer continuous support and refine solutions to adapt to your evolving business needs.",
  },
];

export const Process = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Parallax effect values
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  
  return (
    <section ref={containerRef} className="py-20 px-4 bg-white relative overflow-hidden">
      {/* Parallax background elements */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-secondary/5 filter blur-3xl" />
        <div className="absolute top-40 right-20 w-72 h-72 rounded-full bg-accent/5 filter blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 rounded-full bg-primary/5 filter blur-3xl" />
      </motion.div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-8"
        >
          <span className="relative inline-block">
            Our Process
            <motion.span
              className="absolute -bottom-2 left-0 w-full h-1 bg-secondary"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </span>
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16"
        >
          We believe that one size doesn't fit all. That's why we build AI solutions customized to your business, ensuring maximum impact and ROI.
        </motion.p>
        
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15
              }
            }
          }}
        >
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
              }}
              whileHover={{
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="relative h-full"
            >
              <div className="bg-gradient-to-br from-white to-secondary/5 p-8 rounded-xl h-full flex flex-col border border-secondary/10">
                <div className="flex items-start gap-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary/20 border-2 border-secondary shrink-0">
                    <span className="text-secondary font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-4 text-secondary">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
              
              {/* Connection lines between steps */}
              {index < processSteps.length - 1 && index % 2 === 0 && (
                <motion.div 
                  className="hidden md:block absolute top-1/2 right-0 w-8 h-[2px] bg-secondary/30"
                  style={{ transform: "translateX(100%)" }}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                />
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
