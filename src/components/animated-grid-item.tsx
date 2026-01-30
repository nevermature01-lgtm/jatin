'use client';

import { motion } from 'framer-motion';

interface AnimatedGridItemProps {
  children: React.ReactNode;
  index: number;
  className?: string;
}

export function AnimatedGridItem({
  children,
  index,
  className,
}: AnimatedGridItemProps) {
  const variants = {
    hidden: { opacity: 0, x: index % 2 === 0 ? 100 : -100, scale: 0.9 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
