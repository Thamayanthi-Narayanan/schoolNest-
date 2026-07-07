import { motion } from 'framer-motion';
import './FeeCollectionPanel.css';

const feeRecords = [
  { name: 'Arjun M. (X-B)', amount: '₹15,000', status: 'Paid', statusType: 'paid' },
  { name: 'Priya K. (VIII-A)', amount: '₹12,500', status: 'Overdue', statusType: 'overdue' },
  { name: 'Rahul S. (VI-A)', amount: '₹8,500', status: 'Due Soon', statusType: 'dueSoon' },
  { name: 'Meera J. (IX-C)', amount: '₹18,000', status: 'Paid', statusType: 'paid' },
  { name: 'Karthik R. (VII-B)', amount: '₹10,200', status: 'Overdue', statusType: 'overdue' },
];

export default function FeeCollectionPanel() {
  return (
    <motion.div
      className="feeCollectionPanel"
      initial={{ opacity: 0, x: 36, scale: 0.96 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <span className="feeCollectionGlow feeCollectionGlowTop" aria-hidden="true" />
      <span className="feeCollectionGlow feeCollectionGlowBottom" aria-hidden="true" />

      <div className="feeCollectionInner">
        <header className="feeCollectionHeader">
          <h3 className="feeCollectionTitle">Fee Collection</h3>
          <span className="feeCollectionTerm">Term 2 · Live</span>
        </header>

        <ul className="feeCollectionList">
          {feeRecords.map((record, index) => (
            <motion.li
              key={record.name}
              className="feeCollectionRow"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.15 + index * 0.08, ease: 'easeOut' }}
            >
              <div className="feeCollectionRowInfo">
                <span className="feeCollectionName">{record.name}</span>
                <span className="feeCollectionAmount">{record.amount}</span>
              </div>
              <span className={`feeCollectionBadge feeCollectionBadge${record.statusType}`}>
                {record.status}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
