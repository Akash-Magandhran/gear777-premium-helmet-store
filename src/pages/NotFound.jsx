import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="section text-center">
      <div className="container">
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(6rem, 20vw, 14rem)', color: 'var(--accent)', lineHeight: 1 }}>404</div>
        <h2>Off the map</h2>
        <p className="text-muted-soft">The page you're looking for took a wrong turn.</p>
        <Link to="/" className="btn btn-accent mt-3">Back to Home</Link>
      </div>
    </section>
  );
}
