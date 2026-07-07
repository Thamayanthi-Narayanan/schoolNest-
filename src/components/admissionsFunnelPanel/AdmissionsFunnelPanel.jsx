import { motion } from 'framer-motion';
import './AdmissionsFunnelPanel.css';

const funnelStages = [
  {
    id: 'enquiry',
    label: 'Enquiry',
    count: 248,
    percent: 100,
    barClass: 'admissionsFunnelBarEnquiry',
  },
  {
    id: 'followup',
    label: 'Follow-up',
    count: 196,
    percent: 79,
    barClass: 'admissionsFunnelBarFollowup',
  },
  {
    id: 'form',
    label: 'Form',
    count: 132,
    percent: 53,
    barClass: 'admissionsFunnelBarForm',
  },
  {
    id: 'admission',
    label: 'Admission',
    count: 89,
    percent: 36,
    barClass: 'admissionsFunnelBarAdmission',
  },
];

function FunnelRow({ stage, index }) {
  return (
    <motion.div
      className="admissionsFunnelRow"
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
    >
      <div className="admissionsFunnelRowHeader">
        <span className="admissionsFunnelLabel">{stage.label}</span>
        <span className="admissionsFunnelCount">{stage.count}</span>
      </div>
      <div className="admissionsFunnelTrack">
        <motion.div
          className={`admissionsFunnelBar ${stage.barClass}`}
          initial={{ width: 0 }}
          whileInView={{ width: `${stage.percent}%` }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.9,
            delay: 0.35 + index * 0.12,
            ease: [0.22, 1, 0.36, 1],
          }}
        />
      </div>
    </motion.div>
  );
}

export default function AdmissionsFunnelPanel() {
  return (
    <motion.div
      className="admissionsFunnelPanel"
      initial={{ opacity: 0, x: 36, scale: 0.96 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="admissionsFunnelGlow" aria-hidden="true" />

      <div className="admissionsFunnelInner">
        <header className="admissionsFunnelHeader">
          <h3 className="admissionsFunnelTitle">Admissions Funnel · 2026</h3>
        </header>

        <div className="admissionsFunnelList">
          {funnelStages.map((stage, index) => (
            <FunnelRow key={stage.id} stage={stage} index={index} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
