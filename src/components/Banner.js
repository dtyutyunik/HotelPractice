import React from 'react';
//children means what is rendered in the component that is passed down, will be shown

export default function Banner({children, title, subtitle}){
  return(
    <div className='banner'>
      <h1>{title}</h1>
        <p>{subtitle}</p>
          {children}

    </div>
  )
}
