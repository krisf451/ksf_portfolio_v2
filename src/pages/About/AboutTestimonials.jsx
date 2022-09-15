/* eslint-disable react/no-unknown-property */
import { motion } from 'framer-motion';

const AboutTestimonials = () => (
  <motion.div
    whileInView={{ opacity: [0, 1], x: [-100, 0] }}
    transition={{ duration: 1, staggerChildren: 0.5 }}
    className="animate-slideright flex flex-col md:flex-row mb-8 px-8 pb-10"
    id="testimonials"
  >
    <div className="w-full">
      <div className="flex items-center gap-4 mb-12">
        <h2 className="whitespace-nowrap uppercase tracking-[.4em] font-semibold">Testimonials</h2>
        <motion.hr
          initial={{ width: 0 }}
          animate={{ width: '100%' }}
          transition={{ duration: 1, ease: 'linear' }}
          className="border border-gray-200"
        />
      </div>
      <div className="flex text-sm flex-col gap-4">
        <div className="w-full lg:hidden flex-col items-center animate-slowfade gap-4 uppercase">
          <div className="relative flex items-center justify-center">
            <h2 className="text-4xl sm:text-5xl tracking-[.2em] whitespace-nowrap text-gray-300 dark:text-gray-600 opacity-60">Testimonial</h2>
            <h2 className="absolute text-xl sm:text-2xl font-semibold tracking-[.4em] whitespace-nowrap text-gray-800 dark:text-gray-200">My <span className="text-blue-500">Value</span></h2>
          </div>
        </div>
        <motion.p
          whileInView={{ opacity: [0, 1], y: [20, 0] }}
          transition={{ duration: 1, ease: 'linear' }}
          className="w-full leading-6 animate-slideleft text-center sm:text-left"
        >Hello there! My name is <span className="font-semibold">Teamwork</span>.
          Something about some of the teams I have worked on
          <br /><br />
          I pride myself in my work ethic and ability to be efficient. I have a high level of patience,
          a competitive mindset, and an open mind toward constructive feedback. Please feel free to reach out if you want to connect or know about any interesting hiring opporitunities.
        </motion.p>
        <motion.div
          whileInView={{ opacity: [0, 1], x: [20, 0] }}
          transition={{ duration: 0.6, ease: 'linear' }}
          className="w-full flex gap-6 text-sm sm:text-lg"
        >
          testimonial slider goes here

        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default AboutTestimonials;
