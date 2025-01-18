import { motion } from "framer-motion";

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
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-16"
        >
          Our Process
        </motion.h2>
        <div className="space-y-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`flex flex-col md:flex-row items-center gap-6 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="bg-secondary/10 p-8 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-secondary">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-2 h-16 md:w-16 md:h-2 bg-secondary/20 rounded-full" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};