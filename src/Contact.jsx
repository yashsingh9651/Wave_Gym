import React, { useRef, useState } from 'react';
import { useFormik } from "formik";
import Schema from './schemas';
import emailjs from '@emailjs/browser';
import {IoIosFitness} from 'react-icons/io';
import Images from './Data/imageData';
export const Contact = () => {
  const [index, setIndex] = useState(0);
   // ? Template and handling form...
   const data = {
    name: "",
    contactDetails: "",
    message: "",
  };
  const Form = useRef();
  const { values, handleChange, handleBlur, handleSubmit, errors, touched } =
    useFormik({
      initialValues: data,
      validationSchema: Schema,
      onSubmit: (values, action) => {
        emailjs
          .sendForm(
            "service_gxm49ge",
            "template_hr64q6",
            Form.current,
            "pLJS6d0WCzJXu3_og"
          )
          .then(
            (result) => {
              // console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
        action.resetForm();
      },
    });
  return (
    <div className='lg:px-20 px-4 relative z-50'>
      {/* Moving Dumbell*/}
      <div className="absolute lg:text-9xl text-7xl customAnimation right-40">
        <IoIosFitness/>
      </div>
      {/* Moving Dumbell*/}
      <div className="absolute lg:text-9xl text-7xl customAnimation2 top-[50%]">
        <IoIosFitness/>
      </div>
     <h1 className="text-2xl lg:text-5xl text-center pt-20 lg:pt-16 md:pb-10 pb-2 font-extrabold font-serif strokeCustom">
         <span>Become Fit</span> !
      </h1>
      {/* Blured Box */}
      <div className="lg:flex items-center justify-between lg:w-4/5 w-full mx-auto bg-[#ffffff59] p-2 backdrop-blur-sm rounded-md">
      {/* Owner Box */}
        <div>
          <img src={Images[index].id} className='lg:w-[700px] w-full lg:h-[400px] object-cover rounded-md' alt="owner" />
          <div className='flex gap-4 pt-4'>
            {Images.map((item)=><img key={item.id} src={item.id} onClick={()=>{setIndex(item.img)}} className="object-cover rounded lg:w-[80px] w-[50px] h-[50px] lg:h-[80px] cursor-pointer hover:scale-110" alt="" />
            )}
          </div>
        </div>
        {/* Form */}
        <form
              onSubmit={handleSubmit}
              ref={Form}
              className="lg:w-2/6 mt-3 lg:mt-0 rounded-md p-2"
            >
        <div className='w-3/5 mx-auto mb-5'>
          <img src="rod.png" className='w-full object-cover' alt="" />
        </div>
        <h1 className='text-center text-2xl font-bold mb-5 text-black'>!! Contact Us To Join The Gym Now !!</h1>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  placeholder="Name..."
                  className="outline-none rounded p-1 w-full text-[#00ffff] font-bold"
                />
                {errors.name && touched.name ? (
                  <p className="text-white absolute z-50 top-8">{errors.name}</p>
                ) : null}
              </div>
              <div className="relative">
                <input
                  type="text"
                  name="contactDetails"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.contactDetails}
                  placeholder="Phone Number or Gmail..."
                  className="w-full outline-none rounded p-1 text-[#00ffff] font-bold my-5"
                />
                {errors.contactDetails && touched.contactDetails ? (
                  <p className="text-white absolute z-50 top-12">
                    {errors.contactDetails}
                  </p>
                ) : null}
              </div>
              <div className="relative">
                <textarea
                  name="message"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.message}
                  className="w-full p-1 text-[#00ffff] font-bold resize-none rounded outline-none h-20"
                  placeholder="Message..."
                ></textarea>
                {errors.message && touched.message ? (
                  <p className="text-white absolute z-50 top-20">
                    {errors.message}
                  </p>
                ) : null}
              </div>
              <button
                type="submit"
                className="bg-white text-black p-1 w-full rounded font-semibold text-xl mt-5 hover:bg-gray-200 hover:scale-95"
              >
                Send Message
              </button>
            </form>
      </div>
    </div>
  )
};