
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className="py-8 px-4 bg-primary text-white text-sm"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-2">
        <span>© 2025 Studio 232</span>
        <span className="hidden md:inline">·</span>
        <a href="mailto:abhi@studio232.co" className="hover:text-accent transition-colors">
          abhi@studio232.co
        </a>
        <span className="hidden md:inline">·</span>
        <span>East Coast US</span>
        <span className="hidden md:inline">·</span>
        <span>Dubai</span>
      </div>
    </motion.footer>
  );
};
