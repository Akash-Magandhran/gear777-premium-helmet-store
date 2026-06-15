import React from 'react';
import { Link } from 'react-router-dom';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import { useWishlist } from '../../context/WishlistContext.jsx';
import { useCart } from '../../context/CartContext.jsx';
import { formatPrice } from '../../utils/format.js';
import { img } from '../../utils/img.js';

export default function ProductCard({ p }) {
  const { has, toggle } = useWishlist();
  const { add } = useCart();
  const active = has(p.id);

  return (
    <div className="product-card">
      <div className="img-wrap">
        {p.tag && <span className="badge-tag">{p.tag}</span>}
        <button className={`wish-btn ${active ? 'active' : ''}`} onClick={() => toggle(p.id)} aria-label="Wishlist">
          <FiHeart fill={active ? 'currentColor' : 'none'} />
        </button>
        <Link to={`/shop/${p.slug}`} aria-label={p.name} style={{ position: 'absolute', inset: 0, zIndex: 2 }} />
        <img src={img(p.image)} alt={p.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      <div className="body">
        <span className="cat">{p.category}</span>
        <Link to={`/shop/${p.slug}`} className="name">{p.name}</Link>
        <div className="d-flex align-items-center justify-content-between mt-2">
          <span className="price">
            {formatPrice(p.price)}
            {p.oldPrice && <span className="old-price">{formatPrice(p.oldPrice)}</span>}
          </span>
          <button className="icon-btn" onClick={() => add(p)} aria-label="Add to cart" style={{ width: 36, height: 36, background: 'transparent', border: '1px solid var(--border)', borderRadius: '50%', color: 'var(--text)' }}>
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
}
