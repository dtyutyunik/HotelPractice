import React from 'react';

export default function Hero({children,hero}){
  return (<header className={hero}>
      {children}
    </header>
  )
}

//default props is setup in case nothing is passed then this will be the case
Hero.defaultProps={
  hero: 'defaultHero'
}
