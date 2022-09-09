import React from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import AnimatePage from '../../components/AnimatePage';

const About = () => {
  console.log('about');
  return (
    <AnimatePage>
      <div className="flex flex-col md:flex-row px-8 justify-center">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl tracking-wider">About Me</h2>
          <img src="bw_cutout.png" alt="" />
        </div>
        <div className="w-full">
          <div className="flex items-center gap-4">
            <h2 className="whitespace-nowrap">Get in Touch</h2>
            <hr className="border border-black cursor-pointer hover:border-red-500 duration-500 w-full" />
          </div>
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-gray-200 rounded-lg">
              <BiCurrentLocation />
              <p>6140, Correll St Riverside, CA. 92504</p>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-gray-200 rounded-lg">
              <AiOutlineMail />
              <p>kristianf451@gmail.com</p>
              <p>kfulkerson@phxcapitalgroup.com</p>
            </div>
            <div className="col-span-12 md:col-span-6 lg:col-span-4 bg-gray-200 rounded-lg">
              <AiOutlinePhone />
              <p>(951)227-3742</p>
            </div>
          </div>
        </div>
      </div>
    </AnimatePage>
  );
};

export default About;
