const menus = [
  { label: 'About', route: '#about' },
  { label: 'Skills', route: '#skills' },
  { label: 'Experience', route: '#experience' },
  { label: 'Testimonials', route: '#testimonials' },
];

const AboutNav = () => (
  <div className="text-sm h-auto sm:h-12 flex justify-center items-center uppercase tracking-[.2em] w-full animate-slideleft my-4 lg:my-0">
    <ul className="flex flex-col gap-4 sm:gap-0 mb-4 sm:mb-0 sm:flex-row h-full items-center">
      {menus.map((item, i) => (
        <li key={i} className="px-4 cursor-pointer sm:hover:border-b-2">
          <a href={item.route}>
            <p className="pl-[.3rem]">{item.label}</p>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default AboutNav;
