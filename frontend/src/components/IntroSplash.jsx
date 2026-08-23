import { useEffect, useState } from 'react';
import AssistantScene from './AssistantScene';
import './IntroSplash.css';

const LINE_1 = 'AIVA';
const LINE_2 = 'AI Interview & Virtual Assistant';
const LINE_3 = 'Practice smarter. Interview better.';

export default function IntroSplash({ onDone }) {
  const [typedTop, setTypedTop] = useState('');
  const [typedSub, setTypedSub] = useState('');
  const [typedTag, setTypedTag] = useState('');
  const [phase, setPhase] = useState('top');
  const [leaving, setLeaving] = useState(false);

  // YOUR EXACT LOGIC - UNTOUCHED
  useEffect(() => {
    let i = 0;
    const topTimer = setInterval(() => {
      i++;
      setTypedTop(LINE_1.slice(0, i));
      if (i >= LINE_1.length) {
        clearInterval(topTimer);
        setPhase('sub');
      }
    }, 120);
    return () => clearInterval(topTimer);
  }, []);

  useEffect(() => {
    if (phase !== 'sub') return;
    let j = 0;
    const subTimer = setInterval(() => {
      j++;
      setTypedSub(LINE_2.slice(0, j));
      if (j >= LINE_2.length) {
        clearInterval(subTimer);
        setPhase('tag');
      }
    }, 28);
    return () => clearInterval(subTimer);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'tag') return;
    let k = 0;
    const tagTimer = setInterval(() => {
      k++;
      setTypedTag(LINE_3.slice(0, k));
      if (k >= LINE_3.length) {
        clearInterval(tagTimer);
        setPhase('hold');
      }
    }, 35);
    return () => clearInterval(tagTimer);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'hold') return;
    const holdTimer = setTimeout(() => setLeaving(true), 700);
    const doneTimer = setTimeout(() => onDone && onDone(), 1300);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(doneTimer);
    };
  }, [phase, onDone]);

  return (
    <div className={`intro-splash ${leaving ? 'intro-leaving' : ''}`}>
      <div className="intro-panel app-shell-panel">
        <AssistantScene className="intro-assistant" label="Initializing interview assistant" />

        <div className="intro-text-block">
          <h1 className="intro-title">
            {typedTop}
            {phase === 'top' && <span className="intro-cursor" />}
          </h1>
          <p className="intro-subtitle">
            {typedSub}
            {phase === 'sub' && <span className="intro-cursor" />}
          </p>
          <p className="intro-tagline">
            {typedTag}
            {phase === 'tag' && <span className="intro-cursor intro-cursor-muted" />}
          </p>
        </div>

        <div className="intro-progress-container">
          <div className={`intro-progress-bar ${phase === 'hold' || leaving ? 'intro-progress-done' : ''}`} />
        </div>
      </div>
    </div>
  );
}
