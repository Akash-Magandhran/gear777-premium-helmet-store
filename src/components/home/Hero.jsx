import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import heroHelmet from "../../assets/hero-helmet.jpg";

export default function Hero() {
  return (
    <section className="hero">

      <img
        src={heroHelmet}
        alt="Helmet"
        className="hero-bg"
      />

      <div className="hero-overlay"></div>

      <div className="hero-red-glow"></div>

      <div className="container">
        <div className="hero-content">

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="hero-tag"
          >
            NEW • CARBON COLLECTION 2026
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            Engineered
            <br />
            for the <span>apex.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="hero-description"
          >
            Hand-laid carbon. Wind-tunnel sculpted.
            ECE 22.06 certified. A helmet for riders
            who measure life one corner at a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="hero-buttons"
          >
            <Link
              to="/shop"
              className="hero-btn-primary"
            >
              Explore Collection
              <FiArrowRight />
            </Link>

            <Link
              to="/about"
              className="hero-btn-secondary"
            >
              Meet The R1
            </Link>
          </motion.div>

          <div className="hero-stats">

            <div className="hero-stat">
              <h3>1280g</h3>
              <p>Carbon Shell</p>
            </div>

            <div className="hero-stat">
              <h3>ECE 22.06</h3>
              <p>Certified</p>
            </div>

            <div className="hero-stat">
              <h3>180°</h3>
              <p>Field Of View</p>
            </div>

          </div>

        </div>
      </div>

    </section>
  );
}