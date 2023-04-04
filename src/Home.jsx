import { GiChargedArrow,GiMuscleUp } from "react-icons/gi";
import { IoFitness } from "react-icons/io5";
import {Link} from "react-router-dom";
import React from "react";
export const Home = () => {
  return (
    <>
      <div className="flex lg:px-20 px-4 relative z-50 h-[55vh] lg:h-[70vh] uppercase lg:text-5xl md:text-3xl font-semibold md:font-black justify-between items-center">
        {/* Left Box */}
        <div>
          <h1 className="">
            wave gym &
          </h1>
          <div className="flex items-center gap-2">
            <h1>fitness center</h1>
            <IoFitness className="animate-pulse text-white"/>
          </div>
          <h1 className="text-cyan-500">by kuldeep singh</h1>
          <Link to={"/contact"}>
            <button className="py-1 hover:bg-cyan-100 rounded-md w-full lg:w-3/6 lg:text-lg font-medium lg:font-bold bg-cyan-300 text-black">
              Contact Us
            </button>
          </Link>
        </div>
        {/* Right Box */}
        <div>
          <h1>
            increase your <br /> muscle power <br />
          </h1>
          <div className="flex items-center gap-2">
            <h1>with us</h1>
            <GiMuscleUp className="text-white"/>
          </div>
          <Link to={"/price"}>
            <button className="py-1 hover:bg-cyan-100 rounded-md w-full lg:w-3/6 lg:text-lg font-medium lg:font-bold bg-cyan-300 text-black">
              Start Today
            </button>
          </Link>
        </div>
        {/* Absolute Arrow Box */}
        <div className="absolute bottom-14 md:text-7xl text-4xl z-50 lg:right-80 right-20 lg:rotate-12 rotate-90">
          <GiChargedArrow />
        </div>
      </div>
        {/* Bottom Div */}
      <div className="uppercase lg:px-20 px-4 lg:h-[30vh] h-[15vh] gap-2 lg:gap-0 flex lg:font-extrabold font-medium md:text-3xl z-50 justify-between relative">
        {/* number box */}
        <h1>
          <span className="md:text-xl text-sm font-semibold text-white">
            call us find out more
          </span>
          <br />
          8899533330
        </h1>
        {/* information box */}
        <div className="hidden lg:block">
          <h1 className="lg:text-2xl mb-2 font-semibold lg:font-bold text-white">information about us</h1>
          <ul className="list-disc text-lg lg:font-semibold font-medium">
            <li>men fitness and workout</li>
            <li>women fitness and workout</li>
            <li>personal trainings</li>
            <li>modern equipment</li>
            <li>nutrition solutions</li>
          </ul>
        </div>
        {/* trial box */}
        <h1>
          trail session <br />
          <span className="md:text-xl text-sm font-semibold text-white">
            free trail with pro trainers
          </span>
        </h1>
      </div>
        {/* Responsive  Information box */}
         <div className="lg:hidden uppercase z-50 relative flex flex-col items-center pt-5">
          <h1 className="px-4 font-medium text-white md:text-xl">information about us</h1>
          <ul className="list-disc text-sm font-medium md:text-lg pl-10">
            <li>men fitness and workout</li>
            <li>women fitness and workout</li>
            <li>personal trainings</li>
            <li>modern equipment</li>
            <li>nutrition solutions</li>
          </ul>
        </div>
    </>
  );
};
