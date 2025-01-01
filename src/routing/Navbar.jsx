import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import portfolioIcon from './pageRoute/src-doc/portfolio.png';

const iconStyle = {
  width: '70px',
  height: '70px',
  objectFit: 'cover',
  display: 'flex',
  alignitem: 'center',
   
};

const Navbar = () => {

  const [isNight, setIsNight] = useState(false);
  const  [onClick, setOnClick]= useState(false);
  const handleclick  =()=>{
    setOnClick(!onClick);  
  }

  const toggleMode = () => {
    setIsNight(!isNight);
    document.body.className = isNight ? "day" : "night"; // Apply theme globally
  };

  return (
    <div className='navBlock' >
       <nav>
           <img style={iconStyle} src={portfolioIcon} alt="Portfolio-icon" />
            
          {/* Toggle Button */}
        <div className="toggle-container">
          <button
            className={`toggle-button ${isNight ? "night-mode" : ""}`}
            onClick={toggleMode}
          >
            <span className="sun">☀️ Day</span>
            <span className="moon">🌙 Night</span>
          </button>
        </div>

            <div class="logo-block">
                Muthupandi M
            </div>

           {/* Navigation links */}
        <ul id='options' className={onClick ? '#options active' : '#options'}  >
          <li ><Link className='active' to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/project">Project</Link></li>
          <li><Link to="/experience">Experience</Link></li>
        </ul>
          </nav>

          <div id='mobile' onClick={handleclick}>
             <i id='bar' className={onClick ? 'fas fa-times' : 'fas fa-bars'}  ></i>
          </div>

    </div>
  )
}

export default Navbar