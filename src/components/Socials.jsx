import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { BsFacebook, BsGithub } from 'react-icons/bs';

const Socials = () => (
  <div className="flex gap-4 text-2xl items-center">
    <a href="https://www.instagram.com/kfu_lk/" target="_blank" rel="noreferrer">
      <AiFillInstagram className="transition-all duration-300 ease-in-out hover:scale-125" />
    </a>
    <a href="https://www.facebook.com/kristian.fulkerson.1" target="_blank" rel="noreferrer">
      <BsFacebook className="transition-all duration-300 ease-in-out hover:scale-125" />
    </a>
    <a href="https://github.com/krisf451" target="_blank" rel="noreferrer">
      <BsGithub className="transition-all duration-300 ease-in-out hover:scale-125" />
    </a>
    <a href="https://www.linkedin.com/in/kristianfulkerson/" target="_blank" rel="noreferrer">
      <AiFillLinkedin className="transition-all duration-300 ease-in-out hover:scale-125" />
    </a>
  </div>
);

export default Socials;
