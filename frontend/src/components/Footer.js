import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMobile } from '@fortawesome/free-solid-svg-icons'
export default function Footer() {
  return (
    <div>
    <div className='row footer-container'>
        <div className='col-sm-4 mt-sm-4 footer-text'>
            <h2>QUICK LINKS</h2>
            <div><Link to='/'>Home</Link></div>
            <div><Link to='/skillstech'>Skills</Link></div>
            <div><Link to='/projects'>Projects</Link></div>
            <div><Link to='/experience'>Experience</Link></div>
            <div><Link to='/certifications'>Certifications</Link></div>
        </div> 
        <div className='col-sm-4 mt-4'>
            <h2>CONTACT INFO</h2>
            <div>
                <FontAwesomeIcon icon={faEnvelope} className='footer-icon'/>
                <span>skhasanj300@gmail.com</span>
            </div>
            <div>
                <FontAwesomeIcon icon={faMobile} className='footer-icon'/>
                <span>9390016702</span>
            </div>
        </div>
        <div className='footer-social col-sm-4 mt-4'>
            <h2>LET'S CONNECT</h2>
            <span><a href='https://www.linkedin.com/in/hasan-shaik-b712931a6/'><i class="bi bi-linkedin" style={{ fontSize:'1.5em'}}></i></a></span>
            <span><a href='https://github.com/HASAN-SHAIK'><i class="bi bi-github" style={{ fontSize:'1.5em'}}></i></a></span>
            <span><a href='https://leetcode.com/skhasanj300/'><i class="bi bi-laptop" style={{ fontSize:'1.5em'}}></i></a></span>
            <span><a href='https://www.instagram.com/heuristic_hasan/profilecard/?igsh=b2t6ZzFyZXZ2bGdk'><i class="bi bi-instagram" style={{ fontSize:'1.5em'}}></i></a></span>
        </div>
        </div>
        <p className="text-center m-0">© 2024 Hasan Shaik. All Rights Reserved.</p>
    </div>
  )
}
