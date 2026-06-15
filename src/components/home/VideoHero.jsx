import React from "react";
import heroVideo from "../../assets/hero.mp4";


export default function VideoHero() {
  return (
    <section className="video-showcase">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="video-bg"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      <div className="video-overlay"></div>

      <div className="video-content">
        

        
      </div>
    </section>
  );
}