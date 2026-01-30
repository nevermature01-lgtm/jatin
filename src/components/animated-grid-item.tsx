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
    hidden: { opacity: 0, x: index % 2 === 0 ? 50 : -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
