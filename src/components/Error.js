import React from 'react';
import Hero from './Hero';
import Banner from './Banner';
import {Link} from 'react-router-dom';

export default function Error(props){
  return(
    <Hero>
      <Banner title='404' subtitle='page not found'>
        <Link to= './Home' className='btn-primary'> Return Home</Link>
      </Banner>
    </Hero>
  )
}
