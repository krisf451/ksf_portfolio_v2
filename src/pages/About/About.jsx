import AnimatePage from '../../components/AnimatePage';
import AboutSkills from './AboutSkills';
import AboutResume from './AboutResume';
import AboutTestimonials from './AboutTestimonials';
import AboutNav from './AboutNav';

const About = () => {
  console.log('about');
  return (
    <AnimatePage>
      <div className="flex">
        <div className="hidden w-full h-[calc(100vh-120px)] lg:flex flex-col items-center gap-4 uppercase animate-slowfade bg-gray-100">
          <div className="relative flex items-center justify-center">
            <h2 className="text-5xl tracking-[.5em] whitespace-nowrap text-gray-300 dark:text-gray-600 pt-6">Resume</h2>
            <h2 className="absolute text-2xl font-semibold tracking-[.4em] whitespace-nowrap text-gray-800 dark:text-gray-200 pt-6">About <span className="text-blue-500">Me</span></h2>
          </div>
          <img src="bw_cutout.png" alt="" className="h-full object-contain" />
        </div>
        <div className="overflow-y-scroll h-[calc(100vh-120px)] pt-[64px]">
          {/* <AboutNav /> */}
          <div className="mt-6">
            <AboutResume />
            <AboutSkills flip />
            <AboutTestimonials />
          </div>
        </div>
      </div>

    </AnimatePage>
  );
};

export default About;
