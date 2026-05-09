import { motion } from "framer-motion";

const navItems = [
  ["作品", "#projects"],
  ["关于我", "#values"],
  ["随笔", "#life"],
  ["联系我", "#contact"]
];

export default function Header() {
  return (
    <motion.header
      className="fixed left-0 top-0 z-50 w-full px-5 py-4 sm:px-8"
      initial={{ y: -28, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-cream/72 px-4 py-3 shadow-sm backdrop-blur-xl">
        <a href="#hero" className="text-sm font-semibold tracking-wide">
          赵翊冰
        </a>
        <div className="flex gap-1 text-xs sm:gap-2 sm:text-sm">
          {navItems.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="rounded-full px-3 py-2 transition hover:bg-white/80 hover:text-sky"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}
