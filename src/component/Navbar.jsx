import React from 'react'
import { assets } from '../assets/assets';
import { Link } from 'react-router-dom'
import { useClerk, UserButton,useUser } from '@clerk/clerk-react';

function Navbar() {
  const { openSignIn } = useClerk()
  const { isSignedIn, user } = useUser()
  return (
    <div className="flex items-center justify-between mx-4  py-4 lg:mx-40">
      <Link to='/'><img className='w-32 sm:w-44 ' src={assets.logo} alt='' /></Link>
      {
        isSignedIn ? <div><UserButton /></div> : <button onClick={() => openSignIn({})} className='bg-zinc-700 text-white flex items-center px-4 py-2 gap-3 rounded-full sm:px-8 sm:py-3 text-sm cursor-pointer'>Get Started< img className='w-3 sm:w-4' src={assets.arrow_icon} alt='' /></button>
      }
    </div>
  )
}
export default Navbar;