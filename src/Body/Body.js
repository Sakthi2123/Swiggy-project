import React from 'react'
import Best from './Bestoffers/Best';
import Mymind from './Mymind/mymind';
import Restaurants from './Restaurants/Restaurants';

const Body = () => {
  return (
    <>
    <div>
      <Best/>
      <Mymind/>
      <Restaurants/>
    </div>
    </>
  )
}

export default Body;