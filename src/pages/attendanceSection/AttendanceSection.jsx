import { motion } from 'framer-motion';
import { GraduationCap, UserCheck, Users } from 'lucide-react';
import './AttendanceSection.css';

const attendanceCards = [
  {
    icon: GraduationCap,
    title: 'Students',
    description:
      'Period & subject-wise via app, RFID card or biometric; absentees alerted automatically.',
  },
  {
    icon: UserCheck,
    title: 'Teaching Staff',
    description:
      'Fingerprint biometric devices feed working hours directly into payroll.',
  },
  {
    icon: Users,
    title: 'Non-Teaching Staff',
    description:
      'Same biometric login for admin, support & transport teams, with leave tracking.',
  },
];

const cardRevealShadow =
  '0 16px 40px rgba(15, 43, 74, 0.1), 0 0 0 1px rgba(15, 43, 74, 0.04)';

const cardHoverShadow =
  '0 22px 48px rgba(15, 43, 74, 0.14), 0 0 0 1px rgba(0, 200, 150, 0.2)';

function AttendanceCard({ card, index }) {
  const Icon = card.icon;

  return (
    <motion.article
      className="attendanceCard"
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
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <motion.span
        className="attendanceCardIcon"
        initial={{ opacity: 0, scale: 0.5, rotate: -8 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.5,
          delay: index * 0.12 + 0.15,
          type: 'spring',
          stiffness: 260,
          damping: 18,
        }}
      >
        <Icon size={22} strokeWidth={2} />
      </motion.span>

      <motion.h3
        className="attendanceCardTitle"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, delay: index * 0.12 + 0.28, ease: 'easeOut' }}
      >
        {card.title}
      </motion.h3>

      <motion.p
        className="attendanceCardText"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, delay: index * 0.12 + 0.38, ease: 'easeOut' }}
      >
        {card.description}
      </motion.p>
    </motion.article>
  );
}

export default function AttendanceSection() {
  return (
    <section id="attendance" className="attendanceSection">
      <div className="attendanceContainer">
        <motion.span
          className="attendanceBadge"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          3-IN-1 ATTENDANCE SUITE
        </motion.span>

        <motion.h2
          className="attendanceHeading"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.08, ease: 'easeOut' }}
        >
          Three attendance systems, one dashboard
        </motion.h2>

        <motion.p
          className="attendanceSubtext"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, delay: 0.18, ease: 'easeOut' }}
        >
          Every punch flows straight through to reports and payroll.
        </motion.p>

        <div className="attendanceGrid">
          {attendanceCards.map((card, index) => (
            <AttendanceCard key={card.title} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
