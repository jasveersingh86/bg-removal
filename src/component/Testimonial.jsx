import React from "react";
import { testimonialsData } from "../assets/assets";
 
const Testimonial=()=>{
    
     return <div>
        {/* title */}
        <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold ">What Our <span className='bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1] bg-clip-text text-transparent'>Users </span>Say</h1>
       <div className="grid grid-cols-1  md:grid-cols-2 gap-10 max-w-4xl mx-auto px-4 py-10">
        {testimonialsData.map((item,index)=>(
            <div className=" bg-white rounded-xl p-6 drop-shadow-md max-w-lg m-auto cursor-pointer hover:scale-y-105  transition-all duration-600 " key={index}>
                <p className="text-sm  text-gray-500">{item.text}</p>
                <div className="flex item-center gap-3 mt-5">
                    <img className="w-12 rounded-full" src={item.image} alt=''/>
                    <div> 
                        <p>{item.author}</p>
                        <p className="text-sm text-gray-600">{item.jobTitle}</p>
                    </div>
                </div>
            </div>
        ))}
       </div>
    </div>
         

}
export default Testimonial;