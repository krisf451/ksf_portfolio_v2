const menus = [
  { label: 'Skills', route: '#skills' },
  { label: 'Experience', route: '#experience' },
  { label: 'Testimonials', route: '#testimonials' },
];

const AboutNav = () => {
  console.log('test');

  return (
    <div className="h-12 flex items-center uppercase tracking-[.2em] w-full animate-slideleft">
      <ul className="hidden md:flex items-end h-full">
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
};

export default AboutNav;
