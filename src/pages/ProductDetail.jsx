import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FiHeart, FiShoppingBag, FiStar, FiCheck, FiTruck, FiShield } from 'react-icons/fi';
import products from '../data/products.json';
import { useCart } from '../context/CartContext.jsx';
import { useWishlist } from '../context/WishlistContext.jsx';
import { formatPrice } from '../utils/format.js';
import { img } from '../utils/img.js';

export default function ProductDetail() {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);
  const { add } = useCart();
  const { has, toggle } = useWishlist();
  const navigate = useNavigate();
  const [size, setSize] = useState(product?.sizes?.[1] || 'M');
  const [color, setColor] = useState(product?.colors?.[0] || '');
  const [qty, setQty] = useState(1);
  const [active, setActive] = useState(0);

  if (!product) return <div className="container py-5"><h2>Helmet not found</h2><Link to="/shop">Back to shop</Link></div>;

  const handleAdd = () => add(product, { size, color, qty });
  const buyNow = () => { handleAdd(); navigate('/checkout'); };

  return (
    <section className="section-tight">
      <div className="container">
        <nav className="text-muted-soft mb-4" style={{ fontSize: '.85rem' }}>
          <Link to="/">Home</Link> / <Link to="/shop">Shop</Link> / <span>{product.name}</span>
        </nav>
        <div className="row g-5">
          <div className="col-lg-6">
            <div className="pd-gallery">
              <div className="main">
                <img src={img(product.image)} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }} />
              </div>
              <div className="thumbs">
                {['helmet-1.jpg','helmet-2.jpg','helmet-3.jpg','helmet-4.jpg'].map((n, i) => (
                  <div key={i} className={`t ${active === i ? 'active' : ''}`} onClick={() => setActive(i)}>
                    <img src={img(n)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 8 }} />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <span className="eyebrow">{product.category}</span>
            <h1 className="title-lg">{product.name}</h1>
            <div className="d-flex align-items-center gap-2 mb-3 text-muted-soft">
              <span className="text-accent d-inline-flex gap-1">
                {Array.from({ length: Math.round(product.rating) }).map((_, i) => <FiStar key={i} fill="currentColor" />)}
              </span>
              <small>{product.rating} • {product.reviews} reviews</small>
            </div>
            <div className="d-flex align-items-baseline gap-2 mb-4">
              <h2 className="text-accent mb-0">{formatPrice(product.price)}</h2>
              {product.oldPrice && <span className="text-muted-soft text-decoration-line-through">{formatPrice(product.oldPrice)}</span>}
            </div>
            <p className="text-muted-soft" style={{ fontSize: '1.05rem' }}>{product.description}</p>

            <div className="mt-4">
              <small className="text-muted-soft d-block mb-2">COLOR — <span className="text-accent">{color}</span></small>
              <div className="d-flex gap-2 flex-wrap">
                {product.colors.map((c) => (
                  <button key={c} className={`color-pill ${color === c ? 'active' : ''}`} onClick={() => setColor(c)} title={c}>{c[0]}</button>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <small className="text-muted-soft d-block mb-2">SIZE</small>
              <div className="d-flex gap-2">
                {product.sizes.map((s) => (
                  <button key={s} className={`size-pill ${size === s ? 'active' : ''}`} onClick={() => setSize(s)}>{s}</button>
                ))}
              </div>
            </div>
            <div className="mt-4 d-flex align-items-center gap-3">
              <div className="qty-ctl">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
                <span style={{ minWidth: 24, textAlign: 'center' }}>{qty}</span>
                <button onClick={() => setQty((q) => q + 1)}>+</button>
              </div>
              <small className="text-muted-soft"><FiCheck className="text-accent" /> {product.stock} in stock</small>
            </div>

            <div className="d-flex gap-2 mt-4 flex-wrap">
              <button className="btn btn-accent" onClick={handleAdd}><FiShoppingBag className="me-2" />Add to Cart</button>
              <button className="btn btn-outline-light-soft" onClick={buyNow}>Buy Now</button>
              <button className={`icon-btn ${has(product.id) ? 'active' : ''}`} onClick={() => toggle(product.id)} style={{ width: 50, height: 50 }}>
                <FiHeart fill={has(product.id) ? 'currentColor' : 'none'} />
              </button>
            </div>

            <div className="d-flex gap-4 mt-4 text-muted-soft" style={{ fontSize: '.9rem' }}>
              <span><FiTruck className="text-accent me-1" /> Free shipping over $250</span>
              <span><FiShield className="text-accent me-1" /> 5-year warranty</span>
            </div>




            

            <div className="glass-card p-4 mt-4">
              <h6 className="mb-3" style={{ letterSpacing: '.1em', textTransform: 'uppercase', fontSize: '.8rem' }}>Specifications</h6>
              <ul className="list-unstyled mb-0">
                {Object.entries(product.specs).map(([k, v]) => (
                  <li key={k} className="d-flex justify-content-between py-2 border-bottom" style={{ borderColor: 'var(--border)' }}>
                    <span className="text-muted-soft">{k}</span>
                    <span>{v}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
