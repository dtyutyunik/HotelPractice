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
    const {featuredRooms: rooms, loading}=this.context;
    console.log(rooms)
    return(
    <div>
    hello featured room
    <Loading/>
    <Room/>
    </div>
  )
  }
}
