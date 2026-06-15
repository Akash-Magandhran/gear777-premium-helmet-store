import React from 'react';
import { Link } from 'react-router-dom';
import categories from '../../data/categories.json';

export default function Categories() {
  return (
    <section className="section-tight">
      <div className="container">
        <div className="text-center mb-5">
          <span className="eyebrow">Categories</span>
          <h2 className="title-lg">Find your ride</h2>
        </div>
        <div className="row g-3">
          {categories.map((c) => (
            <div className="col-6 col-md-4 col-lg" key={c.id}>
              <Link to={`/shop?cat=${encodeURIComponent(c.name)}`} className="glass-card d-block p-4 text-center h-100" style={{ transition: 'all .3s' }}>
                <div style={{ fontSize: '2.5rem', color: 'var(--accent)', marginBottom: '.5rem' }}>◉</div>
                <h5 className="mb-1">{c.name}</h5>
                <small className="text-muted-soft">{c.count} models</small>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
