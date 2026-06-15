import React, { createContext, useContext, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useLocalStorage('avbar.cart', []);

  const add = (product, opts = {}) => {
    const key = `${product.id}-${opts.size || ''}-${opts.color || ''}`;

    setItems((curr) => {
      const idx = curr.findIndex((i) => i.key === key);

      if (idx >= 0) {
        const next = [...curr];

        next[idx] = {
          ...next[idx],
          qty: next[idx].qty + (opts.qty || 1),
        };

        return next;
      }

      return [
        ...curr,
        {
          key,
          id: product.id,
          slug: product.slug,
          name: product.name,
          price: product.price,
          image: product.image || '',
          size: opts.size || 'M',
          color: opts.color || (product.colors?.[0] || ''),
          qty: opts.qty || 1,
        },
      ];
    });
  };

  const remove = (key) => {
    setItems((curr) => curr.filter((item) => item.key !== key));
  };

  const updateQty = (key, qty) => {
    setItems((curr) =>
      curr.map((item) =>
        item.key === key
          ? { ...item, qty: Math.max(1, qty) }
          : item
      )
    );
  };

  const clear = () => setItems([]);

  const count = useMemo(
    () => items.reduce((sum, item) => sum + item.qty, 0),
    [items]
  );

  const subtotal = useMemo(
    () =>
      items.reduce(
        (sum, item) => sum + item.price * item.qty,
        0
      ),
    [items]
  );

  const value = {
    items,
    add,
    remove,
    updateQty,
    clear,
    count,
    subtotal,
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      'useCart must be used inside CartProvider'
    );
  }

  return context;
};