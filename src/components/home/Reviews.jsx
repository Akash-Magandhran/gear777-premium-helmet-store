import React from 'react';
import reviews from '../../data/reviews.json';
import { FiStar } from 'react-icons/fi';

export default function Reviews() {
  return (
    <section className="section bg-surface">
      <div className="container">
        <div className="text-center mb-5">
          <span className="eyebrow">Riders Say</span>
          <h2 className="title-lg">Trusted by thousands</h2>
        </div>
        <div className="row g-4">
          {reviews.map((r) => (
            <div key={r.id} className="col-md-6 col-lg-3">
              <div className="review-card">
                <div className="stars d-flex gap-1">
                  {Array.from({ length: r.rating }).map((_, i) => <FiStar key={i} fill="currentColor" />)}
                </div>
                <p className="quote">"{r.text}"</p>
                <div className="author">— {r.name}, <em>{r.role}</em></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
