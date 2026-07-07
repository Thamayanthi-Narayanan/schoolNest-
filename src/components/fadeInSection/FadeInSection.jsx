import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './fadeInSection.css';

export default function FadeInSection({ children, className = '' }) {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <motion.div
      ref={elementRef}
      className={className}
      initial={{ opacity: 0, y: 36 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 36 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
