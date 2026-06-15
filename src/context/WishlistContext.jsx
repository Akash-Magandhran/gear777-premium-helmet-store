import React, { createContext, useContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage.js';

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [ids, setIds] = useLocalStorage('avbar.wishlist', []);
  const toggle = (id) => setIds((c) => c.includes(id) ? c.filter((x) => x !== id) : [...c, id]);
  const has = (id) => ids.includes(id);
  const clear = () => setIds([]);
  return <WishlistContext.Provider value={{ ids, toggle, has, clear }}>{children}</WishlistContext.Provider>;
}
export const useWishlist = () => useContext(WishlistContext);
