import { motion } from "framer-motion";

type ValueCardProps = {
  title: string;
  description: string;
  index: number;
};

export default function ValueCard({ title, description, index }: ValueCardProps) {
  const colors = ["bg-white", "bg-mist", "bg-butter", "bg-peach", "bg-leaf", "bg-lilac"];

  return (
    <motion.article
      className={`${colors[index % colors.length]} rounded-[24px] border border-white/80 p-6 shadow-soft`}
      initial={{ opacity: 0, y: 24, rotate: index % 2 ? 1.5 : -1.5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ rotate: index % 2 ? -1.5 : 1.5, boxShadow: "0 18px 48px rgba(75, 145, 220, 0.18)" }}
      transition={{ delay: index * 0.04, duration: 0.55, ease: "easeOut" }}
    >
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-ink/66">{description}</p>
    </motion.article>
  );
}
