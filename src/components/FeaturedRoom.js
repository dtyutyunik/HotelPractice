import React, {Component} from 'react';
import {RoomContext} from '../Context';
import Title from './Title';
import Loading from './Loading';
import Room from './Room';

export default class FeaturedRoom extends Component{
  //react context setup in a class
  static contextType = RoomContext;

  render(){
    //featuredRooms: rooms, changes the name of featuredRooms to room
    let {loading,featuredRooms: rooms}=this.context;

    if(rooms!==undefined){
      rooms=rooms.map(room=>{
        return <Room key={room.id} room={room}/>
      })
    }

    return(
    <section className='featured-rooms'>
      <Title title='featured rooms'/>
        <div className='featured-rooms-center'>
          {loading?<Loading/>:rooms}
        </div>


    </section>
  )
  }
}

    // {loading?<Loading/>:rooms}
