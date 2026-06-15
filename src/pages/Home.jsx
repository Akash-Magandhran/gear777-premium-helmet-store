import React from 'react';
import Hero from '../components/home/Hero.jsx';
import Marquee from '../components/home/Marquee.jsx';
import Categories from '../components/home/Categories.jsx';
import Featured from '../components/home/Featured.jsx';
import WhyUs from '../components/home/WhyUs.jsx';
import Reviews from '../components/home/Reviews.jsx';
import VideoHero from '../components/home/VideoHero.jsx';
import Videos from '../components/home/Videos.jsx';



export default function Home() {
  return (
    <>
      
      <Hero />
<Marquee />

<VideoHero />
<Featured />
<Categories />
<Videos />
<WhyUs />
<Reviews />
    </>
  );
}
