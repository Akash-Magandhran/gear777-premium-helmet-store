import React from 'react';
import { motion } from 'framer-motion';

export default function About() {

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="section about">

      <div className="container">

        {/* HERO */}
        <div className="row g-5 align-items-center min-vh-80">

          <motion.div
            className="col-lg-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            variants={fadeUp}
          >
            <span className="eyebrow">ABOUT AVBAR</span>

            <h1 className="title-xl mb-4">
              Built for riders.<br />Engineered for trust.
            </h1>

            <p className="text-muted-soft" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              AVBAR was created in 2018 with one goal — build helmets that feel invisible while riding,
              but protect like armor when it matters.
            </p>

            <p className="text-muted-soft">
              Trusted by 10,000+ riders across 40+ countries.
            </p>
          </motion.div>

          {/* HERO CARD */}
          <motion.div
            className="col-lg-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            variants={fadeUp}
          >
            <div className="hero-card">
              <div className="big-text">EST. 2018</div>
              <div className="sub-text">Safety • Performance • Precision</div>
            </div>
          </motion.div>

        </div>

        {/* STATS */}
        <div className="row text-center g-4 mt-5">

          {[
            ['10K+', 'Riders'],
            ['40+', 'Countries'],
            ['ECE 22.06', 'Certified'],
            ['5★', 'Rating']
          ].map(([k, v], i) => (
            <motion.div
              key={i}
              className="col-6 col-md-3"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              variants={fadeUp}
            >
              <div className="stat-number">{k}</div>
              <div className="stat-label">{v}</div>
            </motion.div>
          ))}

        </div>

      </div>

      {/* CSS */}
      <style>{`
        .about {
          color: white;
        }

        .min-vh-80 {
          min-height: 80vh;
        }

        /* HERO CARD */
        .hero-card {
          height: 420px;
          border-radius: 18px;
          background: linear-gradient(135deg, #0f0f0f, #1c1c1c);
          border: 1px solid rgba(255,255,255,0.08);
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          backdrop-filter: blur(10px);
        }

        .big-text {
          font-size: 3rem;
          font-weight: 700;
          letter-spacing: 0.2em;
        }

        .sub-text {
          margin-top: 10px;
          color: rgba(255,255,255,0.6);
        }

        /* STATS */
        .stat-number {
          font-size: 2.2rem;
          font-weight: 700;
          color: var(--accent);
        }

        .stat-label {
          color: rgba(255,255,255,0.6);
        }
      `}</style>

    </section>
  );
}