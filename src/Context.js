import React, {Component} from 'react';
import items from './data';
const RoomContext=React.createContext();

class RoomProvider extends Component{
  state={
    rooms: [],
    sortedRooms: [],
    FeaturedRoom: [],
    loading: true,
    type: 'all',
    capiacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
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

  getRoom=(slug)=>{
    let tempRooms=[...this.state.rooms];
    const room= tempRooms.find(room=>room.slug===slug);
    console.log(room);
    return room;
  }

  handleChange=(event)=>{

    const target=event.target;
    const value=event.type==='checkbox'?target.checked:target.value;
    const name= event.target.name;

    this.setState({
      [name]: value
    }, this.filterRooms)
    // this.setState({
    //   [name]: value,
    //   type: value
    // })
  }

  filterRooms=()=>{
    console.log('hello')
  }

  componentDidMount(){
    let rooms=this.formatData(items);


    let featuredRooms=rooms.filter(room=>room.featured);
    let maxPrice=Math.max(...rooms.map(item=>{
      return item.price
    }));

    let maxSize=Math.max(...rooms.map(item=>{
      return item.size
    }));
    console.log(maxSize);
    this.setState({
      rooms: rooms,
      featuredRooms: featuredRooms,
      sortedRooms: rooms,
      loading: false,
      maxSize: maxSize,
      maxPrice: maxPrice
    })

  }

  render(){
    return(
      //{{...this.state}} lets me pass the whole object
    <RoomContext.Provider value={{...this.state, getRoom:this.getRoom, handleChange:this.handleChange}}>
      {this.props.children}
    </RoomContext.Provider>
  )
  }
}

const RoomConsumer=RoomContext.Consumer;

///this is optional, this will create a higher order component
export function withRoomConsumer(Component){
  return function ConsumerWrapper(props){
    return <RoomConsumer>
        {value=><Component {...props} context={value}/>}
      </RoomConsumer>
  }
}



//////

export {RoomProvider,RoomConsumer, RoomContext};
