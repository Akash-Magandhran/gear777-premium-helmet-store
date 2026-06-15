import React, { useMemo, useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../components/shop/ProductCard.jsx';
import products from '../data/products.json';
import categories from '../data/categories.json';

const SORTS = [
  { id: 'featured', label: 'Featured' },
  { id: 'price-asc', label: 'Price: Low → High' },
  { id: 'price-desc', label: 'Price: High → Low' },
  { id: 'rating', label: 'Top Rated' },
];

export default function Shop() {
  const [params, setParams] = useSearchParams();
  const initialCat = params.get('cat') || 'All';
  const initialQ = params.get('q') || '';
  const [cat, setCat] = useState(initialCat);
  const [q, setQ] = useState(initialQ);
  const [sort, setSort] = useState('featured');
  const [price, setPrice] = useState(800);

  useEffect(() => {
    const next = new URLSearchParams();
    if (cat !== 'All') next.set('cat', cat);
    if (q) next.set('q', q);
    setParams(next, { replace: true });
  }, [cat, q]);

  const filtered = useMemo(() => {
    let list = products.filter((p) => (cat === 'All' || p.category === cat) && p.price <= price);
    if (q.trim()) {
      const t = q.toLowerCase();
      list = list.filter((p) => p.name.toLowerCase().includes(t) || p.category.toLowerCase().includes(t));
    }
    if (sort === 'price-asc') list = [...list].sort((a, b) => a.price - b.price);
    if (sort === 'price-desc') list = [...list].sort((a, b) => b.price - a.price);
    if (sort === 'rating') list = [...list].sort((a, b) => b.rating - a.rating);
    return list;
  }, [cat, q, sort, price]);

  return (
    <section className="section-tight">
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between align-items-end mb-4 gap-3">
          <div>
            <span className="eyebrow">Collection</span>
            <h1 className="title-lg mb-0">All Helmets</h1>
          </div>
          <div className="d-flex gap-2 align-items-center">
            <input className="form-control" placeholder="Search…" value={q} onChange={(e) => setQ(e.target.value)} style={{ maxWidth: 220 }} />
            <select className="form-select" value={sort} onChange={(e) => setSort(e.target.value)} style={{ maxWidth: 200 }}>
              {SORTS.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
            </select>
          </div>
        </div>

        <div className="d-flex flex-wrap gap-2 mb-3">
          {['All', ...categories.map((c) => c.name)].map((c) => (
            <button key={c} className={`filter-chip ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>{c}</button>
          ))}
        </div>

        <div className="d-flex align-items-center gap-3 mb-4">
          <label className="text-muted-soft" style={{ fontSize: '.85rem' }}>Max price: <strong className="text-accent">${price}</strong></label>
          <input type="range" min="100" max="800" step="10" value={price} onChange={(e) => setPrice(+e.target.value)} className="form-range" style={{ maxWidth: 240 }} />
          <span className="text-muted-soft ms-auto">{filtered.length} results</span>
        </div>

        <div className="row g-4">
          {filtered.map((p) => (
            <div key={p.id} className="col-6 col-md-4 col-lg-3"><ProductCard p={p} /></div>
          ))}
          {filtered.length === 0 && <p className="text-muted-soft">No helmets match your filters.</p>}
        </div>
      </div>
    </section>
  );
}
