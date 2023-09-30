import React from 'react'



const Footer = () => {
  return (
    <div className='flex justify-evenly bg-slate-100 text-xl py-3 pl-5 font-bold ' >
        <div className='pt-10'><h1>For better experience,download </h1>
            <h1>the Swiggy app now</h1>
        </div>
        <div>
        <img src={require('../Footer/googleplay-removebg-preview.png')}className=''></img></div>
        
    </div>
    
  )
}

export default Footer;