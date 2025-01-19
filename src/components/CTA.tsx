import { motion } from "framer-motion";

export const CTA = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary to-accent">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6"
        >
          Ready to Grow Your Business with AI?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl text-white/90 mb-12"
        >
          Contact us today for a free consultation and discover how our custom AI solutions can propel your business forward.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white text-secondary hover:bg-white/90 font-semibold py-3 px-8 rounded-lg text-lg transition-colors"
        >
          Get Started Now
        </motion.button>
      </div>
    </section>
  );
};