import React from "react";
import { IoFitness } from "react-icons/io5";
import { ImCross } from "react-icons/im";
import { BsCheckCircleFill } from "react-icons/bs";
import { FaCrown } from "react-icons/fa";
import {Link} from "react-router-dom";
export const Price = () => {
  return (
    <div className="lg:px-20 px-4 relative z-50">
      <h1 className="text-2xl lg:text-5xl text-center pt-16 md:pb-10 pb-2 font-extrabold font-serif strokeCustom">
        Ready To Start <span>Your Journey</span> Now With Us
      </h1>
      {/* Table */}
      <div className="bg-slate-600 w-full md:overflow-x-hidden overflow-x-scroll lg:text-xl text-sm lg:font-bold p-5 rounded-md">
        <div className="w-[120%] md:w-full flex-col flex gap-4">
          {/* Pricing */}
          <div className="flex items-center">
            <h1 className="md:w-1/6 w-2/6 uppercase">Plan</h1>
          <div/>
            <div className="w-2/6 border-x-2 border-white items-center flex gap-2 justify-center">
              <h1>Basic</h1>
              <IoFitness className="text-white"/>
            </div>
            <div className="w-2/6 border-x-2 border-white items-center flex gap-2 justify-center">
              <h1>Premium</h1>
              <IoFitness className="text-white"/>
            </div>
            <div className="w-1/6 border-x-2 border-white items-center flex gap-2 justify-center">
              <h1>Expert</h1>
              <FaCrown className="text-white"/>
            </div>
          </div>
          <hr />
          {/* Pricing */}
          <div className="flex w-full items-center">
            <h1 className="md:w-1/6 w-2/6 uppercase">Pricing</h1>
            <h1 className="w-1/6 border-x-2 border-white text-center">&#8377; 600</h1>
            <h1 className="w-1/6 text-center border-r-2 border-white">&#8377; 1500</h1>
            <h1 className="w-1/6 text-center border-r-2 border-white">&#8377; 1000</h1>
            <h1 className="w-1/6 text-center border-r-2 border-white">&#8377; 2500</h1>
            <h1 className="w-1/6 text-center border-r-2 border-white">&#8377; 2000</h1>
          </div>
          <hr />
          {/* Duration */}
          <div className="flex w-full items-center">
            <h1 className="md:w-1/6 w-2/6 uppercase">Duration</h1>
            <h1 className="w-1/6 border-x-2 border-white text-center text-white">1 Month</h1>
            <h1 className="w-1/6 text-center border-r-2 border-white text-white">3 Month</h1>
            <h1 className="w-1/6 text-center border-r-2 border-white text-white">1 Month</h1>
            <h1 className="w-1/6 text-center border-r-2 border-white text-white">3 Month</h1>
            <h1 className="w-1/6 text-center border-r-2 border-white text-white">1 Month</h1>
          </div>
          <hr />
          {/* Personal Trainig */}
          <div className="flex w-full items-center">
            <h1 className="md:w-1/6 w-2/6 uppercase">Personal Training</h1>
            <h1 className="w-1/6 flex justify-center border-x-2 border-white text-red-600">
              <ImCross />
            </h1>
            <h1 className="w-1/6 flex border-r-2 border-white justify-center text-red-600">
              <ImCross />
            </h1>
            <h1 className="w-1/6 flex border-r-2 border-white justify-center text-red-600">
              <ImCross />
            </h1>
            <h1 className="w-1/6 flex border-r-2 border-white justify-center text-red-600">
              <ImCross />
            </h1>
            <h1 className="w-1/6 flex border-r-2 border-white justify-center text-green-500">
              <BsCheckCircleFill />
            </h1>
          </div>
          <hr />
          {/* Cardio */}
          <div className="flex w-full items-center">
            <h1 className="md:w-1/6 w-2/6 uppercase">Cardio</h1>
            <h1 className="w-1/6 flex justify-center border-x-2 border-white text-red-600">
              <ImCross />
            </h1>
            <h1 className="w-1/6 flex border-r-2 border-white justify-center text-red-600">
              <ImCross />
            </h1>
            <h1 className="w-1/6 flex border-r-2 border-white justify-center text-green-500">
              <BsCheckCircleFill />
            </h1>
            <h1 className="w-1/6 flex border-r-2 border-white justify-center text-green-500">
              <BsCheckCircleFill />
            </h1>
            <h1 className="w-1/6 flex border-r-2 border-white justify-center text-green-500">
              <BsCheckCircleFill />
            </h1>
          </div>
          <hr />
          {/* AC */}
          <div className="flex w-full items-center">
            <h1 className="md:w-1/6 w-2/6 uppercase">Air Conditioners</h1>
            <h1 className="w-1/6 flex justify-center border-x-2 border-white text-green-500">
              <BsCheckCircleFill />
            </h1>
            <h1 className="w-1/6 flex border-r-2 border-white justify-center text-green-500">
              <BsCheckCircleFill />
            </h1>
            <h1 className="w-1/6 flex border-r-2 border-white justify-center text-green-500">
              <BsCheckCircleFill />
            </h1>
            <h1 className="w-1/6 flex border-r-2 border-white justify-center text-green-500">
              <BsCheckCircleFill />
            </h1>
            <h1 className="w-1/6 flex border-r-2 border-white justify-center text-green-500">
              <BsCheckCircleFill />
            </h1>
          </div>
          <hr />
          {/* Coach */}
          <div className="flex w-full items-center">
            <h1 className="md:w-1/6 w-2/6 uppercase">Training Consultation</h1>
            <h1 className="w-1/6 flex justify-center border-x-2 border-white text-green-500">
              <BsCheckCircleFill />
            </h1>
            <h1 className="w-1/6 flex border-r-2 border-white justify-center text-green-500">
              <BsCheckCircleFill />
            </h1>
            <h1 className="w-1/6 flex border-r-2 border-white justify-center text-green-500">
              <BsCheckCircleFill />
            </h1>
            <h1 className="w-1/6 flex border-r-2 border-white justify-center text-green-500">
              <BsCheckCircleFill />
            </h1>
            <h1 className="w-1/6 flex border-r-2 border-white justify-center text-green-500">
              <BsCheckCircleFill />
            </h1>
          </div>
          <hr />
        </div>
      </div>
        <div className="mx-auto w-full lg:w-1/6 lg:mt-8 mt-2">
          <Link to={"/contact"}>
            <button className="py-1 hover:bg-cyan-100 rounded-md w-full lg:text-lg font-medium lg:font-bold bg-cyan-300 text-black">
              Contact Us
            </button>
          </Link>
        </div>
    </div>
  );
};