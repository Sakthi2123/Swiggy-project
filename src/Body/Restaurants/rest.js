import React from 'react'
import { IMAGE_URL } from '../config/utils'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Restaurants = (props) => {
    const {name,cloudinaryImageId,areaName,avgRating,text,id} = props.data.info
  return (
    <div className=' flex '>
       <Link to={`/restaurantinfo/${id}`}> <div className=' flex flex-col items-start px-10'><img src={`${IMAGE_URL}${cloudinaryImageId
    }` } className='w-52 h-36 rounded-lg'/><p className='font-bold'>{name}</p>
    <div className='flex items-center'>
      <FontAwesomeIcon icon={faStar} className='text-green-500'/>
    <p >{avgRating}</p>
    </div>
   <p>{text}</p>
   <p>{areaName}</p></div></Link>
      
      
    </div>
  )
}

export default Restaurants;