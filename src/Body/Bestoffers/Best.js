import React from 'react'

const Best = () => {
  return (
    <div className='py-3 '>
        <div className='flex text-xl py-3 pl-5 font-bold '>Best offers for you</div>
        <div className='flex justify-evenly '>
            <div><img src={require('../Bestoffers/best1.webp')}className='w-96'></img></div>
            <div><img src={require('../Bestoffers/best2.webp')}className='w-96'></img></div>
            <div><img src={require('../Bestoffers/best1.webp')}className='w-96'></img></div>
        </div>
    </div>
  )
}

export default Best;