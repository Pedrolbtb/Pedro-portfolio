import logo from './logo.svg';
import './App.css';
import './styles/vihvaapp.css';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Projects from './Components/Projects';
import VihvaApp from './Components/VihvaApp';
import Edicao from './Components/Edicao';
import VihvaWeb from './Components/VihvaWeb';
import VihvaWatch from './Components/VihvaWatch';
import { AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();
  const isMainWrapperRoute = ['/', '/about', '/projects'].includes(location.pathname);

  return (
    <div>
      {isMainWrapperRoute && (
        <div className="wrapper-main">
          <Navbar />
          <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
              <Route index element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/projects' element={<Projects />} />
            </Routes>
          </AnimatePresence>
        </div>
      )}
      {!isMainWrapperRoute && (
        <AnimatePresence mode='wait'>
          <Routes location={location} key={location.pathname}>
            <Route path='/VihvaApp' element={<VihvaApp />} />
            <Route path='/VihvaWeb' element={<VihvaWeb />} />
            <Route path='/VihvaWatch' element={<VihvaWatch />} />
            <Route path='/Edicao' element={<Edicao />} />
          </Routes>
        </AnimatePresence>
      )}
    </div>
  );
}

export default App;
