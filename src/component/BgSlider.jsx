import React, { useState } from 'react'
import { assets } from '../assets/assets';


const BgSlider =()=>{
    const [Sliderposition,setSliderposition]=useState(50);
    const handleSlider=(e)=>{
        setSliderposition(e.target.value)
    }
    return (
        <div className="pb-10 md:py-20 mx-2">
        
            <h1 className=' mb-12 sm:mb-20 text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold'>Remove <span className='bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1] bg-clip-text text-transparent'>Background</span> with High<br/>Quality and Accuracy</h1>
      
           <div className='relative w-full max-w-3xl overflow-hidden m-auto rounded-xl'> 
                  {/*images with background */}
              <img src={assets.image_w_bg} style={{clipPath:`inset(0 ${100.2 -Sliderposition}% 0 0)`}} alt="image with background"/>

              {/* images without backgroudn*/}
              <img className=' absolute top-0 left-0 w-full h-full' src={assets.image_wo_bg} style={{clipPath:`inset(0 0 0 ${Sliderposition}%)`}}/>

              {/*slide*/}
            
              <input className='absolute top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2 w-full z-10 slider '  type="range" min={0} max={100} value={Sliderposition} onChange={handleSlider} />
            
           </div>
        </div>

    )
}
export default BgSlider;