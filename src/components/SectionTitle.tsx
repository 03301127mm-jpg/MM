import { motion } from "framer-motion";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
  align?: "left" | "center";
};

export default function SectionTitle({ eyebrow, title, subtitle, align = "center" }: SectionTitleProps) {
  return (
    <motion.div
      className={`mx-auto mb-12 max-w-3xl ${align === "center" ? "text-center" : "text-left"}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      {eyebrow ? <p className="mb-3 text-sm font-medium text-sky">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold leading-tight sm:text-5xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-ink/62 sm:text-lg">{subtitle}</p>
    </motion.div>
  );
}
