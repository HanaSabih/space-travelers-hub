import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import StarfieldAnimation from 'react-starfield-animation';

const Home = () => (
  <div className="">
    <StarfieldAnimation
      style={{
        position: 'absolute',
        width: '100%',
        height: '90%',
      }}
      numParticles={800}
      particleSpeed={0}
      dx={0.000000001} // x speed of stars in px/frame, default 0.05
      dy={0.000000001}
    />
    <div className="homeTitle text-warning  fw-bolder bg-dark bg-opacity-75 text-center  border border-secondary border-5 rounded position-absolute top-50 start-50 translate-middle">
      <TypeAnimation
        cursor={false}
        sequence={['WELCOME TO', 2000, 'Space Travelers Hub', 2000]}
        speed={60}
        wrapper="h2"
        repeat={Infinity}
      />
    </div>
  </div>
);

export default Home;
