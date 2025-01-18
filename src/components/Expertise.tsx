import { motion } from "framer-motion";
import { Code2, Brain, Bot, LineChart, MessageSquare, Camera } from "lucide-react";

const expertiseItems = [
  {
    icon: Code2,
    title: "Custom AI Development",
    description: "Designing AI solutions tailored to your specific business needs across various domains.",
  },
  {
    icon: Brain,
    title: "Process/Workflow Automation",
    description: "Implementing AI to automate routine tasks, increasing efficiency, and reducing operational costs.",
  },
  {
    icon: Bot,
    title: "Intelligent Communication Tools",
    description: "Enhancing customer engagement through AI-powered voice agents and multichannel chatbots.",
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Leveraging data to forecast trends, optimize operations, and inform strategic decisions.",
  },
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Extracting insights from text data to improve understanding and customer interactions.",
  },
  {
    icon: Camera,
    title: "Computer Vision",
    description: "Utilizing image and video analysis for quality control, security, and data extraction.",
  },
];

export const Expertise = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-16"
        >
          Our Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <item.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};