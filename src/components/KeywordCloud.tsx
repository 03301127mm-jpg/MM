import { motion } from "framer-motion";
import { keywordGroups } from "../data/projects";
import SectionTitle from "./SectionTitle";

const palette = ["bg-white", "bg-mist", "bg-butter", "bg-peach", "bg-leaf", "bg-lilac"];

export default function KeywordCloud() {
  return (
    <section id="keywords" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <SectionTitle
          title="我正在做什么"
          subtitle="在不同媒介里，把想法转化成可以被看见、被体验、被记住的作品。"
        />

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {keywordGroups.map((group, groupIndex) => (
            <motion.div
              key={group.title}
              className="rounded-[28px] border border-white/80 bg-white/42 p-5 shadow-soft backdrop-blur-sm"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: groupIndex * 0.09, duration: 0.65, ease: "easeOut" }}
            >
              <h3 className="mb-5 text-lg font-semibold">{group.title}</h3>
              <div className="flex flex-wrap gap-3">
                {group.words.map((word, index) => (
                  <motion.span
                    key={word}
                    className={`${palette[(index + groupIndex) % palette.length]} rounded-full border border-white px-4 py-2 text-sm shadow-sm`}
                    initial={{ opacity: 0, x: index % 2 ? 18 : -18, y: 14 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.06, rotate: index % 2 ? 2 : -2 }}
                    transition={{ delay: 0.12 + index * 0.06, duration: 0.45 }}
                  >
                    {word}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
