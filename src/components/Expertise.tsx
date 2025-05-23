
import { motion } from "framer-motion";
import { Phone, MessageSquare, Users } from "lucide-react";

const expertiseItems = [
  {
    icon: Phone,
    title: "AI Voice Assistants",
    description: "Let our AI voice assistants answer every call—any time, in any language.",
    features: [
      "24/7 availability",
      "Unlimited concurrent calls",
      "Consistent and friendly tone",
      "Detects intent and routes smartly",
      "Multilingual support",
      "Integrates with CRMs, calendars & more",
      "Frees up your team for higher-priority work"
    ]
  },
  {
    icon: MessageSquare,
    title: "Conversational Chatbots",
    description: "Turn your website, WhatsApp, or social pages into 24/7 sales and support machines.",
    features: [
      "Instant replies to customer questions",
      "Captures leads while you sleep",
      "Handles FAQs, orders, and appointment booking",
      "Seamlessly routes complex issues to your team",
      "Works across all your channels",
      "Multilingual support",
      "Reduces time spent on repetitive support"
    ]
  },
  {
    icon: Users,
    title: "Digital Team Members",
    description: "AI-powered teammates that handle the busywork, follow instructions, and never call in sick.",
    features: [
      "Automate tasks that typically require human judgment with smart, AI-driven workflows",
      "Manage customer intake, triage service requests, generate reports, or track project updates",
      "Integrate with your tools—CRMs, calendars, email, and more",
      "Available 24/7, no training needed",
      "Scalable without increasing headcount",
      "Reduce manual errors and speed up execution",
      "Free up your team for high-impact work"
    ]
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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <item.icon className="w-12 h-12 text-secondary mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.description}</p>
              <ul className="space-y-2">
                {item.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <span className="text-secondary mr-2">•</span>
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
