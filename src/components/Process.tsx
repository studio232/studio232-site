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
        <div className="grid md:grid-cols-2 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-secondary/10 p-8 rounded-xl">
                <div className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-bold shrink-0">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-secondary">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};