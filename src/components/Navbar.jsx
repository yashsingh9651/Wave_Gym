import React from 'react';
import {MdOutlineSportsGymnastics} from  'react-icons/md';
export const Navbar = () => {
  return (
    <div className='lg:px-20 px-4 gap-2 fixed w-full flex items-center justify-between h-14 top-0 z-50 font-bold md:text-3xl text-xl'>
        <div className="flex items-center gap-2">
          <div>Wave Gym</div>
          <MdOutlineSportsGymnastics/>
        </div>
        <div className="flex items-center gap-3 text-white z-50">
          {/* <div className='custom z-50 relative'><a className='z-50 custom' target={'_blank'} href='https://m.facebook.com/story.php?story_fbid=pfbid0E8sJqy8RwURhU2iH6NGYFcDLpjZUnZkcc6gsd1ztpGHAPyp33n2m8fBfzHsEQsHXl&id=100002941185789&sfnsn=wiwspwa&mibextid=RUbZ1f'><FaFacebookSquare className='z-50 custom' /></a></div>
          <div className='custom'><Link href={'https://www.instagram.com/manzarfitness/'}><FaInstagramSquare/></Link></div> */}
        </div>
    </div>
  )
}