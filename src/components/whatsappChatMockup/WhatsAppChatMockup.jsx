import { motion } from 'framer-motion';
import { MessageCircle, Radio, User } from 'lucide-react';
import { SchoolNestMark } from '../schoolNestLogo/SchoolNestLogo';
import './WhatsAppChatMockup.css';

const updateMessages = [
  {
    id: 'gate',
    text: '🟢 Aarav entered the school gate — 8:42 AM. Have a great day!',
    time: '8:42 AM',
    floatDelay: 0,
    floatDuration: 3.6,
  },
  {
    id: 'bus',
    text: '🚌 Bus 4 boarded · live tracking on. Reaching school in 12 min.',
    time: '8:21 AM',
    floatDelay: 0.5,
    floatDuration: 4,
  },
  {
    id: 'fee',
    text: '💰 Fee receipt ₹12,500 — Term 2 paid via UPI. Thank you!',
    time: 'Yesterday',
    floatDelay: 1,
    floatDuration: 3.8,
  },
];

function UpdateBubble({ message, index }) {
  return (
    <motion.div
      className="updatesBubbleWrap"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.12, ease: 'easeOut' }}
    >
      <motion.div
        className="updatesBubble"
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: message.floatDuration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: message.floatDelay,
        }}
      >
        <p className="updatesBubbleText">{message.text}</p>
        <span className="updatesBubbleTime">{message.time}</span>
      </motion.div>
    </motion.div>
  );
}

export default function WhatsAppChatMockup() {
  return (
    <motion.div
      className="whatsappVisualScene"
      initial={{ opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="updatesCard">
        <header className="updatesHeader">
          <span className="updatesIconWrap">
            <MessageCircle size={22} strokeWidth={2} />
          </span>
          <div className="updatesHeaderText">
            <span className="updatesTitle">Schoolnest Updates</span>
            <span className="updatesSubtitle">via WhatsApp · today</span>
          </div>
        </header>

        <div className="updatesBody">
          {updateMessages.map((message, index) => (
            <UpdateBubble key={message.id} message={message} index={index} />
          ))}
        </div>
      </div>

      <motion.div
        className="bleSmartCard"
        initial={{ opacity: 0, y: 40, rotate: -8 }}
        whileInView={{ opacity: 1, y: 0, rotate: -8 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, delay: 0.35, ease: 'easeOut' }}
      >
        <motion.div
          className="bleSmartCardInner"
          animate={{ y: [0, -7, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
        >
          <div className="bleSmartCardTop">
            <div className="bleSmartCardBrand">
              <span className="bleSmartCardLogo">
                <SchoolNestMark size={18} />
              </span>
              <div>
                <span className="bleSmartCardName">Schoolnest</span>
                <span className="bleSmartCardSchool">ST. MARY&apos;S MATRIC HR. SEC. SCHOOL</span>
              </div>
            </div>
            <span className="bleSmartCardBadge">BLE SMART CARD</span>
          </div>

          <div className="bleSmartCardProfile">
            <span className="bleSmartCardAvatar">
              <User size={28} strokeWidth={1.75} />
            </span>
            <div className="bleSmartCardInfo">
              <span className="bleSmartCardStudent">Aarav S.</span>
              <span className="bleSmartCardMeta">Grade VI — A · Roll 14</span>
              <span className="bleSmartCardMeta">Blood group B+ · Bus Route 4</span>
            </div>
          </div>

          <span className="bleSmartCardNfc">
            <Radio size={20} strokeWidth={2} />
          </span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
