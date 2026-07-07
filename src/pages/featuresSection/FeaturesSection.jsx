import { motion } from 'framer-motion';
import { BarChart3, Lock, Smartphone, Wallet } from 'lucide-react';
import './FeaturesSection.css';

const featureCards = [
  {
    icon: Lock,
    title: 'One platform, one login',
    description:
      'Replace five disconnected registers and tools with a single secure system the whole school shares.',
  },
  {
    icon: Wallet,
    title: 'Your money, collected faster',
    description:
      'Online payments, automatic reminders and one-click reconciliation mean fewer dues and zero guesswork.',
  },
  {
    icon: Smartphone,
    title: 'Parents always in the loop',
    description:
      'Instant WhatsApp updates on attendance, homework and results — no extra app for parents to install.',
  },
  {
    icon: BarChart3,
    title: 'Decisions backed by data',
    description:
      'Live dashboards give management a real-time view across one campus or many.',
  },
];

const cardRevealShadow =
  '0 18px 42px rgba(15, 43, 74, 0.24), 0 0 0 1px rgba(0, 200, 150, 0.38), 0 0 40px rgba(0, 200, 150, 0.2)';

const cardHoverShadow =
  '0 24px 52px rgba(15, 43, 74, 0.3), 0 0 0 1px rgba(0, 200, 150, 0.5), 0 0 52px rgba(0, 200, 150, 0.28)';

function FeatureCard({ card, index }) {
  const Icon = card.icon;

  return (
    <motion.article
      className="featureCard"
      initial={{ opacity: 0, y: 48, scale: 0.9 }}
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
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.span
        className="featureCardIconWrap"
        initial={{ opacity: 0, scale: 0.4, rotate: -8 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.5,
          delay: index * 0.12 + 0.2,
          type: 'spring',
          stiffness: 280,
          damping: 18,
        }}
      >
        <Icon size={22} strokeWidth={2} />
      </motion.span>

      <motion.h3
        className="featureCardTitle"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, delay: index * 0.12 + 0.32, ease: 'easeOut' }}
      >
        <span className="featureCardTitleHighlight">{card.title}</span>
      </motion.h3>

      <motion.p
        className="featureCardDescription"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, delay: index * 0.12 + 0.42, ease: 'easeOut' }}
      >
        {card.description}
      </motion.p>
    </motion.article>
  );
}

export default function FeaturesSection() {
  return (
    <section id="features" className="featuresSection">
      <div className="featuresContainer">
        <motion.h2
          className="featuresHeading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Less admin. More teaching.
        </motion.h2>

        <div className="featuresGrid">
          {featureCards.map((card, index) => (
            <FeatureCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
