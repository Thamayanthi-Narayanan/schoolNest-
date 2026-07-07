import { motion } from 'framer-motion';
import { Bus, Clock, Home, School } from 'lucide-react';
import './SafetyTimeline.css';

const timelineEvents = [
  {
    id: 'bus',
    icon: Bus,
    time: '8:21 AM',
    title: 'Boards the bus',
    text: 'Card detected on entry. Parent notified instantly — with live GPS tracking of the route.',
  },
  {
    id: 'gate',
    icon: School,
    time: '8:42 AM',
    title: 'Enters the school gate',
    text: "WhatsApp reaches the parent within seconds: 'Aarav entered the school gate — 8:42 AM.' Attendance is already marked.",
  },
  {
    id: 'safety',
    icon: Clock,
    time: '9:15 AM',
    title: 'SAFETY NET',
    text: "Didn't arrive? Everyone knows. If a child hasn't reached school by the cut-off, the parent and the front office are alerted automatically — before anyone has to ask.",
  },
  {
    id: 'home',
    icon: Home,
    time: '4:05 PM',
    title: 'Home safe',
    text: 'Gate exit and bus drop-off confirmed to the parent. Four moments of peace of mind, every single day.',
  },
];

export default function SafetyTimeline() {
  return (
    <div className="safetyTimeline">
      <div className="safetyTimelineTrack" aria-hidden="true">
        <motion.div
          className="safetyTimelineLineFill"
          initial={{ height: 0 }}
          whileInView={{ height: '100%' }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="safetyTimelineBusWrap"
          animate={{ top: ['4%', '28%', '52%', '76%', '4%'] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="safetyTimelineBus">
            <Bus size={14} strokeWidth={2.5} />
          </span>
        </motion.div>
      </div>

      <ul className="safetyTimelineList">
        {timelineEvents.map((event, index) => {
          const Icon = event.icon;

          return (
            <motion.li
              key={event.id}
              className="safetyTimelineItem"
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.12, ease: 'easeOut' }}
            >
              <motion.span
                className="safetyTimelineIcon"
                initial={{ scale: 0.6, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.12 + 0.15,
                  type: 'spring',
                  stiffness: 260,
                }}
              >
                <Icon size={18} strokeWidth={2} />
              </motion.span>

              <div className="safetyTimelineContent">
                <h3 className="safetyTimelineTitle">
                  {event.time} — {event.title}
                </h3>
                <p className="safetyTimelineText">{event.text}</p>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
