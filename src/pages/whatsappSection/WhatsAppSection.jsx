import { motion } from 'framer-motion';
import WhatsAppChatMockup from '../../components/whatsappChatMockup/WhatsAppChatMockup';
import './WhatsAppSection.css';

export default function WhatsAppSection() {
  return (
    <section id="whatsapp-ai" className="whatsappSection">
      <div className="whatsappContainer">
        <WhatsAppChatMockup />

        <div className="whatsappContent">
          <motion.h2
            className="whatsappHeading"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            WhatsApp AI Assistant
          </motion.h2>

          <motion.p
            className="whatsappSubtext"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.55, delay: 0.15, ease: 'easeOut' }}
          >
            Parents ask in Tamil or English — and get instant answers, day or night. No app to
            download, no front-office calls.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
