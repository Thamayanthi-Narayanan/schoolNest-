import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import AdmissionsFunnelPanel from '../../components/admissionsFunnelPanel/AdmissionsFunnelPanel';
import './AdmissionsSection.css';

const featurePoints = [
  'Auto follow-up messages so no enquiry is forgotten',
  'Online admission forms & document collection',
  'Enquiry-to-admission funnel on the management dashboard',
];

export default function AdmissionsSection() {
  return (
    <section id="admissions" className="admissionsSection">
      <div className="admissionsContainer">
        <div className="admissionsContent">
          <motion.h2
            className="admissionsHeading"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Admissions Copilot
          </motion.h2>

          <motion.p
            className="admissionsSubtext"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          >
            Every enquiry — walk-in, phone or WhatsApp — is captured, followed up automatically
            and tracked to admission.
          </motion.p>

          <ul className="admissionsList">
            {featurePoints.map((point, index) => (
              <motion.li
                key={point}
                className="admissionsItem"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
              >
                <span className="admissionsCheck">
                  <Check size={16} strokeWidth={3} />
                </span>
                <span className="admissionsText">{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <AdmissionsFunnelPanel />
      </div>

      <motion.blockquote
        className="admissionsQuote"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
      >
        Most schools don&apos;t lose admissions to competitors — they lose them to sloppy
        follow-up.
      </motion.blockquote>
    </section>
  );
}
