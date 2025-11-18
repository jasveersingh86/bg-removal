import React from 'react'
import { assets } from '../assets/assets';

  const   Steps=()=>{
  return (
    <div className='mx-4 lg:mx-44 py-20 xl:py-40'>
     <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold'> Steps to remove<span className='bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1] bg-clip-text text-transparent'> background </span><br/> image in seconds</h1>
        <div className='flex items-start flex-wrap gap-4 mt-16 xl:mt-24 justify-center'>

        <div className='flex items-start gap-4 bg-white  drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
            <img className='max-w-9' src={assets.upload_icon} alt=''/>
            <div> 
                <p className='text-xl font-medium'>upload images</p>
                 <p className='text-sm text-neutral-500 mt-1'>Upload your image now Background will be removed easily...</p>
            </div>
        </div>
         <div className='flex items-start gap-4 bg-white  drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
            <img className='max-w-9' src={assets.remove_bg_icon} alt=''/>
            <div> 
                <p className='text-xl font-medium'>Remove background</p>
                 <p className='text-sm text-neutral-500 mt-1'>Background removed successfully Preview your image ...</p>
            </div>
        </div>
         <div className='flex items-start gap-4 bg-white  drop-shadow-md p-7 pb-10 rounded hover:scale-105 transition-all duration-500'>
            <img className='max-w-9' src={assets.download_icon} alt=''/>
            <div> 
                <p className='text-xl font-medium'>download images</p>
                 <p className='text-sm text-neutral-500 mt-1'>Your image is ready Click the button below Download...</p>
            </div>
        </div>

        </div>
    </div>
  )
}
export default Steps;