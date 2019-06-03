import React, {Component} from 'react';
import items from './data';
const RoomContext=React.createContext();




class RoomProvider extends Component{
  state={
    rooms: [],
    sortedRooms: [],
    FeaturedRoom: [],
    loading: true
  }

  getData=()=>{

  }
  //very important function to look at destructoring and mapping
  formatData=(items)=>{

    let tempItems=items.map((item)=>{
      let id=item.sys.id;
      //mapping through it to access the property of the object inside of the array and returns an array with new images
      let images=item.fields.images.map(image=>image.fields.file.url)
      //destructoring it to get the all the parts of the object, images:images overrides images if they were there before or it creates a new one
      let room={...item.fields,images:images,id}
      return room;
    })
    return tempItems;
  }

  componentDidMount(){
    let rooms=this.formatData(items);
    // console.log(rooms)
    
    let featuredRooms=rooms.filter(room=>room.featured);

    this.setState({
      rooms: rooms,
      featuredRooms: featuredRooms,
      sortedRooms: rooms,
      loading: false
    })
    // console.log(featuredRooms)
  }

  render(){
    return(
      //{{...this.state}} lets me pass the whole object
    <RoomContext.Provider value={{...this.state}}>
      {this.props.children}
    </RoomContext.Provider>
  )
  }
}

const RoomConsumer=RoomContext.Consumer;

export {RoomProvider,RoomConsumer, RoomContext};
