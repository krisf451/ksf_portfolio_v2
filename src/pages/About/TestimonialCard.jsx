import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TestimonialCard = ({ testimonial }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div>
      {showMore && (
      <AnimatePresence>
        <motion.button
          key={testimonial._id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          exit={{ opacity: 0 }}
          type="button"
          onClick={() => setShowMore(false)}
          className="p-4 w-64 h-64"
        >
          <p className="h-32 overflow-y-scroll leading-8">&quot;{testimonial.feedback}&quot;</p>
        </motion.button>
      </AnimatePresence>
      )}
      {!showMore && (
      <AnimatePresence>
        <motion.div
          key={testimonial._id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          exit={{ opacity: 0 }}
          className="flex flex-col items-center gap-4 bg-gray-50 dark:bg-[#13131c] w-64 h-64 p-6 text-center rounded-lg shadow-md"
        >
          <img
            src={testimonial?.photo?.asset?.url}
            alt=""
            className="h-16 w-16 rounded-full object-cover shadow-sm"
          />
          <h3 className="font-semibold">{testimonial.name}</h3>
          <h3>From <span className="font-medium">{testimonial.company} </span>said...</h3>
          <button type="button" onClick={() => setShowMore(true)}>more...</button>
        </motion.div>
      </AnimatePresence>
      )}
    </div>
  );
};

export default TestimonialCard;
