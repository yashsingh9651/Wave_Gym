import React from 'react';
import {MdOutlineSportsGymnastics} from  'react-icons/md';
export const Navbar = () => {
  return (
    <div className='lg:px-20 px-4 gap-2 fixed w-full h-14 top-0 z-50 font-bold md:text-3xl text-xl'>
        <div className="flex items-center gap-2">
          <div>Wave Gym</div>
          <MdOutlineSportsGymnastics/>
        </div>
    </div>
  )
}