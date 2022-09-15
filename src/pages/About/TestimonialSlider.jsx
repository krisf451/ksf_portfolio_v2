/* eslint-disable import/no-unresolved */
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';

import TestimonialCard from './TestimonialCard';
import 'swiper/css';

const TestimonialSlider = ({ testimonials }) => (
  <div>
    {testimonials?.length > 0 && (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: 0.2 }} className="relative flex flex-col items-center h-full w-full px-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }} className="relative h-max w-max">
        <Swiper
          spaceBetween={20}
          slidesPerView="auto"
          centeredSlides
          loop
          grabCursor
          className="relative h-[250px] w-[1100px] rounded-lg"
        >
          {testimonials?.map((testimonial) => (
            <SwiperSlide
              key={testimonial._id}
              className={`!h-[250px] !w-[250px] md:!w-[310px] text-sm transition-all duration-300 ease-in-out hover:scale-105
                p-6 mt-2 text-center bg-gray-50 dark:bg-[#171720] rounded-md`}
            >
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
    )}
  </div>
);

export default TestimonialSlider;
