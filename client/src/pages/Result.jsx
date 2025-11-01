import React from 'react'
import Footer from '../component/Footer';
import { assets } from '../assets/assets';

 function Result(){
  return (<>
   <div className='mx-4 my-3 lg:mx-44 mt-2 min-h-[75vh]'>
    <div className="bg-white px-8 py-6 rounded-lg drop-shadow-sm ">
      {/* image container */}
      <div className='flex flex-col sm:grid grid-cols-2 gap-8'>

        {/* left image */}
        <div className=' '>
          <p className='font-semibold text-gray-600 mb-2'>Original</p>
          <img className='rounded-md border ' src={assets.image_w_bg} alt='original images'/>
        </div>
        {/* right side */}
        <div className='flex flex-col'>
          <p className='font-semibold text-gray-600 mb-2'>Background Remove</p>
          <div className='rounded-md border border-gray-300 h-full relative bg-layer  overflow-hidden'>
             <img className=' rounded-md  ' src={assets.image_wo_bg} alt='remove background images'/>
             {/* <div className='absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2'>
              <div className='border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin'>

              </div>
             </div> */}

          </div>
         
        </div>
      </div>
      <div className='flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6' >
        <button className='px-8 py-2.5 text-violet-600 text-sm border  border-violet-600 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer'>Try another images</button>
        <a className='px-8 py-2.5 text-white text-sm  bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1]  hover:scale-105 transition-all duration-700 rounded-full cursor-pointer' href=''>download images</a>
      </div>
    </div>
   
    
    </div>
    <Footer/>
   
    </>
    
  )
}
export default Result;