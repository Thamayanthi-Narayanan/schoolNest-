import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Fingerprint, MessageCircle } from 'lucide-react';
import { useWordRevealInView } from '../../hooks/useWordRevealInView';
import HeroVisual from '../../components/heroVisual/HeroVisual';
import './PlatformSection.css';

const platformHeadlineWords = [
  { word: 'Your', line: 0 },
  { word: 'whole', line: 0 },
  { word: 'school.', line: 0, accent: 'teal' },
  { word: 'One', line: 1 },
  { word: 'smart', line: 1, accent: 'teal' },
  { word: 'platform.', line: 1, accent: 'teal' },
];

const boardItems = ['CBSE', 'State Board', 'Matric', 'ICSE'];

const platformFeaturePills = [
  { icon: Fingerprint, label: 'Biometric attendance' },
  { icon: MessageCircle, label: 'WhatsApp alerts' },
  { icon: CreditCard, label: 'UPI fee payments' },
];

function PlatformHeadline() {
  const { sectionRef, visibleCount } = useWordRevealInView(platformHeadlineWords, 120, 150);

  const lines = [[], []];

  platformHeadlineWords.forEach((item, index) => {
    const isVisible = index < visibleCount;
    lines[item.line].push(
      <span
        key={`${item.word}-${index}`}
        className={`platformWord ${isVisible ? 'platformWordVisible' : ''} ${
          item.accent === 'teal' ? 'platformWordAccent' : ''
        }`}
      >
        {item.word}
      </span>
    );
  });

  return (
    <h2 ref={sectionRef} className="platformHeadline">
      {lines.map((lineWords, lineIndex) => (
        <span key={`platform-line-${lineIndex}`} className="platformHeadlineLine">
          {lineWords.map((wordElement, wordIndex) => (
            <Fragment key={`platform-word-${lineIndex}-${wordIndex}`}>
              {wordIndex > 0 && ' '}
              {wordElement}
            </Fragment>
          ))}
        </span>
      ))}
    </h2>
  );
}

export default function PlatformSection() {
  return (
    <section id="platform" className="platformSection">
      <motion.div
        className="platformTrustBar"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <p className="platformTrustText">
          <span className="platformTrustLabel">Built for:</span>
          {boardItems.map((board, index) => (
            <Fragment key={board}>
              <span className="platformTrustHighlight">{board}</span>
              {index < boardItems.length - 1 && (
                <span className="platformTrustDivider" aria-hidden="true">
                  ·
                </span>
              )}
            </Fragment>
          ))}
        </p>
      </motion.div>

      <div className="platformContainer">
        <motion.div
          className="platformVisualWrap"
          initial={{ opacity: 0, x: -40, scale: 0.96 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="platformPremiumBadge">Premium Dashboard</span>
          <div className="platformVisualFrame">
            <HeroVisual />
          </div>
        </motion.div>

        <div className="platformContent">
          <PlatformHeadline />

          <motion.p
            className="platformSubtext"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.35, ease: 'easeOut' }}
          >
            Schoolnest brings{' '}
            <span className="platformSubtextHighlight">fees</span>,{' '}
            <span className="platformSubtextHighlight">attendance</span>,{' '}
            <span className="platformSubtextHighlight">transport</span>,{' '}
            <span className="platformSubtextHighlight">payroll</span> and parent communication
            into one secure cloud — so your team spends less time on paperwork and more time on
            students.
          </motion.p>

          <motion.div
            className="platformFeaturePills"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.5, ease: 'easeOut' }}
          >
            {platformFeaturePills.map(({ icon: Icon, label }) => (
              <span key={label} className="platformFeaturePill">
                <Icon size={18} className="platformFeatureIcon" strokeWidth={2.25} />
                {label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
