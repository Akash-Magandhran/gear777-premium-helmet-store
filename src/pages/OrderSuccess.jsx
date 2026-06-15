import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { FiCheckCircle } from 'react-icons/fi';

export default function OrderSuccess() {
  const [params] = useSearchParams();
  const id = params.get('id') || 'AVB-XXXX';
  return (
    <section className="section">
      <div className="container text-center" style={{ maxWidth: 580 }}>
        <div style={{ fontSize: '5rem', color: 'var(--accent)' }}><FiCheckCircle /></div>
        <h1 className="title-lg mt-3">Order Confirmed</h1>
        <p className="text-muted-soft">Thanks for riding with AVBAR. Your order <strong className="text-accent">{id}</strong> has been received and is being prepared for shipment.</p>
        <div className="d-flex gap-2 justify-content-center mt-4">
          <Link to={`/track?id=${id}`} className="btn btn-accent">Track Order</Link>
          <Link to="/shop" className="btn btn-outline-light-soft">Continue Shopping</Link>
        </div>
      </div>
    </section>
  );
}
