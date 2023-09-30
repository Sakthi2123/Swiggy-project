import React from 'react'
import { RESTAURANT_URL } from '../config/utils';
import { useEffect,useState } from 'react';

import Restaurants from '../Restaurants/rest';
const Body = () => {
    const [restaurantInfo,setRestaurantInfo]= useState([]);
    useEffect(()=>{
        getRestaurantInfo()
    },[]);

    const getRestaurantInfo = async()=>{
        const fetchData = await fetch(RESTAURANT_URL);
        const restaurants = await fetchData.json();
        setRestaurantInfo(restaurants?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    if(restaurantInfo.length===0)
    return "Restaurnats loading";
  return (
        <>
        <div className='flex text-xl py-3 pl-5 font-bold'>Restaurants with online food delivery in Chennai</div>
    <div className='flex flex-wrap justify-between mx-32 pt-10'>
      
      {restaurantInfo.map((elem)=>{
        return(
            <Restaurants data={elem}/>
        )
      })}
    </div>
    </>
  )
}

export default Body;