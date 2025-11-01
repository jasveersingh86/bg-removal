import react from 'react';
import { assets } from '../assets/assets';
import {Link}  from 'react-router-dom'

 const Footer =()=>{
    return(
        <div className='flex md:flex-row flex-col  px-4 items-center justify-between gap-4 md:mx-10 lg:px-44 py-8 mb-4'>
         <img width={150} className='' src={assets.logo} alt='logo'/>
         <p className='flex-1 border-l  border-gray-400 text-gray-500 pl-4 text-sm'>copyright @<span className='bg-gradient-to-l from-[#fb7185] via-[#a21caf] to-[#6366f1] bg-clip-text text-transparent'>Jasveer Singh </span>| All right reserved.</p>
         <div className='flex gap-4 md:gap-6 cursor-pointer'>
           <Link to='https://www.linkedin.com/in/jasveer-singh-242645296?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'><img width={30} src={assets.linkedin} alt='linkedin'/></Link>
             <img width={30} src={assets.facebook} alt='facebook'/>
             <img width={30} src={assets.bird} alt='twiter'/>
         </div>
        </div>
    )
 }
 export default Footer;