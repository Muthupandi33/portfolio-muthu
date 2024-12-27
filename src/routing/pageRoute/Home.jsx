import React from 'react';
import img from './src-doc/IMG_20240807_213618.jpg';
import ResumePDF from './src-doc/JavaDeveloper_Muthupandi.pdf';
import { Link, useNavigate } from 'react-router-dom';
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Home() {
  const openResume = () => {
    window.open(ResumePDF);
  };
  
  
    const navigate = useNavigate(); // Hook to programmatically navigate
  
    const goToContact = () => {
      navigate('/contact'); // Navigate to the Contact page
    };

  return (
    <section id="userDetails">
      <nav className="viewOption"></nav>

      <div className="content-block" id="userName">
        <p>Hello, I'm</p>
        <h1 className="nameTag">Muthupandi M</h1>
        <h4>Java Full-Stack Developer</h4>

        <div className="assets">
          <button className="connect" onClick={openResume}>
            Resume
          </button>
          <button className="connect" onClick={goToContact}>
             Contact info
          </button>
        </div>

        <div className="connect-media">
          <Link
            to="https://www.linkedin.com/in/muthupandi-m-5a7b472b5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className='fa-linkedin-in'>
            <FaLinkedin />
            </i>
          </Link>
          <Link
            to="https://github.com/Muthupandi33"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className='fa-github' title="GitHub Profile">
              <FaGithub/>
            </i>
          </Link>
        </div>
      </div>

      <div className="content-block" id="userImage">
        <img
          src={img}
          alt="Muthupandi M"
          sizes="width='initial-scale' height='100px'"
        />
      </div>
    </section>
  );
}

export default Home;
