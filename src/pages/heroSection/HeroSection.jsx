import { Fragment } from 'react';
import { motion } from 'framer-motion';
import { useWordReveal } from '../../hooks/useWordReveal';
import { useDemoForm } from '../../contexts/demoFormContext/DemoFormContext';
import Navbar from '../../components/navbar/Navbar';
import HeroVisual from '../../components/heroVisual/HeroVisual';
import PlatformSection from '../platformSection/PlatformSection';
import FeaturesSection from '../featuresSection/FeaturesSection';
import RoiSection from '../roiSection/RoiSection';
import FeeRecoverySection from '../feeRecoverySection/FeeRecoverySection';
import WhatsAppSection from '../whatsappSection/WhatsAppSection';
import AdmissionsSection from '../admissionsSection/AdmissionsSection';
import BleSafetySection from '../bleSafetySection/BleSafetySection';
import AttendanceSection from '../attendanceSection/AttendanceSection';
import ModulesSection from '../modulesSection/ModulesSection';
import SwitchingSection from '../switchingSection/SwitchingSection';
import DemoSection from '../demoSection/DemoSection';
import './HeroSection.css';

const headlineWords = [
  { word: 'Every', line: 0 },
  { word: 'rupee', line: 0 },
  { word: 'on', line: 0, accent: 'teal' },
  { word: 'time.', line: 0, accent: 'teal' },
  { word: 'Every', line: 1 },
  { word: 'child', line: 1 },
  { word: 'safe.', line: 1, accent: 'yellow' },
  { word: 'Every', line: 2 },
  { word: 'parent', line: 2 },
  { word: 'informed.', line: 2 },
];

function HeroHeadline() {
  const visibleCount = useWordReveal(headlineWords, 130, 300);

  const lines = [[], [], []];

  headlineWords.forEach((item, index) => {
    const isVisible = index < visibleCount;
    lines[item.line].push(
      <span
        key={`${item.word}-${index}`}
        className={`heroWord ${isVisible ? 'heroWordVisible' : ''} ${
          item.accent === 'teal' ? 'headlineAccentTeal' : ''
        } ${item.accent === 'yellow' ? 'headlineAccentYellow' : ''}`}
      >
        {item.word}
      </span>
    );
  });

  return (
    <h1 className="heroHeadline">
      {lines.map((lineWords, lineIndex) => (
        <span key={`headline-line-${lineIndex}`} className="heroHeadlineLine">
          {lineWords.map((wordElement, wordIndex) => (
            <Fragment key={`headline-word-${lineIndex}-${wordIndex}`}>
              {wordIndex > 0 && ' '}
              {wordElement}
            </Fragment>
          ))}
        </span>
      ))}
    </h1>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
};

export default function HeroSection() {
  const { openDemoForm } = useDemoForm();

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="heroPage">
      <Navbar />

      <section id="hero" className="heroSection">
        <div className="heroGlow" aria-hidden="true" />

        <div className="heroContainer">
          <div className="heroContent">
            <motion.p
              className="heroLabel"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.1}
            >
              THE FEE-RECOVERY &amp; CHILD-SAFETY PLATFORM FOR SCHOOLS
            </motion.p>

            <HeroHeadline />

            <motion.p
              className="heroSubtext"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.55}
            >
              Schoolnest is the school platform that pays for itself — AI that recovers pending
              fees automatically, BLE smart ID cards that tell parents their child is safe, and
              WhatsApp updates that make your school the one everyone talks about.
            </motion.p>

            <motion.div
              className="heroBadges"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.7}
            >
              <span className="heroBadge">🟢 AI Fee Recovery</span>
              <span className="heroBadge">🟡 BLE Smart ID Cards</span>
              <span className="heroBadge">🟢 WhatsApp AI Assistant</span>
            </motion.div>

            <motion.div
              className="heroCtaRow"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              custom={0.85}
            >
              <button type="button" className="btnPrimary btnLarge" onClick={openDemoForm}>
                Request a Demo
              </button>
              <button type="button" className="btnGhost btnLarge" onClick={() => handleNavClick('how-it-works')}>
                See How It Works
              </button>
            </motion.div>
          </div>

          <HeroVisual />
        </div>
      </section>

      <PlatformSection />
      <FeaturesSection />
      <RoiSection />
      <FeeRecoverySection />
      <WhatsAppSection />
      <AdmissionsSection />
      <BleSafetySection />
      <AttendanceSection />
      <ModulesSection />
      <SwitchingSection />
      <DemoSection />
    </div>
  );
}
