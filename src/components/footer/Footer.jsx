import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

function Footer() {
  return (
    <footer>
      <a href="#" className="footer__logo">Olaoye</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/hussein-sheu-tijani-a784791b6/"><BsLinkedin /></a>
        <a href="https://www.instagram.com/olaoye_tijani/"><FiInstagram /></a>
        <a href="https://twitter.com/OlaoyeHussein"><IoLogoTwitter /></a>
      </div>

      <div className="footer__copywright">
        <small>&copy; Olaoye Tijani. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer