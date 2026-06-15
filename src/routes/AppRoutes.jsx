import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import Shop from '../pages/Shop.jsx';
import ProductDetail from '../pages/ProductDetail.jsx';
import Cart from '../pages/Cart.jsx';
import Checkout from '../pages/Checkout.jsx';
import OrderSuccess from '../pages/OrderSuccess.jsx';
import OrderTracking from '../pages/OrderTracking.jsx';
import Wishlist from '../pages/Wishlist.jsx';
import Compare from '../pages/Compare.jsx';
import Login from '../pages/Login.jsx';
import Register from '../pages/Register.jsx';
import About from '../pages/About.jsx';
import Contact from '../pages/Contact.jsx';
import NotFound from '../pages/NotFound.jsx';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/shop/:slug" element={<ProductDetail />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/order-success" element={<OrderSuccess />} />
      <Route path="/track" element={<OrderTracking />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
