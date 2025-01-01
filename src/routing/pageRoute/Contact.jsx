import React from 'react'
// import { Link } from 'react-router-dom'
import { FaPhoneSquareAlt, FaLinkedin } from "react-icons/fa";
import { BiLogoGmail , BiCurrentLocation, BiLogoGithub } from "react-icons/bi";
import GoogleMapEmmerd from './src-doc/GoogleMapEmmerd';

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "a81b552f-e5aa-4335-8e6e-5fbd76b50bf5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      
      alert(res.message);
    }
  };



  return (
    <div  className='contact' >
    <div className="contact-title">
      <h1>Get In Touch</h1>
    </div>
    <div className="contact-section">
       <div className="contact-left">
        <h1>Let's Talk</h1>
         <div className="contact-details">
           
                 
                 <div className="contact-detail">
                  <BiLogoGmail/>
                   <a target='_blank' rel="noopener noreferrer" href="mailto:muthuphy33@gmail.com">
                    muthuphy33@gmail.com
                   </a>
                 </div>

                 <div className="contact-detail">
                 <FaPhoneSquareAlt/>
                  <a target='_blank' rel="noopener noreferrer" href="tel:+918532976451">
                    +91 85319 76451
                  </a>
                 </div>
                 
                 <div className="contact-detail">
                  <BiCurrentLocation/>
                  <a target='_blank' rel="noopener noreferrer" href="https://maps.app.goo.gl/ZW2nvHSztHmYHEGS9"> 
                  Dindigul -624705
                  <div className='map'>
                  < GoogleMapEmmerd/>
                  </div>
                    </a>
                 </div>

                 <div className="contact-detail">
                 <FaLinkedin/>
                  <a target='_blank' rel="noopener noreferrer" href="https://www.linkedin.com/in/muthupandi-m-5a7b472b5/">
                    Linked In
                  </a>
                 </div>

                 <div className="contact-detail">
                 <BiLogoGithub/>
                  <a target='_blank' rel="noopener noreferrer" href="https://github.com/Muthupandi33">
                    Git Hub
                  </a>
                 </div>
            
        
    </div>
    </div>
     <form onSubmit={onSubmit} className="contact-right">
         <label htmlFor="">You Name</label>
         <input required type="text" placeholder='Enter Your Name' name='name' />
         <label htmlFor="">You Email</label>
         <input required type="email" placeholder='Enter Your Email' name='email' />
         <label htmlFor="">Write Your Message Here</label>
         <textarea required name="message" rows="8" placeholder='Enter Your Message...'  ></textarea>
        <button type='submit' className='contact-submit'>Submit Now</button>
     </form>



       </div>

  </div>
      
  


//     <section id="footer" >
//     <p>Get in Touch</p>
//     <h1>Contact Me</h1>
//     <ul id="contact">
        
//         <li> <i class="fa-brands fa-whatsapp"></i>
//             <img src="./source/WhatsappToMe.png" alt="QR code"/> </li>
//         <li><i class="fa-regular fa-envelope"></i>
//         <Link class="contact"
//                 to="mailto:muthuphy33@gmail.com">muthuphy33@gmail.com</Link></li>
//         <li><i class="fa-solid fa-phone"></i>
//         <Link class="contact" to="tel:+91852451368">+91 8531976451</Link></li>
//         <li><i class="fa-brands fa-linkedin"></i>
//         <Link class="contact"
//                 to="https://www.linkedin.com/in/muthupandi-m-5a7b472b5/" target="_blank">LinkedIn Profile</Link></li>
//     </ul>

 

// </section>

   
  )
}

export default Contact