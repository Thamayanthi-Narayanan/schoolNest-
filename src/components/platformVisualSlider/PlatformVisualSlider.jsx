import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';
import HeroVisual from '../heroVisual/HeroVisual';
import dashboardSchoolnestImage from '../../assets/images/dashboardSchoolnest.png';
import './PlatformVisualSlider.css';

const slides = [
  {
    id: 'dashboard',
    alt: 'Schoolnest admin dashboard with fees, attendance, and school operations overview',
    type: 'image',
    image: dashboardSchoolnestImage,
  },
  {
    id: 'monitor',
    alt: 'Schoolnest dashboard on desktop with payment and receipt notifications',
    type: 'component',
  },
];

const slideIntervalMs = 4500;

export default function PlatformVisualSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  const goToSlide = useCallback((index) => {
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const startTimer = () => {
      timerRef.current = window.setInterval(() => {
        setActiveIndex((previous) => (previous + 1) % slides.length);
      }, slideIntervalMs);
    };

    startTimer();

    return () => {
      if (timerRef.current) {
        window.clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleDotClick = (index) => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
    }

    goToSlide(index);

    timerRef.current = window.setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % slides.length);
    }, slideIntervalMs);
  };

  const activeSlide = slides[activeIndex];

  return (
    <div className="platformVisualSlider">
      <div className="platformVisualSliderStage">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            className="platformVisualSlide"
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -36 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          >
            {activeSlide.type === 'image' ? (
              <div className="platformDashboardFrame">
                <img
                  src={activeSlide.image}
                  alt={activeSlide.alt}
                  className="platformDashboardImage"
                />
              </div>
            ) : (
              <HeroVisual />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="platformVisualDots" role="tablist" aria-label="Dashboard preview slides">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            role="tab"
            className={`platformVisualDot${index === activeIndex ? ' platformVisualDotActive' : ''}`}
            aria-label={`Show slide ${index + 1}`}
            aria-selected={index === activeIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
}
