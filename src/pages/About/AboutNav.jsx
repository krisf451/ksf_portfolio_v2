const menus = [
  { label: 'About', route: '#about' },
  { label: 'Skills', route: '#skills' },
  { label: 'Experience', route: '#experience' },
  { label: 'Testimonials', route: '#testimonials' },
];

const AboutNav = () => (
  <div className="text-sm h-12 flex justify-center items-center uppercase tracking-[.2em] w-full animate-slideleft my-4 lg:my-0">
    <ul className="flex h-full items-center">
      {menus.map((item, i) => (
        <li key={i} className="px-4 cursor-pointer hover:border-b-2">
          <a href={item.route}>
            <p className="pl-[.3rem]">{item.label}</p>
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default AboutNav;
