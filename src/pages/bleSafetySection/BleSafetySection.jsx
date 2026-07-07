import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Shield, Users } from 'lucide-react';
import SafetyTimeline from '../../components/safetyTimeline/SafetyTimeline';
import { useWordRevealInView } from '../../hooks/useWordRevealInView';
import './BleSafetySection.css';

const safetyCards = [
  {
    icon: Users,
    title: 'Staff wear it too',
    text: 'The same cards auto-mark teaching & non-teaching staff attendance — working hours flow straight into timings and payroll. One infrastructure, zero extra hardware.',
  },
  {
    icon: Shield,
    title: 'Safe School Certified',
    text: 'Display the Safe School badge at your gate and in admission brochures. When parents compare schools, visible safety wins admissions.',
  },
  {
    icon: CheckCircle,
    title: 'Better than RFID',
    text: 'BLE works hands-free at a distance — no tap queues at the gate, no forgotten punches, and lost-card alerts built in.',
  },
];

const safetyStats = [
  { value: '< 3 sec', label: "gate entry to parent's WhatsApp" },
  { value: '0 taps', label: 'hands-free detection, no queues' },
  { value: '4 check-ins', label: 'bus • gate • exit • drop-off, every day' },
  { value: '1 card', label: 'safety + attendance + staff payroll' },
];

const headlineWords = [
  { word: 'The', line: 0 },
  { word: 'moment', line: 0 },
  { word: 'they', line: 0 },
  { word: 'walk', line: 0 },
  { word: 'in,', line: 0 },
  { word: 'parents', line: 1, accent: true },
  { word: 'know.', line: 1, accent: true },
];

function SafetyHeadline() {
  const { sectionRef, visibleCount } = useWordRevealInView(headlineWords, 100, 150);
  const lines = [[], []];

  headlineWords.forEach((item, index) => {
    const isVisible = index < visibleCount;
    lines[item.line].push(
      <span
        key={`${item.word}-${index}`}
        className={`bleWord ${isVisible ? 'bleWordVisible' : ''} ${
          item.accent ? 'bleWordAccent' : ''
        }`}
      >
        {item.word}
      </span>
    );
  });

  return (
    <h2 ref={sectionRef} className="bleSafetyHeadline">
      {lines.map((lineWords, lineIndex) => (
        <span key={`ble-line-${lineIndex}`} className="bleSafetyHeadlineLine">
          {lineWords.map((wordElement, wordIndex) => (
            <Fragment key={`ble-word-${lineIndex}-${wordIndex}`}>
              {wordIndex > 0 && ' '}
              {wordElement}
            </Fragment>
          ))}
        </span>
      ))}
    </h2>
  );
}

export default function BleSafetySection() {
  return (
    <section id="ble-safety" className="bleSafetySection">
      <div className="bleSafetyGlow bleSafetyGlowLeft" aria-hidden="true" />
      <div className="bleSafetyGlow bleSafetyGlowRight" aria-hidden="true" />

      <div className="bleSafetyIntro">
        <motion.p
          className="bleSafetyLabel"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          BLE SMART ID CARD · CHILD SAFETY PARENTS CAN SEE
        </motion.p>

        <SafetyHeadline />

        <motion.p
          className="bleSafetySubtext"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.2, ease: 'easeOut' }}
        >
          Every student wears a BLE smart ID card. Gateways at the gate and on the bus detect it
          automatically — no tapping, no queues, nothing for the child to remember.
        </motion.p>
      </div>

      <div className="bleSafetyGrid">
        <div className="bleSafetyTimelineCol">
          <SafetyTimeline />
        </div>

        <div className="bleSafetyCards">
          {safetyCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.title}
                className="bleSafetyCard"
                initial={{ opacity: 0, x: 28, y: 16 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
              >
                <div className="bleSafetyCardHeader">
                  <span className="bleSafetyCardIcon">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <h3 className="bleSafetyCardTitle">{card.title}</h3>
                </div>
                <p className="bleSafetyCardText">{card.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>

      <div className="bleSafetyStats">
        {safetyStats.map((stat, index) => (
          <motion.div
            key={stat.value}
            className="bleSafetyStat"
            initial={{ opacity: 0, y: 24, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
          >
            <span className="bleSafetyStatValue">{stat.value}</span>
            <span className="bleSafetyStatLabel">{stat.label}</span>
          </motion.div>
        ))}
      </div>

      <motion.blockquote
        className="bleSafetyQuote"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
      >
        Parents at your school tell parents at other schools. Safety is your best marketing.
      </motion.blockquote>
    </section>
  );
}
