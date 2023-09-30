import React from 'react'

const Mymind = () => {
  return (
    <div className='py-5'>
        <div className='flex text-xl py-3 pl-5 font-bold '>What's on your mind?</div>
        <div className='flex justify-evenly'>
        <div><img src={require('../Mymind/mindimage/Idli.webp')}className='w-36'></img></div>
        <div><img src={require('../Mymind/mindimage/Pizza.webp')}className='w-36'></img></div>
        <div><img src={require('../Mymind/mindimage/Burger.webp')}className='w-36'></img></div>
        <div><img src={require('../Mymind/mindimage/Biryani_2.webp')}className='w-36'></img></div>
        <div><img src={require('../Mymind/mindimage/North_Indian_4.webp')}className='w-36'></img></div>
        <div><img src={require('../Mymind/mindimage/Ice_Creams.webp')}className='w-36'></img></div>
        <div><img src={require('../Mymind/mindimage/Momos.webp')}className='w-36'></img></div>
        <div><img src={require('../Mymind/mindimage/Rolls.webp')}className='w-36'></img></div>
        <div><img src={require('../Mymind/mindimage/South_Indian_4.webp')}className='w-36'></img></div>
        

        </div>
        <hr></hr>
    </div>
  )
}

export default Mymind;