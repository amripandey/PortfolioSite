import { motion } from "framer-motion";

export default function PageTitle() {
  return (
    <motion.div
      initial={{ y: -1000 }}
      animate={{ y: 0 }}
      transition={{ y: { type: "spring", duration: 1, bounce: 0.12 } }}
      className="SectionTitle"
    >
      <h1>Hi</h1>
      <h2>I'm Amrit Pandey</h2>
    </motion.div>
  );
}
