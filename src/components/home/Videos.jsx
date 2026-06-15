import React, { useRef } from "react";

import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
import video4 from "../../assets/video4.mp4";
import video5 from "../../assets/video5.mp4";
import video6 from "../../assets/video6.mp4";
import video7 from "../../assets/video7.mp4";
import video8 from "../../assets/video8.mp4";
import video9 from "../../assets/video9.mp4";
import video10 from "../../assets/video10.mp4";

export default function Videos() {
const videoRef = useRef(null);

const scrollLeft = () => {
if (videoRef.current) {
videoRef.current.scrollLeft -= 500;
}
};

const scrollRight = () => {
if (videoRef.current) {
videoRef.current.scrollLeft += 500;
}
};

const videos = [
{ src: video10, title: "Night Ride", subtitle: "Carbon Series" },
{ src: video2, title: "Urban Racer", subtitle: "Track Edition" },
{ src: video3, title: "Track Beast", subtitle: "Race Inspired" },
{ src: video4, title: "Street King", subtitle: "ECE 22.06 Certified" },
{ src: video5, title: "Ride Beyond", subtitle: "Premium Touring" },
{ src: video1, title: "Apex Rider", subtitle: "Performance Line" },
{ src: video9, title: "Midnight Run", subtitle: "Limited Edition" },
{ src: video8, title: "Velocity", subtitle: "Carbon Shell" },
{ src: video7, title: "Road Warrior", subtitle: "AVBAR Elite" },
{ src: video6, title: "Ultimate Ride", subtitle: "Signature Series" }
];

return ( <section className="videos">

```
  <div className="video-top">
    <h2>
      Ride <span>Cinematics</span>
    </h2>
  </div>

  <div className="video-buttons">
    <button onClick={scrollLeft}>◀</button>
    <button onClick={scrollRight}>▶</button>
  </div>

  <div className="video-container" ref={videoRef}>
    {videos.map((video, index) => (
      <div className="video-card" key={index}>

        <video
          src={video.src}
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="video-overlay">
          <div>
            <h3>{video.title}</h3>
            <p>{video.subtitle}</p>
          </div>
        </div>

      </div>
    ))}
  </div>

</section>


);
}
