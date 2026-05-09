import { motion, useScroll, useTransform } from "framer-motion";
import FloatingObject from "./FloatingObject";

const objects = [
  { name: "毛毡小猫", className: "left-[7%] top-[27%]", rotate: -9, delay: 0.25, shape: "cat" },
  { name: "黏土笑脸", className: "right-[11%] top-[23%]", rotate: 10, delay: 0.4, shape: "smile" },
  { name: "亚克力卡片", className: "left-[18%] bottom-[18%]", rotate: 8, delay: 0.55, shape: "card" },
  { name: "像素方块", className: "right-[18%] bottom-[21%]", rotate: -8, delay: 0.7, shape: "pixel" },
  { name: "邮票纸片", className: "left-[8%] bottom-[34%]", rotate: -13, delay: 0.85, shape: "stamp" },
  { name: "视频卡片", className: "right-[7%] top-[48%]", rotate: 8, delay: 1, shape: "video" },
  { name: "蓝色星星", className: "left-[33%] top-[20%]", rotate: 13, delay: 1.15, shape: "star" },
  { name: "布料圆片", className: "right-[33%] bottom-[17%]", rotate: -5, delay: 1.3, shape: "cloth" }
];

function Shape({ shape, name }: { shape: string; name: string }) {
  const base = "grid place-items-center shadow-sticker";

  if (shape === "cat") {
    return (
      <div className={`${base} h-24 w-24 rounded-[34%] bg-leaf text-4xl sm:h-32 sm:w-32`} aria-label={name}>
        <span className="-mt-1">=^.^=</span>
      </div>
    );
  }

  if (shape === "smile") {
    return (
      <div className={`${base} h-20 w-20 rounded-full bg-butter text-3xl sm:h-28 sm:w-28`} aria-label={name}>
        :)
      </div>
    );
  }

  if (shape === "card") {
    return (
      <div className="acrylic h-24 w-36 rounded-2xl p-4 text-xs sm:h-28 sm:w-44" aria-label={name}>
        <div className="mb-3 h-3 w-16 rounded-full bg-sky/50" />
        <div className="h-12 rounded-xl bg-white/70" />
      </div>
    );
  }

  if (shape === "pixel") {
    return (
      <div className="grid grid-cols-3 gap-1" aria-label={name}>
        {["bg-sky", "bg-peach", "bg-white", "bg-ink", "bg-cyan", "bg-butter", "bg-leaf", "bg-lilac", "bg-sky"].map((color, index) => (
          <span key={index} className={`h-5 w-5 rounded-[4px] ${color} shadow-sm sm:h-7 sm:w-7`} />
        ))}
      </div>
    );
  }

  if (shape === "stamp") {
    return (
      <div className="h-24 w-20 rounded-lg border border-dashed border-ink/30 bg-white p-2 shadow-sticker sm:h-28 sm:w-24" aria-label={name}>
        <div className="h-full rounded-md bg-mist p-2 text-[10px] leading-tight text-ink/60">城市<br />地图<br />记忆</div>
      </div>
    );
  }

  if (shape === "video") {
    return (
      <div className="h-24 w-36 rounded-2xl border border-white bg-ink p-2 shadow-sticker sm:h-28 sm:w-44" aria-label={name}>
        <div className="image-placeholder h-full rounded-xl">
          <span className="ml-3 mt-3 inline-grid h-8 w-8 place-items-center rounded-full bg-white/80 text-xs">▶</span>
        </div>
      </div>
    );
  }

  if (shape === "star") {
    return <div className="text-5xl text-sky drop-shadow-sm sm:text-7xl" aria-label={name}>*</div>;
  }

  return <div className={`${base} h-16 w-16 rounded-full bg-peach sm:h-20 sm:w-20`} aria-label={name} />;
}

export default function HeroIntro() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.22], [0, -80]);

  return (
    <section id="hero" className="paper-texture relative flex min-h-screen items-center justify-center px-6 pt-20">
      <motion.div className="absolute inset-0" style={{ opacity, y }}>
        {objects.map((item) => (
          <FloatingObject key={item.name} className={item.className} rotate={item.rotate} delay={item.delay}>
            <Shape shape={item.shape} name={item.name} />
          </FloatingObject>
        ))}
      </motion.div>

      <motion.div
        className="relative z-10 mx-auto max-w-4xl text-center"
        style={{ opacity, y }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <h1 className="text-5xl font-semibold leading-tight sm:text-7xl lg:text-8xl">Hi! 这里是赵翊冰</h1>
        <p className="mt-6 text-lg text-ink/62 sm:text-2xl">设计 · 创作 · 探索 · 连接</p>
      </motion.div>
    </section>
  );
}
