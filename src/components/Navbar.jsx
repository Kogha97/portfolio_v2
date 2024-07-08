// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-scroll';
// import { scroller } from 'react-scroll'

// export default function Navbar() {
//   const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
//   const [visible, setVisible] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       setVisible((prev) => prevScrollPos > currentScrollPos || currentScrollPos < 10);
//       setPrevScrollPos(currentScrollPos);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [prevScrollPos, visible]);

//   return (
//     <>
//     <div className={`navbar ${visible ? 'visible' : 'hidden'}`}>
//         <ul>
//             <li><Link to="introduction"smooth={true} duration={500}>Home</Link></li>
//             <li><Link to="aboutMe" smooth={true} duration={500}>About Me</Link></li>
//             <li><Link to="projectContainer" smooth={true} duration={500}>Projects</Link></li>
//             <li><Link to="ContactMe" smooth={true} duration={500}>Contact Me</Link></li>
//             <li><a href="/João_Augusto_-_Full_Stack_Developer.pdf" download="Joao_Augusto_Full_Stack_Developer_CV.pdf">Resume</a></li>
//         </ul>
//     </div>
//     <div className='navbar-smallscreen'>
//       <label className="hamburger-menu">
//         <input type="checkbox" />
//       </label>
//       <aside className="sidebar">
//         <nav className="navbar-hamburger">
//           <ul>
//             <li><Link to="introduction" smooth={true} duration={500}>Home</Link></li>
//             <li><Link to="aboutMe" smooth={true} duration={500}>About Me</Link></li>
//             <li><Link to="projectContainer" smooth={true} duration={500}>Projects</Link></li>
//             <li><Link to="ContactMe" smooth={true} duration={500}>Contact Me</Link></li>
//             <li><a href="../João_Augusto_-_Full_Stack_Developer.pdf" download="Joao_Augusto_Full_Stack_Developer_CV.pdf">Resume</a></li>
//           </ul>
//         </nav>
//         </aside>
//          </div>
//     </>
//   );
// }

import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';  // Use ScrollLink for within-page navigation
import { Link as RouterLink } from 'react-router-dom';  // Use RouterLink for page routing

export default function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <div className={`navbar ${visible ? 'visible' : 'hidden'}`}>
        <ul>
            <li><ScrollLink to="introduction" smooth={true} duration={500}>Home</ScrollLink></li>
            <li><ScrollLink to="aboutMe" smooth={true} duration={500}>About Me</ScrollLink></li>
            <li><ScrollLink to="projectContainer" smooth={true} duration={500}>Projects</ScrollLink></li>
            <li><ScrollLink to="ContactMe" smooth={true} duration={500}>Contact Me</ScrollLink></li>
            <li><a href="/João_Augusto_CV.pdf" download="Joao_Augusto_Full_Stack_Developer_CV.pdf">Resume</a></li>
        </ul>
      </div>
      <div className='navbar-smallscreen'>
        <label className="hamburger-menu">
          <input type="checkbox" />
        </label>
        <aside className="sidebar">
          <nav className="navbar-hamburger">
            <ul>
              <li><ScrollLink to="introduction" smooth={true} duration={500}>Home</ScrollLink></li>
              <li><ScrollLink to="aboutMe" smooth={true} duration={500}>About Me</ScrollLink></li>
              <li><ScrollLink to="projectContainer" smooth={true} duration={500}>Projects</ScrollLink></li>
              <li><ScrollLink to="ContactMe" smooth={true} duration={500}>Contact Me</ScrollLink></li>
              <li><a href="/João_Augusto_CV.pdf" download="Joao_Augusto_Full_Stack_Developer_CV.pdf">Resume</a></li>
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}
