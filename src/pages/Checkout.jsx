import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { formatPrice } from '../utils/format.js';

const STEPS = ['Shipping', 'Payment', 'Review'];

export default function Checkout() {
  const { items, subtotal, clear } = useCart();
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ name: '', email: '', address: '', city: '', zip: '', country: 'USA', card: '', exp: '', cvv: '' });
  const navigate = useNavigate();
  const set = (k) => (e) => setData((d) => ({ ...d, [k]: e.target.value }));
  const shipping = subtotal > 250 ? 0 : 19;
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = subtotal + shipping + tax;

  const next = (e) => { e.preventDefault(); if (step < 2) setStep(step + 1); else { const id = 'AVB-' + Math.random().toString(36).slice(2, 8).toUpperCase(); clear(); navigate(`/order-success?id=${id}`); } };

  if (items.length === 0) return (
    <section className="section-tight"><div className="container"><h2>Your cart is empty</h2><Link to="/shop" className="btn btn-accent mt-3">Shop now</Link></div></section>
  );

  return (
    <section className="section-tight">
      <div className="container">
        <span className="eyebrow">Checkout</span>
        <h1 className="title-lg mb-4">Complete your order</h1>
        <div className="step-bar">
          {STEPS.map((s, i) => <div key={s} className={`step ${i === step ? 'active' : ''}`}><strong>0{i+1}</strong> · {s}</div>)}
        </div>
        <div className="row g-5">
          <div className="col-lg-8">
            <form onSubmit={next} className="glass-card p-4">
              {step === 0 && (
                <div className="row g-3">
                  <div className="col-md-6"><label className="form-label text-muted-soft">Full name</label><input className="form-control" required value={data.name} onChange={set('name')} /></div>
                  <div className="col-md-6"><label className="form-label text-muted-soft">Email</label><input type="email" className="form-control" required value={data.email} onChange={set('email')} /></div>
                  <div className="col-12"><label className="form-label text-muted-soft">Address</label><input className="form-control" required value={data.address} onChange={set('address')} /></div>
                  <div className="col-md-5"><label className="form-label text-muted-soft">City</label><input className="form-control" required value={data.city} onChange={set('city')} /></div>
                  <div className="col-md-3"><label className="form-label text-muted-soft">ZIP</label><input className="form-control" required value={data.zip} onChange={set('zip')} /></div>
                  <div className="col-md-4"><label className="form-label text-muted-soft">Country</label><select className="form-select" value={data.country} onChange={set('country')}><option>USA</option><option>UK</option><option>Germany</option><option>Japan</option><option>Australia</option></select></div>
                </div>
              )}
              {step === 1 && (
                <div className="row g-3">
                  <div className="col-12"><label className="form-label text-muted-soft">Card number</label><input className="form-control" placeholder="1234 5678 9012 3456" required value={data.card} onChange={set('card')} /></div>
                  <div className="col-md-6"><label className="form-label text-muted-soft">Expiry</label><input className="form-control" placeholder="MM/YY" required value={data.exp} onChange={set('exp')} /></div>
                  <div className="col-md-6"><label className="form-label text-muted-soft">CVV</label><input className="form-control" placeholder="123" required value={data.cvv} onChange={set('cvv')} /></div>
                </div>
              )}
              {step === 2 && (
                <div>
                  <h5 className="mb-3">Shipping to</h5>
                  <p className="text-muted-soft">{data.name}, {data.address}, {data.city}, {data.zip}, {data.country}</p>
                  <h5 className="mb-3 mt-4">Items</h5>
                  {items.map((i) => (
                    <div key={i.key} className="d-flex justify-content-between py-2 border-bottom" style={{ borderColor: 'var(--border)' }}>
                      <span>{i.name} × {i.qty}</span>
                      <span>{formatPrice(i.price * i.qty)}</span>
                    </div>
                  ))}
                </div>
              )}
              <div className="d-flex justify-content-between mt-4">
                {step > 0 ? <button type="button" className="btn btn-outline-light-soft" onClick={() => setStep(step - 1)}>Back</button> : <span />}
                <button type="submit" className="btn btn-accent">{step === 2 ? 'Place Order' : 'Continue'}</button>
              </div>
            </form>
          </div>
          <div className="col-lg-4">
            <div className="glass-card p-4">
              <h5 className="mb-3">Summary</h5>
              {items.map((i) => (
                <div key={i.key} className="d-flex justify-content-between py-1 text-muted-soft" style={{ fontSize: '.9rem' }}>
                  <span>{i.name} × {i.qty}</span><span>{formatPrice(i.price * i.qty)}</span>
                </div>
              ))}
              <hr style={{ borderColor: 'var(--border)' }} />
              <div className="d-flex justify-content-between"><span className="text-muted-soft">Shipping</span><span>{shipping ? formatPrice(shipping) : 'Free'}</span></div>
              <div className="d-flex justify-content-between"><span className="text-muted-soft">Tax</span><span>{formatPrice(tax)}</span></div>
              <div className="d-flex justify-content-between mt-2" style={{ fontWeight: 700, fontSize: '1.1rem' }}><span>Total</span><span className="text-accent">{formatPrice(total)}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
