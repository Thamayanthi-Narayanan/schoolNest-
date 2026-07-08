import { motion } from 'framer-motion';
import { Calendar, Globe, Mail, MapPin, Phone } from 'lucide-react';
import Footer from '../../components/footer/Footer';
import { useDemoForm } from '../../contexts/demoFormContext/DemoFormContext';
import './DemoSection.css';

const contactItems = [
  {
    icon: Globe,
    label: 'theinfinitevision.org',
    href: 'https://theinfinitevision.org',
  },
  {
    icon: Mail,
    label: 'info@theinfinitevision.org',
    href: 'mailto:info@theinfinitevision.org',
  },
  {
    icon: Phone,
    label: '+91 94422 45606',
    href: 'tel:+919442245606',
  },
  {
    icon: MapPin,
    label: 'Vellore, Tamil Nadu',
    href: null,
  },
];

const cardRevealShadow =
  '0 12px 32px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(255, 255, 255, 0.06)';

const cardHoverShadow =
  '0 16px 40px rgba(0, 0, 0, 0.26), 0 0 0 1px rgba(0, 200, 150, 0.22)';

function ContactCard({ item, index }) {
  const Icon = item.icon;
  const content = (
    <>
      <span className="demoContactIcon">
        <Icon size={18} strokeWidth={2} />
      </span>
      <span className="demoContactLabel">{item.label}</span>
    </>
  );

  return (
    <motion.div
      className="demoContactCard"
      initial={{ opacity: 0, y: 28, scale: 0.96 }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        boxShadow: cardRevealShadow,
      }}
      whileHover={{
        y: -4,
        scale: 1.02,
        boxShadow: cardHoverShadow,
      }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {item.href ? (
        <a className="demoContactLink" href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
          {content}
        </a>
      ) : (
        <div className="demoContactLink">{content}</div>
      )}
    </motion.div>
  );
}

export default function DemoSection() {
  const { openDemoForm } = useDemoForm();

  return (
    <section id="contact" className="demoSection">
      <div className="demoGlow" aria-hidden="true" />

      <div className="demoContainer">
        <div className="demoIntro">
          <motion.h2
            className="demoHeading"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
          >
            <span className="demoHeadingLine">See your school on Schoolnest —</span>
            <span className="demoHeadingAccent">free demo, this week.</span>
          </motion.h2>

          <motion.p
            className="demoSubtext"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, delay: 0.12, ease: 'easeOut' }}
          >
            Bring last term&apos;s fee register. We&apos;ll show you exactly how much you could have
            recovered — live, with your own numbers.
          </motion.p>

          <motion.button
            type="button"
            className="demoCtaButton"
            onClick={openDemoForm}
            initial={{ opacity: 0, y: 20, scale: 0.94 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: 0.22, ease: 'easeOut' }}
          >
            <Calendar size={20} strokeWidth={2} />
            Request a Demo
          </motion.button>
        </div>

        <div className="demoContactGrid">
          {contactItems.map((item, index) => (
            <ContactCard key={item.label} item={item} index={index} />
          ))}
        </div>

        <Footer />
      </div>
    </section>
  );
}
