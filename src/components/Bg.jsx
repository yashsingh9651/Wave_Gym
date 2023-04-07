import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export const Bg = () => {
  return (
    <div>
        <LazyLoadImage
        className="w-screen h-screen z-10 opacity-60 fixed top-0 object-cover"
        src="bg.jpg"
        effect='blur'
        alt=""
      />
    </div>
  )
}