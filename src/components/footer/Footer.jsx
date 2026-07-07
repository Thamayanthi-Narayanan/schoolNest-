import { motion } from 'framer-motion';
import { useDemoForm } from '../../contexts/demoFormContext/DemoFormContext';
import SchoolNestLogo from '../schoolNestLogo/SchoolNestLogo';
import './Footer.css';

const footerLinks = [
  { label: 'Features', id: 'features', action: 'scroll' },
  { label: 'Modules', id: 'modules', action: 'scroll' },
  { label: 'Demo', id: 'contact', action: 'demo' },
  { label: 'Contact', id: 'contact', action: 'scroll' },
  { label: 'Privacy', id: 'privacy', action: 'scroll' },
];

export default function Footer() {
  const { openDemoForm } = useDemoForm();

  const handleNavClick = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleFooterLinkClick = (link) => {
    if (link.action === 'demo') {
      openDemoForm();
      return;
    }

    handleNavClick(link.id);
  };

  return (
    <motion.footer
      className="siteFooter"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
    >
      <div className="siteFooterTop">
        <div className="siteFooterBrand">
          <a
            href="#hero"
            className="siteFooterLogo"
            onClick={(event) => {
              event.preventDefault();
              handleNavClick('hero');
            }}
          >
            <SchoolNestLogo
              size={36}
              wordmarkStyle="single"
              className="schoolNestLogoFooter"
            />
          </a>
          <p className="siteFooterTagline">A Product by Infinite Vision</p>
        </div>

        <nav className="siteFooterNav" aria-label="Footer navigation">
          {footerLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              className="siteFooterLink"
              onClick={() => handleFooterLinkClick(link)}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <p className="siteFooterBoards">
          Built for CBSE · State Board · Matric · ICSE
        </p>
      </div>

      <p className="siteFooterCopyright">
        © 2026 Infinite Vision. Schoolnest is a product of Infinite Vision. All rights reserved.
      </p>
    </motion.footer>
  );
}
