import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import FeeCollectionPanel from '../../components/feeCollectionPanel/FeeCollectionPanel';
import './FeeRecoverySection.css';

const featurePoints = [
  'Predicts who will pay late from payment history — before the due date passes',
  'Auto-sequenced reminders — polite WhatsApp first, call script next, principal escalation last',
  'Suggests instalment plans for struggling families — recover fees without hard conversations',
  'UPI, card, net-banking & counter with instant receipts and one-click daily reconciliation',
];

export default function FeeRecoverySection() {
  return (
    <section id="fee-recovery" className="feeRecoverySection">
      <div className="feeRecoveryContainer">
        <div className="feeRecoveryContent">
          <motion.span
            className="feeRecoveryBadge"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            FLAGSHIP
          </motion.span>

          <motion.h2
            className="feeRecoveryHeading"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
          >
            AI Fee-Recovery Engine
          </motion.h2>

          <ul className="feeRecoveryList">
            {featurePoints.map((point, index) => (
              <motion.li
                key={point}
                className="feeRecoveryItem"
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
              >
                <span className="feeRecoveryCheck">
                  <Check size={16} strokeWidth={3} />
                </span>
                <span className="feeRecoveryText">{point}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        <FeeCollectionPanel />
      </div>
    </section>
  );
}
