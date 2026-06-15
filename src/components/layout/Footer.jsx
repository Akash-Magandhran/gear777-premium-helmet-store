import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiTwitter, FiYoutube, FiFacebook } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="av-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <div className="brand mb-3" style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', letterSpacing: '.15em', fontWeight: 700 }}>
              GEAR<span style={{ color: 'var(--accent)' }}>777</span>
            </div>
            <p className="text-muted-soft" style={{ maxWidth: 340 }}>
              Premium motorcycle helmets engineered for riders who demand performance, safety, and timeless design.
            </p>
            <div className="d-flex gap-2 mt-3">
              {[FiInstagram, FiTwitter, FiYoutube, FiFacebook].map((Icon, i) => (
                <a key={i} href="#" className="icon-btn" aria-label="Social"><Icon /></a>
              ))}
            </div>
          </div>
          <div className="col-6 col-md-2">
            <h6>Shop</h6>
            <Link to="/shop">All Helmets</Link>
            <Link to="/shop?cat=Full Face">Full Face</Link>
            <Link to="/shop?cat=Modular">Modular</Link>
            <Link to="/shop?cat=Adventure">Adventure</Link>
            <Link to="/shop?cat=Open Face">Open Face</Link>
          </div>
          <div className="col-6 col-md-2">
            <h6>Support</h6>
            <Link to="/track">Order Tracking</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/about">About AVBAR</Link>
            <a href="#">Size Guide</a>
            <a href="#">Warranty</a>
          </div>
          <div className="col-md-4">
            <h6>Newsletter</h6>
            <p className="text-muted-soft">Subscribe for new drops, race-day insights, and exclusive offers.</p>
            <form onSubmit={(e) => e.preventDefault()} className="d-flex gap-2">
              <input className="form-control" type="email" placeholder="Your email" required />
              <button className="btn btn-accent" type="submit">Join</button>
            </form>
          </div>
        </div>
        <div className="copy d-flex flex-column flex-md-row justify-content-between gap-2">
          <span>© {new Date().getFullYear()} AVBAR Helmets. All rights reserved.</span>
          <span>Crafted for riders, by riders.</span>
        </div>
      </div>
    </footer>
  );
}
