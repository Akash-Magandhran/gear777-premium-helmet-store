import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiHeart, FiShoppingBag, FiUser, FiMenu, FiX } from 'react-icons/fi';
import { useCart } from '../../context/CartContext.jsx';
import { useWishlist } from '../../context/WishlistContext.jsx';
import { useAuth } from '../../context/AuthContext.jsx';

export default function Navbar() {
  const { count } = useCart();
  const { ids } = useWishlist();
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [q, setQ] = useState('');
  const navigate = useNavigate();

  const submit = (e) => { e.preventDefault(); navigate(`/shop?q=${encodeURIComponent(q)}`); setSearchOpen(false); };

  return (
    <nav className="av-nav">
      <div className="container d-flex align-items-center justify-content-between">
        <Link to="/" className="brand">
  GEAR<span>777</span>
</Link>

        <ul className={`nav d-none d-lg-flex`}>
          {['Home /','/Shop /shop','/About /about','/Contact /contact','/Track /track'].map((s) => {
            const [label, to] = s.includes('/') ? [s.split(' ')[0].replace('/',''), s.split(' ')[1] || '/'] : [s, '/'];
            return null;
          })}
          <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
          <li><NavLink to="/shop" className="nav-link">Shop</NavLink></li>
          <li><NavLink to="/compare" className="nav-link">Compare</NavLink></li>
          <li><NavLink to="/track" className="nav-link">Track</NavLink></li>
          <li><NavLink to="/about" className="nav-link">About</NavLink></li>
          <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
        </ul>

        <div className="d-flex align-items-center gap-2">
          <button className="icon-btn" onClick={() => setSearchOpen((v) => !v)} aria-label="Search"><FiSearch /></button>
          <Link to="/wishlist" className="icon-btn" aria-label="Wishlist">
            <FiHeart />
            {ids.length > 0 && <span className="badge-count">{ids.length}</span>}
          </Link>
          <Link to="/cart" className="icon-btn" aria-label="Cart">
            <FiShoppingBag />
            {count > 0 && <span className="badge-count">{count}</span>}
          </Link>
          <Link to={user ? '/track' : '/login'} className="icon-btn d-none d-sm-inline-flex" aria-label="Account"><FiUser /></Link>
          <button className="icon-btn d-lg-none" onClick={() => setOpen(true)} aria-label="Menu"><FiMenu /></button>
        </div>
      </div>

      {searchOpen && (
        <div className="container mt-3">
          <form onSubmit={submit} className="d-flex gap-2">
            <input value={q} onChange={(e) => setQ(e.target.value)} className="form-control" placeholder="Search helmets…" autoFocus />
            <button className="btn btn-accent" type="submit">Search</button>
          </form>
        </div>
      )}

      {open && (
        <div className="position-fixed top-0 start-0 w-100 h-100" style={{ background: 'rgba(10,10,10,.98)', zIndex: 2000 }}>
          <div className="container py-4 d-flex justify-content-between align-items-center">
            <span className="brand">AV<span>BAR</span></span>
            <button className="icon-btn" onClick={() => setOpen(false)}><FiX /></button>
          </div>
          <div className="container d-flex flex-column gap-3 mt-4">
            {[['Home','/'],['Shop','/shop'],['Compare','/compare'],['Track Order','/track'],['Wishlist','/wishlist'],['About','/about'],['Contact','/contact'],['Login','/login']].map(([l, t]) => (
              <Link key={t} to={t} onClick={() => setOpen(false)} className="nav-link fs-4 py-2">{l}</Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
