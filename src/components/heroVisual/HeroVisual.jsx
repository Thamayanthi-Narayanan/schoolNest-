import { motion } from 'framer-motion';
import { Check, FileText } from 'lucide-react';
import heroDashboardImage from '../../assets/images/ChatGPT Image Jul 4, 2026, 05_36_43 PM.png';
import './HeroVisual.css';

export default function HeroVisual() {
  return (
    <div className="heroVisualBlock">
      <motion.div
        className="heroVisualScene"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
      >
        <div className="heroBrowserFrame">
          <div className="heroBrowserBody">
            <motion.img
              src={heroDashboardImage}
              alt="Schoolnest dashboard on desktop showing fees, attendance, and school operations"
              className="heroDashboardImage"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.55, ease: 'easeOut' }}
            />
          </div>
        </div>

        <motion.div
          className="heroFloatCard heroFloatPayment"
          initial={{ opacity: 0, x: 20, y: -8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.55, delay: 1.1, ease: 'easeOut' }}
        >
          <motion.div
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1.5 }}
            className="heroFloatCardInner"
          >
            <span className="heroFloatIcon heroFloatIconGreen">
                <Check size={20} strokeWidth={3} />
            </span>
            <div>
              <strong>Payment Received</strong>
              <p>₹12,500 from Class 8A</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="heroFloatCard heroFloatReceipt"
          initial={{ opacity: 0, x: -20, y: 8 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.55, delay: 1.35, ease: 'easeOut' }}
        >
          <motion.div
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            className="heroFloatCardInner"
          >
            <span className="heroFloatIcon heroFloatIconBlue">
                <FileText size={20} />
            </span>
            <div>
              <strong>Receipt Generated</strong>
              <p>Auto-sent to parent</p>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
