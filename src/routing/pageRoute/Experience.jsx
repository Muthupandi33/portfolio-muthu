import React from 'react'
import CompanyLogo from './src-doc/focus-edu-logo.webp'
import {FaJava, FaHtml5, FaCss3, FaJs, FaDatabase , FaGithub, FaReact } from "react-icons/fa";


const Experience = () => {
  return (
       <section>
    <div id="exp-head">
    <h1>Experience</h1>
    </div>
         <section id="skillsAndExperience">
          
         <article className="experience">
           <h2>Professional Experience</h2>
           <h3>
            <img src={CompanyLogo} alt="Focus Edumatics" width="50px" height="30px"/>
            
             Focus Edumatics
             Private Limited
            
           </h3>
           <p style={{ textIndent: '10px' }}> Executive Tutor - Math</p>
           <p style={{ textIndent: '10px' }}> Feb 2022 - July 2024</p>
           
           <ul>
             <li>Conduct engaging and interactive online tutoring sessions for K-12 students within designated hours through personalized learning plans based on students' grade level, needs, and academic goals.</li>
             <li>I suggested the correct approach to my colleague, ensuring there were no SME errors.</li>
             <li>Attend the meeting, gather the details for the daily update, and follow up on the updates. </li>
             <li>Check the progress and strive to achieve KPI goals.</li>
             <li>Utilize diverse online instructional strategies, tools, and resources to create an interactive and stimulating learning experience, adapting when necessary to drive student growth.</li>
             <li>Provide clear and effective instruction, guidance, and feedback to enhance students' comprehension and to inform future tutoring sessions.</li>
             <li>Maintain accurate records of tutoring sessions, including attendance, progress notes, and relevant information to deliver comprehensive progress reports.</li>
             <li>Collaborate with Team Leaders and colleagues to review QA analysis, session KPIs, and overall performance to continuously improve yourself and your team.</li>
             <li>Perform any assigned or necessary additional duties.</li>
           </ul>
           
           </article>
             <article class="skills">
                 <h2>Technical skills</h2>
                 <br />
                     <ul>
                         <li><i class="fa-brands fa-java"> <FaJava/></i>Core Java<br />
                             <div class="skillKnowledge">
                                 Intermediate</div>
                         </li>
                         <li><i class="fa-brands fa-html5"><FaHtml5/></i>HTML<br/>
                             <div class="skillKnowledge">Intermediate</div>
                         </li>
                         <li><i class="fa-brands fa-css3-alt"><FaCss3/></i>CSS<br/>
                             <div class="skillKnowledge">Intermediate</div>
                         </li>
                         <li><i class="fa-brands fa-js"> <FaJs/></i>Java Script<br/>
                             <div class="skillKnowledge">Intermediate</div>
                         </li>
                         <li><i class="fa-solid fa-database"> <FaDatabase/> </i>SQL<br/>
                             <div class="skillKnowledge">Intermediate</div>
                         </li>
                         <li><i class="fa-brands fa-square-github"><FaReact/></i>React Js <br/>
                             <div class="skillKnowledge">Intermediate</div>
                         </li>
                         <li><i class="fa-brands fa-square-github"> <FaGithub/></i>Git and Git Hub <br/>
                             <div class="skillKnowledge">Basic</div>
                         </li>
                     </ul>
 
         </article>
        
       </section>
       </section>
 
  )
}

export default Experience