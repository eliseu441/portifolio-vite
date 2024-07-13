import { useState, useEffect } from 'react'
import { Route, Routes, HashRouter } from 'react-router-dom';
//import viteLogo from '/vite.svg'
import 'react-widgets/scss/styles.scss';
import './sass/style.scss';
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/scss/bootstrap.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';
import 'react-vertical-timeline-component/style.min.css';
import Header from './layout/Header2/index.jsx';
import Home from './pages/Home/Home.jsx'
import Projects from './pages/Projects/Projects.jsx'
import Repos from './pages/Repos/Repos.jsx'


function App() {
  return ( 
  <HashRouter>
    <Header/>
    
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/repos" element={<Repos />} />
      </Routes>
  </HashRouter>
  )
}

export default App
