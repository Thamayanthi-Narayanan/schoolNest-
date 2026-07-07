import { motion } from 'framer-motion';
import { useWordRevealInView } from '../../hooks/useWordRevealInView';
import './RoiSection.css';

const headlineWords = [
  { word: 'Stop', line: 0 },
  { word: 'losing', line: 0 },
  { word: 'money', line: 0, accent: 'navy' },
  { word: "you've", line: 1 },
  { word: 'already', line: 1 },
  { word: 'earned.', line: 1, accent: 'navy' },
];

function RoiHeadline() {
  const { sectionRef, visibleCount } = useWordRevealInView(headlineWords, 110, 200);

  const lines = [[], []];

  headlineWords.forEach((item, index) => {
    const isVisible = index < visibleCount;
    lines[item.line].push(
      <span
        key={`${item.word}-${index}`}
        className={`roiWord ${isVisible ? 'roiWordVisible' : ''} ${
          item.accent === 'navy' ? 'roiWordAccent' : ''
        }`}
      >
        {item.word}
      </span>
    );
  });

  return (
    <h2 ref={sectionRef} className="roiHeadline">
      {lines.map((lineWords, lineIndex) => (
        <span key={`roi-line-${lineIndex}`} className="roiHeadlineLine">
          {lineWords.map((wordElement, wordIndex) => (
            <span key={`roi-word-${lineIndex}-${wordIndex}`}>
              {wordIndex > 0 && ' '}
              {wordElement}
            </span>
          ))}
        </span>
      ))}
    </h2>
  );
}

export default function RoiSection() {
  return (
    <section id="roi" className="roiSection">
      <div className="roiContainer">
        <motion.div
          className="roiLeakageCard"
          initial={{ opacity: 0, x: -36, scale: 0.94 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="roiLeakageAmount"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.15, type: 'spring', stiffness: 220 }}
          >
            ₹6,25,000
          </motion.p>

          <motion.p
            className="roiLeakageLabel"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.28, ease: 'easeOut' }}
          >
            WHAT 5% LEAKAGE COSTS / YEAR
          </motion.p>

          <motion.p
            className="roiLeakageText"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
          >
            A 500-student school at ₹25,000 average annual fees loses ₹6.25 lakh a year to just 5%
            uncollected dues. Schoolnest costs a fraction of that — the fee module alone repays your
            investment many times over.
          </motion.p>

          <motion.span
            className="roiLeakageGlow"
            aria-hidden="true"
            animate={{ opacity: [0.35, 0.6, 0.35] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>

        <div className="roiContent">
          <motion.p
            className="roiLabel"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            YOUR SOFTWARE SHOULD PAY FOR ITSELF
          </motion.p>

          <RoiHeadline />

          <motion.p
            className="roiSubtext"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.45, ease: 'easeOut' }}
          >
            Most schools lose{' '}
            <span className="roiSubtextHighlight">3–8% of annual fees</span> to late payments,
            missed follow-ups and manual registers — and lose admissions to enquiries nobody called
            back.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
