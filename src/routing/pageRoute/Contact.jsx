import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section id="footer" >
    <p>Get in Touch</p>
    <h1>Contact Me</h1>
    <ul id="contact">
        
        <li> <i class="fa-brands fa-whatsapp"></i>
            <img src="./source/WhatsappToMe.png" alt="QR code"/> </li>
        <li><i class="fa-regular fa-envelope"></i>
        <Link class="contact"
                to="mailto:muthuphy33@gmail.com">muthuphy33@gmail.com</Link></li>
        <li><i class="fa-solid fa-phone"></i>
        <Link class="contact" to="tel:+91852451368">+91 8531976451</Link></li>
        <li><i class="fa-brands fa-linkedin"></i>
        <Link class="contact"
                to="https://www.linkedin.com/in/muthupandi-m-5a7b472b5/" target="_blank">LinkedIn Profile</Link></li>
    </ul>

 

</section>

   
  )
}

export default Contact