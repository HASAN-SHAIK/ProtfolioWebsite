import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarBootstrap } from './components/NavbarBootstrap';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Projects from './components/Projects';
import SkillsTech from './components/SkillsTech';
import Contact from './components/Contact';
import Experience from './components/Experience';
import { useEffect, useState } from 'react';
import Certifications from './components/Certifications';
import axios from 'axios';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const func = async () => {
      await axios.get('https://protfoliowebsite.onrender.com/api/home')
      await axios.post('https://protfoliowebsite.onrender.com/api/profileViews');
      // await axios.post('https://localhost:8080/api/profileViews');
    }
    func();
  }, [])
  const url = 'https://protfoliowebsite.onrender.com/api';
  // const url = 'https://localhost:3000/api';

  return (
    <BrowserRouter>
      <div class="App">
        <NavbarBootstrap class='cleanTransition' />
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/projects' element={<Projects url={url} />} />
          <Route class='cleanTransition' path='/skillstech' element={<SkillsTech url={url} />} />
          <Route path='/contact' element={<Contact url={url} />} />
          <Route path='/experience' element={<Experience url={url} />} />
          <Route path='/certifications' element={<Certifications url={url} />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;

