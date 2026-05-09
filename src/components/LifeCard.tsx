import { motion } from "framer-motion";

type LifeCardProps = {
  title: string;
  text: string;
  image: string;
  index: number;
};

export default function LifeCard({ title, text, image, index }: LifeCardProps) {
  const tilt = [-2, 1.5, -1, 2, -1.5, 1][index % 6];

  return (
    <motion.article
      className="group overflow-hidden rounded-[24px] border border-white/80 bg-white/68 shadow-soft"
      initial={{ opacity: 0, y: 30, rotate: tilt }}
      whileInView={{ opacity: 1, y: 0, rotate: tilt }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -7, rotate: 0 }}
      transition={{ delay: index * 0.05, duration: 0.58, ease: "easeOut" }}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <div className="image-placeholder absolute inset-0 -z-10" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="mt-3 text-sm leading-7 text-ink/64">{text}</p>
      </div>
    </motion.article>
  );
}
