import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../Context';
import Title from './Title';

const getUniqueValue=(items,value)=>{
  // has to be item[value] because it is string parameters
  return Array.from(new Set(items.map(item=> item[value])))
  // or
  // let r=[...new Set(rooms.map(item=>{
  //   return item.type
  // }))];
}

export default function RoomsFilter({rooms}){
  const context=useContext(RoomContext);
     const {handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast}=context;



//get unique types
let types=getUniqueValue(rooms,'type');
//add all
types=['all', ...types];
//map to jsx
types=types.map((item,index)=>{
  return <option value={item} key={index}>{item}</option>
});

     // console.log(types)
  return(
    <section className='filter-container'>
      <Title title='search rooms'/>
        <form className='filter-form'>
        {/*select type*/}
          <div className='form-group'>
            <label htmlFor='type'></label>
            <select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
            {types}

            </select>
          </div>
        {/*end select type*/}
        </form>
    </section>
  )
}
