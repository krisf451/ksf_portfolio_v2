import { useState } from 'react';
import { BiCurrentLocation } from 'react-icons/bi';
import { BsTelephoneFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

import { client } from '../../client';

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
      <div className="flex flex-col md:flex-row px-8 justify-center">
        <div className="flex-col items-center hidden lg:flex animate-slowfade">
          <h2 className="text-3xl tracking-wider pr-6">Contact Me</h2>
          <img src="bw_cutout.png" alt="" />
        </div>
        <div className="w-full">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="whitespace-nowrap uppercase tracking-[.4em] font-semibold">Get in Touch</h2>
            <motion.hr
              initial={{ width: 0 }}
              animate={{ width: '100%' }}
              transition={{ duration: 1, ease: 'linear' }}
              className="border border-gray-400 cursor-pointer hover:border-red-500 duration-500 w-full"
            />
          </div>
          <div className="grid grid-cols-12 gap-4 text-gray-600 dark:text-gray-300">
            <div className="contact-group whitespace-nowrap truncate">
              <BiCurrentLocation className="text-xl" />
              <p>6140, Correll St Riverside, CA 92504</p>
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
          <div className="flex flex-col mt-8">

            <form onSubmit={handleSubmit} className="flex flex-col w-full gap-6">
              <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Name" className="contact-input" />
              <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" className="contact-input" />
              <textarea name="message" value={formData.message} onChange={handleChange} rows="6" placeholder="Message" className="contact-input" />
              <button className="fadeBtn hover:animate-makeItfadeIn p-3 border w-48" type="submit">Send Message</button>
            </form>

            <div className="w-full">
              <h3>Map</h3>
            </div>
          </div>
        </div>
      </div>
    </AnimatePage>
  );
};

export default Contact;
