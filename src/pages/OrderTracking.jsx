import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { FiCheck, FiPackage, FiTruck, FiHome } from 'react-icons/fi';

const STEPS = [
  { icon: FiCheck, label: 'Order Placed', date: 'Jun 02' },
  { icon: FiPackage, label: 'Packed', date: 'Jun 03' },
  { icon: FiTruck, label: 'Shipped', date: 'Jun 04' },
  { icon: FiHome, label: 'Delivered', date: 'Jun 07 (est.)' },
];

export default function OrderTracking() {
  const [params] = useSearchParams();
  const [id, setId] = useState(params.get('id') || '');
  const [stage] = useState(2);

  return (
    <section className="section-tight">
      <div className="container">
        <span className="eyebrow">Tracking</span>
        <h1 className="title-lg mb-4">Track your order</h1>
        <form onSubmit={(e) => e.preventDefault()} className="d-flex gap-2 mb-5" style={{ maxWidth: 500 }}>
          <input className="form-control" placeholder="Enter order ID (e.g. AVB-ABC123)" value={id} onChange={(e) => setId(e.target.value)} />
          <button className="btn btn-accent">Track</button>
        </form>
        {id && (
          <div className="glass-card p-4 p-md-5">
            <div className="d-flex justify-content-between mb-4 flex-wrap gap-2">
              <div><small className="text-muted-soft d-block">Order</small><strong>{id}</strong></div>
              <div><small className="text-muted-soft d-block">Status</small><strong className="text-accent">In Transit</strong></div>
              <div><small className="text-muted-soft d-block">Courier</small><strong>AVBAR Express</strong></div>
            </div>
            <div className="row g-3">
              {STEPS.map((s, i) => {
                const Icon = s.icon;
                const done = i <= stage;
                return (
                  <div key={s.label} className="col-6 col-md-3">
                    <div className="text-center p-3 rounded" style={{ background: done ? 'rgba(255,59,48,.08)' : 'var(--surface-2)', border: `1px solid ${done ? 'var(--accent)' : 'var(--border)'}` }}>
                      <div style={{ fontSize: '1.8rem', color: done ? 'var(--accent)' : 'var(--muted)' }}><Icon /></div>
                      <strong className="d-block mt-2">{s.label}</strong>
                      <small className="text-muted-soft">{s.date}</small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
