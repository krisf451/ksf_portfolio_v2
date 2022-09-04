import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import { Home, About, Contact, Testimonials, Projects } from './pages';
import { useDarkMode } from './hooks/useDarkMode';

const App = () => {
  const [darkmode, setDarkmode] = useDarkMode();
  const location = useLocation();

  return (
    <div className="app">
      {/* <Navbar /> */}
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
