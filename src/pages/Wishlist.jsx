import React from 'react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext.jsx';
import products from '../data/products.json';
import ProductCard from '../components/shop/ProductCard.jsx';

export default function Wishlist() {
  const { ids, clear } = useWishlist();
  const items = products.filter((p) => ids.includes(p.id));
  return (
    <section className="section-tight">
      <div className="container">
        <span className="eyebrow">Wishlist</span>
        <h1 className="title-lg mb-4">Your favourites ({items.length})</h1>
        {items.length === 0 ? (
          <div className="glass-card p-5 text-center">
            <p className="text-muted-soft">Nothing saved yet.</p>
            <Link to="/shop" className="btn btn-accent">Discover Helmets</Link>
          </div>
        ) : (
          <>
            <div className="row g-4">
              {items.map((p) => <div key={p.id} className="col-6 col-md-4 col-lg-3"><ProductCard p={p} /></div>)}
            </div>
            <button className="btn btn-outline-light-soft mt-4" onClick={clear}>Clear Wishlist</button>
          </>
        )}
      </div>
    </section>
  );
}
