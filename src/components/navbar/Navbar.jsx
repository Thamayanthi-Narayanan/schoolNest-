import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useDemoForm } from '../../contexts/demoFormContext/DemoFormContext';
import SchoolNestLogo from '../schoolNestLogo/SchoolNestLogo';
import './Navbar.css';

const navLinks = [
  { label: 'Features', id: 'features' },
  { label: 'How it Works', id: 'how-it-works' },
  { label: 'Modules', id: 'modules' },
  { label: 'Contact', id: 'contact' },
];

export default function Navbar() {
  const { openDemoForm } = useDemoForm();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visibleEntries.length > 0) {
          setActiveSection(visibleEntries[0].target.id);
        }
      },
      {
        root: null,
        rootMargin: '-35% 0px -45% 0px',
        threshold: [0.1, 0.25, 0.5, 0.75],
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (sectionId) => {
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDemoClick = () => {
    setIsMobileMenuOpen(false);
    openDemoForm();
  };

  const getLinkClassName = (baseClass, sectionId) =>
    `${baseClass}${activeSection === sectionId ? ` ${baseClass}Active` : ''}`;

  return (
    <>
      <header className={`navbar ${isScrolled ? 'navbarScrolled' : 'navbarTransparent'}`}>
        <div className="navbarInner">
          <a
            href="#hero"
            className="navbarLogo"
            onClick={(event) => {
              event.preventDefault();
              handleNavClick('hero');
            }}
          >
            <SchoolNestLogo size={36} className="navbarLogoBrand" />
          </a>

          <nav className="navbarLinks" aria-label="Main navigation">
            {navLinks.map((link) => (
              <button
                key={link.id}
                type="button"
                className={getLinkClassName('navbarLink', link.id)}
                onClick={() => handleNavClick(link.id)}
                aria-current={activeSection === link.id ? 'true' : undefined}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <button type="button" className="navbarCta" onClick={handleDemoClick}>
            Request a Demo
          </button>

          <button
            type="button"
            className="navbarHamburger"
            aria-label="Open menu"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu size={24} />
          </button>
        </div>
      </header>

      <div className={`mobileDrawer ${isMobileMenuOpen ? 'mobileDrawerOpen' : ''}`}>
        <div className="mobileDrawerOverlay" onClick={() => setIsMobileMenuOpen(false)} />
        <aside className="mobileDrawerPanel">
          <button
            type="button"
            className="mobileDrawerClose"
            aria-label="Close menu"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <X size={24} />
          </button>
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              className={getLinkClassName('mobileDrawerLink', link.id)}
              onClick={() => handleNavClick(link.id)}
              aria-current={activeSection === link.id ? 'true' : undefined}
            >
              {link.label}
            </button>
          ))}
          <button type="button" className="mobileDrawerCta" onClick={handleDemoClick}>
            Request a Demo
          </button>
        </aside>
      </div>
    </>
  );
}
