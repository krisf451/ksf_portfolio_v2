import AnimatePage from '../../components/AnimatePage';
import AboutSkills from './AboutSkills';
import AboutResume from './AboutResume';
import AboutTestimonials from './AboutTestimonials';

const About = () => {
  console.log('about');
  return (
    <AnimatePage>
      <AboutResume />
      <AboutSkills flip />
      <AboutTestimonials />
    </AnimatePage>
  );
};

export default About;
