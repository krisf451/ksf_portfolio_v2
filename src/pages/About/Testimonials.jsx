/* eslint-disable import/no-unresolved */
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';

import TestimonialCard from './TestimonialCard';
import 'swiper/css';

const Testimonials = ({ testimonials }) => (
  <div>
    {testimonials?.length > 0 && (
    <div className="flex items-center justify-center h-full w-full px-4 flex-wrap gap-6">
        {testimonials?.map((testimonial) => (
          <TestimonialCard testimonial={testimonial} key={testimonial._id} />
        ))}
    </div>
    )}
  </div>
);

export default Testimonials;
