import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import ProductCard from '../shop/ProductCard.jsx';
import products from '../../data/products.json';

export default function Featured() {
  const featured = products.slice(0, 6);
  return (
    <section className="section">
      <div className="container">
        <div className="d-flex justify-content-between align-items-end mb-5 flex-wrap gap-3">
          <div>
            <span className="eyebrow">Featured</span>
            <h2 className="title-lg mb-0">Bestselling Helmets</h2>
          </div>
          <p className="text-muted-soft mb-0" style={{ maxWidth: 400 }}>
            Hand-picked by our pro-rider council. Track-proven, road-loved.
          </p>
        </div>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1.1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          breakpoints={{ 576: { slidesPerView: 2 }, 992: { slidesPerView: 3 }, 1200: { slidesPerView: 4 } }}
        >
          {featured.map((p) => (
            <SwiperSlide key={p.id} style={{ height: 'auto' }}><ProductCard p={p} /></SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
