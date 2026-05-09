import { motion, useMotionValue, useTransform } from "framer-motion";
import type { ReactNode } from "react";

type FloatingObjectProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  drift?: number;
  rotate?: number;
};

export default function FloatingObject({
  children,
  className = "",
  delay = 0,
  drift = 12,
  rotate = 0
}: FloatingObjectProps) {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const x = useTransform(pointerX, [-300, 300], [-8, 8]);
  const y = useTransform(pointerY, [-300, 300], [-6, 6]);

  return (
    <motion.div
      className={`absolute select-none ${className}`}
      style={{ x, y, rotate }}
      initial={{ opacity: 0, scale: 0.88, y: 18 }}
      animate={{ opacity: 1, scale: 1, y: [0, -drift, 0] }}
      transition={{
        opacity: { delay, duration: 0.55 },
        scale: { delay, duration: 0.55 },
        y: { delay, duration: 5.8, repeat: Infinity, ease: "easeInOut" }
      }}
      onPointerMove={(event) => {
        pointerX.set(event.clientX - window.innerWidth / 2);
        pointerY.set(event.clientY - window.innerHeight / 2);
      }}
    >
      {children}
    </motion.div>
  );
}
