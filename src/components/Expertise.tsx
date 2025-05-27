
import { motion } from "framer-motion";
import { Phone, Users } from "lucide-react";

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
      "Frees up your team for higher-priority work",
      "Also works across WhatsApp, social media, and website messaging channels"
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

// Item variants for staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const Expertise = () => {
  return (
    <section className="py-20 px-4 bg-gray-50 relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-secondary/10 filter blur-3xl" />
      <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-accent/10 filter blur-3xl" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-16"
        >
          <span className="relative">
            Our Expertise
            <motion.span 
              className="absolute -bottom-2 left-0 w-full h-1 bg-secondary"
              initial={{ width: 0 }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </span>
        </motion.h2>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10"
        >
          {expertiseItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              className="bg-white backdrop-blur-sm bg-white/80 p-8 rounded-xl shadow-lg transition-all duration-300 border border-gray-100"
            >
              <div className="relative flex items-center justify-center w-16 h-16 mb-6 bg-secondary/10 rounded-lg">
                <item.icon className="w-8 h-8 text-secondary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
              <p className="text-gray-600 mb-6">{item.description}</p>
              
              <motion.ul 
                className="space-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1
                    }
                  }
                }}
              >
                {item.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex}
                    variants={{
                      hidden: { opacity: 0, x: -10 },
                      visible: { opacity: 1, x: 0, transition: { duration: 0.3 } }
                    }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
