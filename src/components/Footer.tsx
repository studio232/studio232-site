
import { motion } from "framer-motion";
export const Footer = () => {
  return <motion.footer initial={{
    opacity: 0
  }} animate={{
    opacity: 1
  }} transition={{
    delay: 0.5,
    duration: 0.5
  }} className="py-4 px-4 bg-accent/10 text-primary text-sm border-t border-accent/20">
      <div className="container mx-auto flex flex-wrap justify-center md:justify-start items-center gap-2">
        <span>© 2025 Studio 232</span>
        <span className="inline">·</span>
        <a href="mailto:abhi@studio232.co" className="hover:text-accent transition-colors">
          abhi@studio232.co
        </a>
        <span className="inline">·</span>
        <span>New York</span>
        <span className="inline">·</span>
        <span>Toronto</span>
        <span className="inline">·</span>
        <span>Dubai</span>
      </div>
    </motion.footer>;
};
