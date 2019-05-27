import React from 'react';
import Hero from './Hero';
import Banner from './Banner';
import {Link} from 'react-router-dom';

export default function Home(){
  return(
    <Hero>
        {/* Because Banner is inside the Hero, it is considered children in Hero component */}
      <Banner title='luxiouros rooms' subtitle='Deluxe rooms starting from $299'>
        {/* Because Link is inside the Banner, it is considered children in Banner component */}
        <Link to="/Rooms" className="btn-primary">Our Rooms</Link>
      </Banner>
    </Hero>
  )
}
