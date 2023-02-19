
import React from 'react';
import aarjit from'./aarjit.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
 function About() {
  return (
    <div>
     
            <div class="container">
      <div class="image">
      <img src={aarjit} alt="aarjit" className='aarjit_img'/>

      </div>
      <div class="text">
     <h3>Hello!</h3>
      <h4>I am <span className='aarjit'>Aarjit Poudel</span></h4>
      <h5> Front-End Developer </h5>
      <button className='btn'>Contact Me</button>
     
   
      <div className="contact-icons">
  <a href="https://github.com/aarjitpoudel">
    <FontAwesomeIcon icon={faGithub} />
  </a>
  <a href="https://www.facebook.com/aarjitpoudel.7">
    <FontAwesomeIcon icon={faFacebook} />
  </a>
  <a href="https://www.instagram.com/aarjit_pdl">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
  <a href="https://www.linkedin.com/in/aarjit-poudel-2925841b5/">
    <FontAwesomeIcon icon={faLinkedin} />
  </a>
</div>

      </div>

    </div>
    </div>
  )
}

export default About;