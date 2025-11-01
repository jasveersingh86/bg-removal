import React from 'react'
import Footer from '../component/Footer';
import { assets, plans } from '../assets/assets';
 function Credit_buy(){
  return(
    <>
     <div className='min-h-[80vh] text-center pt-14 mb-10'>
      <button className='border border-gray-400 rounded-full px-10 py-2 mb-6 text-2xl bg-black text-white hover:bg-white hover:text-black '>Our Plans</button>
      <h1 className='text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold'>Choose the  <span className='bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1] bg-clip-text text-transparent'>plan </span>that's right for you.</h1>
      <div className='flex flex-wrap justify-center gap-6 text-left mt-5'>
        {plans.map((item,index)=>(
          <div className='bg-white drop-shadow-sm  rounded-2xl py-12 px-8 text-gray-700 mt-3  border  border-green-300 hover:scale-105 transition-all duration-500 cursor-pointer'>
            <img width={40} src={assets.logo_icon} alt=''/>
            <p className='mt-3  font-semibold'>{item.id}</p>
            <p className='text-sm'>{item.desc}</p>
            <p mt-6>
              <span className='text-3xl font-medium'>${item.price}</span>/{item.credits}credits.
            </p>
            <button className=' w-full text-sm bg-black text-white mt-5 px-3 py-3 rounded-full'>Purchase</button>
          </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
   
  )
}
export default Credit_buy;
