import React, {useState , useEffect} from 'react'
import { Link } from 'react-router-dom';

const iconStyle = {
  width: '70px',
  height: '70px',
  objectFit: 'cover',
  display: 'flex',
  alignitem: 'center',
   
};

const Navbar = () => {

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true'; // 'true' means dark mode is enabled
  });

   // Function to toggle dark mode
   const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    // Save the dark mode preference in localStorage
    localStorage.setItem('darkMode', newDarkMode);
    // Toggle the dark-mode class on the body
    document.body.classList.toggle('dark-mode', newDarkMode);
  };

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);


  return (
    <div id='navBlock' >
       <section>

           <img style={iconStyle} src="./portfolio.png" alt="Portfolio-icon" />
            
           <div className="darkMode" title="Dark Mode">
          <button id="darkModebtn" onClick={toggleDarkMode}>
            {darkMode ? ' Day ☀️' : ' Night 🌙'} {/* Toggle button text */}
          </button>
        </div>

            <div class="logo-block">
                Muthupandi M
            </div>

           <ul>
            
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/project">Project</Link></li>
            <li><Link to="/experience">Experience</Link></li>
           </ul>

       </section>

    </div>
  )
}

export default Navbar