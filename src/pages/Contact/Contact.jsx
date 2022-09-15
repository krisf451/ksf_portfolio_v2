import { useState } from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BiCurrentLocation } from 'react-icons/bi';
import { BsTelephoneFill } from 'react-icons/bs';
import { FaRegPaperPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

import { client } from '../../client';
import Socials from '../../components/Socials';
import Map from './Map';
import AnimatePage from '../../components/AnimatePage';

const initialState = {
  name: '',
  email: '',
  message: '',
};

const Contact = () => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const doc = {
      _type: 'contact',
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    client.create(doc).then(() => toast.success('Contact Information sent!')).then(() => setFormData(initialState)).catch((err) => console.log(err));
  };
  return (
    <AnimatePage>
      <div className="flex flex-col md:flex-row px-8 justify-center pb-10 md:pb-6 lg:pb-0">
        <div className="hidden lg:flex flex-col items-center animate-slowfade gap-4 uppercase mr-16">
          <div className="relative flex items-center justify-center">
            <h2 className="text-5xl tracking-wider whitespace-nowrap text-gray-300 dark:text-gray-600 opacity-60">Contact Me</h2>
            <h2 className="absolute text-2xl font-semibold tracking-[.4em] whitespace-nowrap text-gray-800 dark:text-gray-200">Let&apos;s <span className="text-blue-500">Chat</span></h2>
          </div>
          <div className="flex">
            <h3 className="text-xl text-gray-600 mr-6">DON&apos;T BE SHY !</h3>
            <Socials />
          </div>
          <p className="w-3/4 text-center">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          <img src="contacttw.jpg" alt="" className="h-96 ml-10 rounded-lg opacity-90" />
        </div>
        <div className="w-full">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="whitespace-nowrap uppercase tracking-[.4em] font-semibold">Get in Touch</h2>
            <motion.hr
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, ease: 'linear' }}
              className="border border-gray-200"
            />
          </div>
          <div className="lg:hidden relative flex flex-col items-center justify-center uppercase mb-6">
            <h2 className="text-4xl tracking-[.1em] whitespace-nowrap text-gray-300 dark:text-gray-600 opacity-60">Contact Me</h2>
            <h2 className="absolute top-1.5 text-xl font-semibold tracking-[.4em] whitespace-nowrap text-gray-800 dark:text-gray-200">Let&apos;s <span className="text-blue-500">chat</span></h2>
            <div className="flex flex-col items-center my-4">
              <h3 className="text-xl text-gray-600 mb-3">DON&apos;T BE SHY !</h3>
              <Socials />
            </div>
            <p className="w-3/4 text-center mt-2">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
          </div>
          <div className="grid grid-cols-12 gap-4 text-gray-600 dark:text-gray-300 text-sm">
            <div className="contact-group whitespace-nowrap truncate">
              <BiCurrentLocation className="text-xl" />
              <p className="text-center">6140, Correll St
                <br />
                Riverside, CA 92504
              </p>
            </div>
            <div className="contact-group">
              <AiOutlineMail className="text-xl" />
              <p>kristianf451@gmail.com</p>
            </div>
            <div className="contact-group">
              <BsTelephoneFill className="text-xl" />
              <p>+951 227 3742</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-4 justify-between mt-8">
            <form onSubmit={handleSubmit} className="flex flex-col justify-between w-full gap-6 md:gap-0">
              <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Name" className="contact-input" required />
              <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" className="contact-input" required />
              <textarea name="message" value={formData.message} onChange={handleChange} rows="6" placeholder="Message" className="contact-input" required />
              <button className="flex justify-center items-center group fadeBtn hover:animate-makeItfadeIn p-3 border w-full dark:hover:bg-white dark:hover:text-black dark:hover:animate-none" type="submit">
                <FaRegPaperPlane className="hidden mr-6 animate-slowfade group-hover:flex" />
                Send Message
              </button>
            </form>
            <div className="w-full flex justify-center">
              <Map />
            </div>
          </div>
        </div>
      </div>
    </AnimatePage>
  );
};

export default Contact;
