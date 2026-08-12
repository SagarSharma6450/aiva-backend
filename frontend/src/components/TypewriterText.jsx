import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Character-by-character typing animation with a smooth framer-motion cursor.
 */
export default function TypewriterText({
  text,
  speed = 40,
  delay = 0,
  active = true,
  className = '',
  onComplete,
}) {
  const [displayed, setDisplayed] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!active) {
      setDisplayed('');
      setDone(false);
      return;
    }

    let index = 0;
    setDisplayed('');
    setDone(false);

    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        index += 1;
        setDisplayed(text.slice(0, index));
        if (index >= text.length) {
          clearInterval(interval);
          setDone(true);
          onComplete?.();
        }
      }, speed);
      
      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [text, speed, delay, active, onComplete]);

  return (
    <span className={className}>
      {displayed}
      {active && !done && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
          style={{ 
            color: 'var(--accent-main)', 
            marginLeft: '4px',
            display: 'inline-block',
            fontWeight: '600'
          }}
        >
          |
        </motion.span>
      )}
    </span>
  );
}
