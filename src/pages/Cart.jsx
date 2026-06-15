import React from 'react';
import { Link } from 'react-router-dom';
import { FiTrash2 } from 'react-icons/fi';
import { useCart } from '../context/CartContext.jsx';
import { formatPrice } from '../utils/format.js';
import { img } from '../utils/img.js';

export default function Cart() {
  const { items, remove, updateQty, subtotal, count, clear } = useCart();

  const shipping = subtotal > 250 || subtotal === 0 ? 0 : 19;
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = subtotal + shipping + tax;

  return (
    <section className="section-tight">
      <div className="container">
        <span className="eyebrow">Cart</span>

        <h1 className="title-lg mb-4">
          Your Bag ({count})
        </h1>

        {items.length === 0 ? (
          <div className="glass-card p-5 text-center">
            <p className="text-muted-soft mb-3">
              Your cart is empty.
            </p>

            <Link
              to="/shop"
              className="btn btn-accent"
            >
              Browse Helmets
            </Link>
          </div>
        ) : (
          <div className="row g-5">
            {/* Cart Items */}
            <div className="col-lg-8">
              {items.map((i) => (
                <div
                  key={i.key}
                  className="cart-row"
                >
                  <div className="thumb">
                    <img
                      src={img(i.image)}
                      alt={i.name}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '12px',
                      }}
                    />
                  </div>

                  <div>
                    <Link
                      to={`/shop/${i.slug}`}
                      className="d-block fw-semibold"
                    >
                      {i.name}
                    </Link>

                    <small className="text-muted-soft">
                      {i.color} • Size {i.size}
                    </small>

                    <div className="qty-ctl mt-2">
                      <button
                        onClick={() =>
                          updateQty(i.key, i.qty - 1)
                        }
                      >
                        −
                      </button>

                      <span
                        style={{
                          minWidth: 20,
                          textAlign: 'center',
                        }}
                      >
                        {i.qty}
                      </span>

                      <button
                        onClick={() =>
                          updateQty(i.key, i.qty + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div className="text-end">
                    <div className="text-accent fw-bold">
                      {formatPrice(
                        i.price * i.qty
                      )}
                    </div>

                    <button
                      onClick={() =>
                        remove(i.key)
                      }
                      className="btn btn-link text-muted-soft p-0 mt-2"
                    >
                      <FiTrash2 />
                    </button>
                  </div>
                </div>
              ))}

              <button
                onClick={clear}
                className="btn btn-outline-light-soft mt-3"
              >
                Clear Cart
              </button>
            </div>

            {/* Order Summary */}
            <div className="col-lg-4">
              <div className="glass-card p-4">
                <h5 className="mb-3">
                  Order Summary
                </h5>

                <Row
                  label="Subtotal"
                  value={formatPrice(
                    subtotal
                  )}
                />

                <Row
                  label="Shipping"
                  value={
                    shipping
                      ? formatPrice(
                          shipping
                        )
                      : 'Free'
                  }
                />

                <Row
                  label="Estimated tax"
                  value={formatPrice(
                    tax
                  )}
                />

                <hr
                  style={{
                    borderColor:
                      'var(--border)',
                  }}
                />

                <Row
                  label="Total"
                  value={formatPrice(
                    total
                  )}
                  bold
                />

                <Link
                  to="/checkout"
                  className="btn btn-accent w-100 mt-3"
                >
                  Checkout
                </Link>

                <Link
                  to="/track-order"
                  className="btn btn-outline-light-soft w-100 mt-2"
                >
                  Track Order
                </Link>

                <Link
                  to="/shop"
                  className="btn btn-outline-light-soft w-100 mt-2"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

const Row = ({
  label,
  value,
  bold,
}) => (
  <div
    className="d-flex justify-content-between py-1"
    style={{
      fontWeight: bold ? 700 : 400,
      fontSize: bold
        ? '1.1rem'
        : '1rem',
    }}
  >
    <span
      className={
        bold ? '' : 'text-muted-soft'
      }
    >
      {label}
    </span>

    <span
      className={
        bold ? 'text-accent' : ''
      }
    >
      {value}
    </span>
  </div>
);