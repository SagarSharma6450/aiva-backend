import { useEffect, useRef } from 'react';

/**
 * Best-effort deterrents against casual cheating during a proctored session:
 * - Disables right-click, copy, cut, paste, and text selection
 * - Detects DevTools being opened via a window-dimension heuristic
 *
 * Note: browser extensions cannot be detected or blocked from page JavaScript —
 * this is a hard security boundary in all browsers, not a gap in this code.
 */
export default function useAntiCheat({ enabled, onViolation }) {
  const devtoolsOpenRef = useRef(false);

  useEffect(() => {
    if (!enabled) return;

    const blockEvent = (e) => e.preventDefault();
    document.addEventListener('contextmenu', blockEvent);
    document.addEventListener('copy', blockEvent);
    document.addEventListener('cut', blockEvent);
    document.addEventListener('paste', blockEvent);

    const style = document.createElement('style');
    style.id = 'anti-cheat-style';
    style.textContent = `
      body.proctored-session {
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }
      body.proctored-session input,
      body.proctored-session textarea {
        -webkit-user-select: text;
        -moz-user-select: text;
        user-select: text;
      }
    `;
    document.head.appendChild(style);
    document.body.classList.add('proctored-session');

    return () => {
      document.removeEventListener('contextmenu', blockEvent);
      document.removeEventListener('copy', blockEvent);
      document.removeEventListener('cut', blockEvent);
      document.removeEventListener('paste', blockEvent);
      document.body.classList.remove('proctored-session');
      document.getElementById('anti-cheat-style')?.remove();
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const THRESHOLD = 160; // px gap that usually indicates docked devtools

    const checkDevtools = () => {
      const widthGap = window.outerWidth - window.innerWidth;
      const heightGap = window.outerHeight - window.innerHeight;
      const isOpen = widthGap > THRESHOLD || heightGap > THRESHOLD;
      if (isOpen && !devtoolsOpenRef.current) {
        devtoolsOpenRef.current = true;
        onViolation?.('DEVTOOLS_OPENED');
      } else if (!isOpen) {
        devtoolsOpenRef.current = false;
      }
    };

    const interval = setInterval(checkDevtools, 2000);
    return () => clearInterval(interval);
  }, [enabled, onViolation]);
}
