import React from 'react';

export default function Marquee() {
  const items = ['CARBON FIBER', '★', 'ECE 22.06', '★', 'WIND-TUNNEL TESTED', '★', 'PRO-RIDER COUNCIL', '★', 'LIFETIME SHELL WARRANTY', '★'];
  const loop = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-track">
        {loop.map((t, i) => <span key={i} className={t === '★' ? 'dot' : ''}>{t}</span>)}
      </div>
    </div>
  );
}
