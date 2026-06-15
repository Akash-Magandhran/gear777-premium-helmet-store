import React, { useState } from 'react';
import products from '../data/products.json';
import { formatPrice } from '../utils/format.js';
import { FiX } from 'react-icons/fi';

export default function Compare() {
  const [selected, setSelected] = useState([products[0].id, products[3].id]);
  const items = products.filter((p) => selected.includes(p.id));
  const available = products.filter((p) => !selected.includes(p.id));

  const allSpecs = Array.from(new Set(items.flatMap((p) => Object.keys(p.specs))));

  return (
    <section className="section-tight">
      <div className="container">
        <span className="eyebrow">Compare</span>
        <h1 className="title-lg mb-4">Compare helmets</h1>

        <div className="mb-3 d-flex flex-wrap gap-2">
          <span className="text-muted-soft me-2">Add helmet:</span>
          {available.slice(0, 6).map((p) => (
            <button key={p.id} className="filter-chip" onClick={() => setSelected([...selected, p.id])} disabled={selected.length >= 3}>+ {p.name}</button>
          ))}
        </div>

        <div className="table-responsive glass-card p-3">
          <table className="table table-borderless align-middle" style={{ color: 'var(--text)' }}>
            <thead>
              <tr>
                <th></th>
                {items.map((p) => (
                  <th key={p.id} style={{ minWidth: 220 }}>
                    <div className="d-flex justify-content-between align-items-start">
                      <div>
                        <small className="text-muted-soft d-block">{p.category}</small>
                        <strong>{p.name}</strong>
                        <div className="text-accent">{formatPrice(p.price)}</div>
                      </div>
                      <button className="btn btn-link p-0 text-muted-soft" onClick={() => setSelected(selected.filter((id) => id !== p.id))}><FiX /></button>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr><td className="text-muted-soft">Rating</td>{items.map((p) => <td key={p.id}>{p.rating} ★ ({p.reviews})</td>)}</tr>
              <tr><td className="text-muted-soft">Sizes</td>{items.map((p) => <td key={p.id}>{p.sizes.join(', ')}</td>)}</tr>
              <tr><td className="text-muted-soft">Colors</td>{items.map((p) => <td key={p.id}>{p.colors.length}</td>)}</tr>
              {allSpecs.map((s) => (
                <tr key={s}><td className="text-muted-soft">{s}</td>{items.map((p) => <td key={p.id}>{p.specs[s] || '—'}</td>)}</tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
