import { useEffect, useState } from 'react';
import './IntroSplash.css';

const LINE_1 = 'AIVA';
const LINE_2 = 'AI Interview & Virtual Assistant';

export default function IntroSplash({ onDone }) {
  const [typedTop, setTypedTop] = useState('');
  const [typedSub, setTypedSub] = useState('');
  const [phase, setPhase] = useState('top'); // top -> sub -> hold -> leaving
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    let i = 0;
    const topTimer = setInterval(() => {
      i++;
      setTypedTop(LINE_1.slice(0, i));
      if (i >= LINE_1.length) {
        clearInterval(topTimer);
        setPhase('sub');
      }
    }, 130);
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
        setPhase('hold');
      }
    }, 32);
    return () => clearInterval(subTimer);
  }, [phase]);

  useEffect(() => {
    if (phase !== 'hold') return;
    const holdTimer = setTimeout(() => setLeaving(true), 650);
    const doneTimer = setTimeout(() => onDone && onDone(), 1250);
    return () => {
      clearTimeout(holdTimer);
      clearTimeout(doneTimer);
    };
  }, [phase, onDone]);

  return (
    <div className={`intro-splash ${leaving ? 'intro-leaving' : ''}`}>
      <div className="intro-scene">
        <div className="intro-orb-3d">
          <div className="intro-ring r1" />
          <div className="intro-ring r2" />
          <div className="intro-ring r3" />
          <div className="intro-core">AI</div>
        </div>

        <h1 className="intro-title">
          {typedTop}
          {phase === 'top' && <span className="intro-cursor" />}
        </h1>
        <p className="intro-subtitle">
          {typedSub}
          {phase === 'sub' && <span className="intro-cursor" />}
        </p>
      </div>
    </div>
  );
}
