import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type AnimatedCardProps = {
  children: ReactNode;
  delay?: number;
  hover?: boolean;
};

export default function AnimatedCard({ children, delay = 0, hover = true }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -4, boxShadow: '0 16px 32px rgba(0, 0, 0, 0.15)' } : {}}
      transition={{ duration: 0.3, delay, ease: [0.23, 1, 0.32, 1] }}
      viewport={{ once: true, amount: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
