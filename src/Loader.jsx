import React from 'react'
import logo from './assets/loadimage.png'
import loadImage from './assets/loadback.jpg'

function Loader() {
  return (
    <div className='h-screen w-screen text-white font-bold flex justify-center items-center'
    
    style={{
      backgroundImage: `url(${loadImage})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      backgroundAttachment: 'fixed',

     }}   
    
    >
         
         <div className='w-[50vh] h-fit'>
           <img src = {logo} alt= 'loading .'/>
         </div>
    </div>
  )
}

export default Loader
