import React, {Component} from 'react';
import defaultImage from '../images/room-1.jpeg';
import Hero from './Hero';
import Banner from './Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from '../Context';
import StyledHero from './StyledHero';


export default class SingleRoom extends Component{

  constructor(props){
    super(props)

    this.state={
      slug: this.props.match.params.slug,
      defaultImage: defaultImage
    }
  }

  static contextType=RoomContext;

  render(){
    // console.log(this.props)
    const {getRoom}=this.context;

    const room=getRoom(this.state.slug)
    if(!room){
      return <div className='error'>
        <h3>no such room could be found</h3>
          <Link to='/rooms' className='btn-primary'>Back to rooms</Link>
        </div>
    }
    const {name,description,capacity,size,price,extras,breakfast,pets,images}=room;
    //this is destrcuring, mainImg gets assigned first index of images, while ...defaultImg gets assigned the rest of the
    //variables of the images array
    const [mainImg,...defaultImg]=images;
    console.log(description)
    // console.log(images[0])
    return(
      <>
      <StyledHero img={mainImg || this.state.defaultImage}>
        <Banner title={`${name} room`}>
          <Link to='/rooms' className='btn-primary'>Back to rooms</Link>
        </Banner>

      </StyledHero>
      <section className='single-room'>
        <div className='single-room-images'>
          {defaultImg.map((item,index)=>{
            return<img key={index} src={item} alt={name}/>
          })}
        </div>
        <div className='single-room-info'>
          <article className='desc'>
            <h3>Details</h3>
            <p>{description}</p>
          </article>
          <article className='info'>
            <h3>Info</h3>
            <h6>price: ${price}</h6>
            <h6>size: {size} SQFT</h6>
            <h6>Max Capacity: {capacity>1 ? `${capacity} people`: `${capacity} person`}</h6>
            <h6>{pets?'Pets are allowed':'No Pets are allowed'}</h6>
            {/*by including the and operator basically says if breakfast is true then it will print free breakfast included*/}
            <h6>{breakfast && 'free breakfast included'}</h6>

          </article>
        </div>
      </section>
      <section className='room-extras'>
        <h6>Extras</h6>
        <ul className='extras'>
          {extras.map((item,index)=>{
          return<li key={index}>{item}</li>})}
        </ul>
      </section>

      </>
    )
  }
}
