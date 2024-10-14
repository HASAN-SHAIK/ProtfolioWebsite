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

function App() {
  useEffect(() => {
    const func = async () => {
      await axios.get('https://protfoliowebsite.onrender.com/')
    }
    func();
  }, [])
  var [skills, setSkills] = useState();
  const url = 'http://localhost:8080/api';
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
        <div className='float-right mt-5 footerText text-center'>All the Data Displayed is coming from database</div>
      </div>
    </BrowserRouter>
  );
}

export default App;

// Filename - App.js

// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img
//           src={logo}
//           className="App-logo"
//           alt="logo" />
//         <p>A simple React app.....</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer">
//           Learn React
//         </a>
//         <form
//           action="/"
//           className="form">
//           <button type="submit">
//             Connected?
//           </button>
//         </form>
//       </header>
//     </div>
//   );
// }

// export default App;

