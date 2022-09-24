import TestimonialCard from './TestimonialCard';

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
