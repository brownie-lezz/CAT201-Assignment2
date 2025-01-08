import React from 'react';
import '../App.css';
import './MainSection.css';

function MainSection() {
  return (
    <div className='main-container'>
  <video className='background-video' src='/videos/video-1.mp4' autoPlay loop muted />
  <h1>Welcome to Penang</h1>
  <p>Discover the charm of Penang, Malaysia - whether you're a foodie, history buff, or nature lover, Penang promises unforgettable memories at every turn.</p>
</div>

  );
}

export default MainSection;