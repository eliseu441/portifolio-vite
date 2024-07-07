import { useState, useEffect } from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom';
//import viteLogo from '/vite.svg'
import 'react-widgets/scss/styles.scss';
import './sass/style.scss';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/scss/bootstrap.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Preloader from "./layout/preLoader/Preloader.jsx";
import Header from './layout/Header2/index.jsx';
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects.jsx'
import Experience from './pages/Experience/Experience.jsx'


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // callApis()
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    Aos.init({ once: true });
}, []);
  return ( 
  <HashRouter>
    <Header/>
    {isLoading ? <Preloader /> : (
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
      </Routes>)}
  </HashRouter>
  )
}

export default App
