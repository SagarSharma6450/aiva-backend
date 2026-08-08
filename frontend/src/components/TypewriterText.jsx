import { useEffect, useState } from 'react';

/**
 * Character-by-character typing animation with blinking cursor.
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
    }, delay);

    return () => clearTimeout(startTimer);
  }, [text, speed, delay, active, onComplete]);

  return (
    <span className={className}>
      {displayed}
      {active && !done && <span className="typewriter-cursor" />}
    </span>
  );
}
