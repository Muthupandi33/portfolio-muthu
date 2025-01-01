import React from 'react'

import p11 from './src-doc/write-something.webp'
import p12 from './src-doc/text.jpg'
import p13 from './src-doc/clan.jpg'
import p14 from './src-doc/d&d.png'
import p15 from './src-doc/empmanage.png'
import p16 from './src-doc/logo512.png'
  
const Project = () => {

  const p1 = () => {
    window.open("https://muthupandi33.github.io/QRGeneratorByNeeded/", "_blank");   
     };

     const p2 = () => {
      window.open("https://muthupandi33.github.io/TextToVoice/", "_blank");   
       };
       const p3 = () => {
        window.open("https://muthupandi33.github.io/Daily-Calendar/", "_blank");   
         };
         const p4 = () => {
          window.open("https://muthupandi33.github.io/DragAndDrop/", "_blank");   
           };
           const p5 = () => {
            window.open("https://muthupandi33.github.io/empDeatils/", "_blank");   
             };
             const p6 = () => {
              window.open("https://muthupandi33.github.io/portfolio-muthu/", "_blank");   
               };
     


  return (
    <section id="project">
            <h2>Project</h2>

     <article className='GitHubThings'>
         
        
     <div onClick={p1} className="p1 G">
           <div className="image-container">
             <img src={p11} alt="img" className="background-image" />
           <div className="overlay">
             <h1 className="title">QR Code_scanner</h1>
              <p className="description">
              Generate custom QR codes effortlessly with a web-based tool designed for your specific needs.
             </p>
           </div>
          </div>
    </div>
        

        
    <div onClick={p2} className="p2 G">
           <div className="image-container">
             <img src={p12} alt="img" className="background-image" />
           <div className="overlay">
             <h1 className="title">Text To Vocie</h1>
              <p className="description">
              Effortlessly transform written words into harmonious, natural speech with a simple online tool.
             </p>
           </div>
          </div>
    </div>
        

    <div onClick={p3} className="p3 G">
           <div className="image-container">
             <img src={p13} alt="img" className="background-image" />
           <div className="overlay">
             <h1 className="title">Date Check</h1>
              <p className="description">
              A simple, intuitive online calendar to organize and manage your daily events with ease.
                    </p>
           </div>
          </div>
    </div>


        


    <div onClick={p4} className="p4 G">
           <div className="image-container">
             <img src={p14} alt="img" className="background-image" />
           <div className="overlay">
             <h1 className="title">
              (D)rag <br />
              AND(&) <br />
              (D)rop
             </h1>
              <p className="description">
              A seamless, intuitive tool for effortlessly organizing and moving your tasks with a simple drag and drop.
             </p>
           </div>
          </div>
    </div>


    <div onClick={p5} className="p5 G">
           <div className="image-container">
             <img src={p15} alt="img" className="background-image" />
           <div className="overlay">
             <h1 className="title">QR Code_scanner</h1>
              <p className="description">
              Efficient platform for managing employee information, including roles, salaries, and personal details.
             </p>
           </div>
          </div>
    </div>


        
    <div onClick={p6} className="p6 G">
           <div className="image-container">
             <img src={p16} alt="img" className="background-image" />
           <div className="overlay">
             <h1 className="title">Portfolio</h1>
              <p className="description">
              Minimalistic portfolio showcasing projects and skills with seamless user experience and fluid navigation.
             </p>
           </div>
          </div>
    </div>

     </article>

   </section>
      
  )
}

export default Project