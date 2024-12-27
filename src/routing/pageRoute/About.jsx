import React from 'react';
import img from './src-doc/IMG_20240807_213618.jpg';
import { FaUserGraduate , FaBriefcase } from "react-icons/fa";

const About = () => {
  return (
    <main>
      <section className="contentPage">
        <article className="aboutContent">
          <img src={img} alt="Muthupandi M" className="user-image-content" />
        </article>
        <article className="aboutText" id="about">
          <p>Get To Know More</p>
          <h1>About Me</h1>
          

          <div id="aboutText">
            <div className="educationBox aboutBox">
              <i className="fa-solid fa-graduation-cap">
                <FaUserGraduate />
              </i>
              {/* <FontAwesomeIcon icon={faGraduationCap} /> */}
              <h5>Education</h5>
              <p>
                Master of Science in Physics <br />
                2020 - 2022 <br />
                CGPA: 7.7
              </p>
            </div>
            <div className="experienceBox aboutBox">
              <i className="fa-solid fa-briefcase">
              <FaBriefcase />
              </i>
              <h5>Experience</h5>
              <p>2 Year(s) 4 Month(s) of Experience <br /> Executive Tutor - Math</p>
            </div>

            <div className="aboutMe">
              <p>
                Highly motivated and skilled professional with around 2 years of experience in the educational
                domain. Seeking a challenging position to contribute to the development of innovative software
                solutions. Eager to apply technical expertise, problem-solving skills, and a strong foundation in
                software development to drive success in a collaborative, growth-oriented environment. Software
                solutions. Eager to apply technical expertise, problem-solving abilities, and a strong foundation in
                software development principles to drive success in a collaborative and growth-oriented environment.
              </p>
            </div>
          </div>
        </article>
      </section>
     

    </main>
    
  );
};

export default About;
