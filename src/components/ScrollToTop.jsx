import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import '../assets/css/ScrollToTop.css';
import { ReactComponent as ArrowUp } from '../assets/images/ArrowUp.svg';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    });
  }, []);

  const goTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          exit={{ y: '100vh' }}
          transition={{ duration: 0.7 }}
          style={{ position: 'fixed', bottom: '20px', right: '20px' }}
        >
          <button className="btn-scrollTop bg-white dark:bg-black" onClick={goTop}>
            <ArrowUp className="w-full h-full p-4 dark:stroke-white up-arrow" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;