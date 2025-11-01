import React from 'react'
import {assets}  from '../assets/assets'

 function Header() {
  return (
  <div className='flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mx-10 lg:-px-44 sm:mt-20 '>
      {/*-------------- Left side------------*/}
      
       <div>
            <h1 className='text-4xl lx:text-5xl 2xl:text-6xl font-bold  leading-tight'>Remove the <br className='max-md:hidden'/><span className='bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1] bg-clip-text text-transparent'>background</span><br className='max-md:hidden'/> from images for free.</h1>
            <p className='my-6  text-[15px] text-gray-500'> Unleash your creativity with a simple web application that does all the hard work.<br className='max-sm:hidden'/>Remove photo backgrounds instantly, customize your design.</p>
            <div className=''> 
             <input type='file' name=''id='upload1' hidden/>
             <label className='inline-flex gap-3 px-8 py-3.5  bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1] rounded-full  cursor-pointer m-auto hover:scale-105 transition-all duration-600 ' htmlFor='upload1'>
               <img className='' width={20} src={assets.upload_btn_icon} alt=''/>
              <p className='text-white'>upload your image</p>
             
             </label>
            </div>
       </div>

     {/*-------------- Right side------------*/}

      <div className='w-full max-w-md '>
        <img className='w-96' src={assets.header_img}/>
      </div>
  
  </div>
  )
}
export default Header;