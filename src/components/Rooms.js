import React from 'react';
import Hero from './Hero';
import Banner from './Banner';
import {Link} from 'react-router-dom';
import RoomContainer from './RoomContainer';


export default function Rooms(props){
  return(
    <>
    <Hero hero='roomsHero'>
      <Banner title='Our Rooms'>
        <Link to ='./Home' className='btn-primary'> Return Home </Link>
      </Banner>
    </Hero>
    <RoomContainer/>
    </>

  )
}
