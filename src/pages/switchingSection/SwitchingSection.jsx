import { motion } from 'framer-motion';
import { Box, Phone, School } from 'lucide-react';
import './SwitchingSection.css';

const switchingSteps = [
  {
    step: 1,
    icon: Box,
    title: 'Free 7-day migration',
    description:
      'We move your legacy data — students, fees, dues, staff — done for you, in one week. Zero disruption mid-term.',
  },
  {
    step: 2,
    icon: School,
    title: 'On-campus training',
    description:
      'Hands-on training for your office staff and teachers, at your school — until everyone is confident.',
  },
  {
    step: 3,
    icon: Phone,
    title: 'Support that answers',
    description:
      'Built & supported in Tamil Nadu. A real person on call — in your language, in your timezone.',
  },
];

const cardRevealShadow =
  '0 16px 40px rgba(15, 43, 74, 0.1), 0 0 0 1px rgba(15, 43, 74, 0.04)';

const cardHoverShadow =
  '0 22px 48px rgba(15, 43, 74, 0.14), 0 0 0 1px rgba(0, 200, 150, 0.2)';

function SwitchingCard({ card, index }) {
  const Icon = card.icon;

  return (
    <motion.article
      className="switchingCard"
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        boxShadow: cardRevealShadow,
      }}
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow: cardHoverShadow,
      }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.65,
        delay: index * 0.14,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.span
        className="switchingStepBadge"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.45,
          delay: index * 0.14 + 0.1,
          type: 'spring',
          stiffness: 280,
          damping: 18,
        }}
      >
        {card.step}
      </motion.span>

      <motion.span
        className="switchingCardIcon"
        initial={{ opacity: 0, scale: 0.5, rotate: -8 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.5,
          delay: index * 0.14 + 0.18,
          type: 'spring',
          stiffness: 260,
          damping: 18,
        }}
      >
        <Icon size={22} strokeWidth={2} />
      </motion.span>

      <motion.h3
        className="switchingCardTitle"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, delay: index * 0.14 + 0.28, ease: 'easeOut' }}
      >
        {card.title}
      </motion.h3>

      <motion.p
        className="switchingCardText"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, delay: index * 0.14 + 0.38, ease: 'easeOut' }}
      >
        {card.description}
      </motion.p>
    </motion.article>
  );
}

export default function SwitchingSection() {
  return (
    <section id="how-it-works" className="switchingSection">
      <div className="switchingContainer">
        <motion.h2
          className="switchingHeading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Switching is our job — not yours.
        </motion.h2>

        <div className="switchingGrid">
          {switchingSteps.map((card, index) => (
            <SwitchingCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
