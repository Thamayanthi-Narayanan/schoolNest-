import { motion } from 'framer-motion';
import {
  Banknote,
  BarChart3,
  BookOpen,
  Bus,
  ClipboardList,
  CreditCard,
  GraduationCap,
  IdCard,
  Library,
  Lock,
  MessageCircle,
  UserCheck,
} from 'lucide-react';
import './ModulesSection.css';

const moduleCards = [
  {
    icon: CreditCard,
    title: 'Fees & Payments',
    description: 'UPI, card & net-banking with auto-receipts.',
    badge: 'AI',
    badgeType: 'ai',
  },
  {
    icon: IdCard,
    title: 'BLE Smart ID Cards',
    description: 'Gate & bus safety alerts, hands-free attendance.',
    badge: 'NEW',
    badgeType: 'new',
  },
  {
    icon: MessageCircle,
    title: 'WhatsApp Assistant',
    description: 'Parents ask in Tamil/English, instant answers.',
    badge: 'AI',
    badgeType: 'ai',
  },
  {
    icon: GraduationCap,
    title: 'Admissions Copilot',
    description: 'Enquiry capture, auto follow-up, funnel view.',
    badge: 'AI',
    badgeType: 'ai',
  },
  {
    icon: ClipboardList,
    title: 'Student Attendance',
    description: 'BLE, RFID, biometric or app · period-wise.',
  },
  {
    icon: UserCheck,
    title: 'Staff Attendance',
    description: 'Teaching & non-teaching · leave tracking.',
  },
  {
    icon: Banknote,
    title: 'Salary & Payroll',
    description: 'Auto-calculated from timings · payslips.',
  },
  {
    icon: Bus,
    title: 'Transport & GPS',
    description: 'Live tracking, routes, fuel & service logs.',
  },
  {
    icon: BarChart3,
    title: 'Accounts & Finance',
    description: 'Income, expense & audit-ready reports.',
  },
  {
    icon: BookOpen,
    title: 'Exams & Report Cards',
    description: 'Marks entry, AI-drafted remarks, printing.',
  },
  {
    icon: Library,
    title: 'Library & Inventory',
    description: 'Catalogue, issue/return · stock & assets.',
  },
  {
    icon: Lock,
    title: 'Dashboard & Security',
    description: 'Live analytics, multi-branch, encrypted backups.',
  },
];

const cardRevealShadow =
  '0 16px 40px rgba(0, 0, 0, 0.22), 0 0 0 1px rgba(255, 255, 255, 0.06)';

const cardHoverShadow =
  '0 22px 48px rgba(0, 0, 0, 0.28), 0 0 0 1px rgba(0, 200, 150, 0.25)';

function ModuleCard({ card, index }) {
  const Icon = card.icon;

  return (
    <motion.article
      className="moduleCard"
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
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay: (index % 4) * 0.1 + Math.floor(index / 4) * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className="moduleCardTop">
        <motion.span
          className="moduleCardIcon"
          initial={{ opacity: 0, scale: 0.5, rotate: -8 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.5,
            delay: (index % 4) * 0.1 + Math.floor(index / 4) * 0.08 + 0.12,
            type: 'spring',
            stiffness: 260,
            damping: 18,
          }}
        >
          <Icon size={20} strokeWidth={2} />
        </motion.span>

        {card.badge && (
          <motion.span
            className={`moduleCardBadge moduleCardBadge${card.badgeType === 'new' ? 'New' : 'Ai'}`}
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.4,
              delay: (index % 4) * 0.1 + Math.floor(index / 4) * 0.08 + 0.2,
              type: 'spring',
              stiffness: 300,
              damping: 20,
            }}
          >
            {card.badge}
          </motion.span>
        )}
      </div>

      <motion.h3
        className="moduleCardTitle"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.45,
          delay: (index % 4) * 0.1 + Math.floor(index / 4) * 0.08 + 0.22,
          ease: 'easeOut',
        }}
      >
        {card.title}
      </motion.h3>

      <motion.p
        className="moduleCardText"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{
          duration: 0.45,
          delay: (index % 4) * 0.1 + Math.floor(index / 4) * 0.08 + 0.3,
          ease: 'easeOut',
        }}
      >
        {card.description}
      </motion.p>
    </motion.article>
  );
}

export default function ModulesSection() {
  return (
    <section id="modules" className="modulesSection">
      <div className="modulesContainer">
        <motion.h2
          className="modulesHeading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Every module, included.
        </motion.h2>

        <motion.p
          className="modulesSubtext"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
        >
          One place for every department — from the front office to the bus yard.
        </motion.p>

        <div className="modulesGrid">
          {moduleCards.map((card, index) => (
            <ModuleCard key={card.title} card={card} index={index} />
          ))}
        </div>

        <motion.p
          className="modulesFooter"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.15, ease: 'easeOut' }}
        >
          Single campus or many · Scales as you grow
        </motion.p>
      </div>
    </section>
  );
}
