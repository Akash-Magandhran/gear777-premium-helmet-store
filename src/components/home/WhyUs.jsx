import React from 'react';
import { FiShield, FiZap, FiTruck, FiAward } from 'react-icons/fi';

const features = [
  { icon: FiShield, title: 'ECE 22.06 Certified', text: 'Every shell exceeds the latest European safety standard.' },
  { icon: FiZap, title: 'Wind-Tunnel Tuned', text: 'Aerodynamics validated up to 300km/h for whisper-quiet rides.' },
  { icon: FiTruck, title: 'Free Global Shipping', text: 'On orders above $250. Delivered in 3-7 business days worldwide.' },
  { icon: FiAward, title: '5-Year Warranty', text: 'Industry-leading shell warranty. Built to last.' },
];

export default function WhyUs() {
  return (
    <section className="section">
      <div className="container">
        <div className="row g-4">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="col-md-6 col-lg-3">
              <div className="glass-card p-4 h-100">
                <div style={{ fontSize: '2rem', color: 'var(--accent)', marginBottom: '1rem' }}><Icon /></div>
                <h5>{title}</h5>
                <p className="text-muted-soft mb-0">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
