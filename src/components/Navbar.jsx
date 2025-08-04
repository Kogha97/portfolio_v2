import { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';  // Use ScrollLink for within-page navigation


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
            <li><ScrollLink to='myexperience' smooth={true} duration={500}>Experience</ScrollLink></li>
            <li><ScrollLink to="projectContainer" smooth={true} duration={500}>Projects</ScrollLink></li>
            <li><ScrollLink to="ContactMe" smooth={true} duration={500}>Contact Me</ScrollLink></li>
            <li><a href="/Joao_Augusto_Cv.pdf.pdf" download="Joao_Augusto_CV">Resume</a></li>
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
              <li><ScrollLink to='myexperience' smooth={true} duration={500}>Experience</ScrollLink></li>
              <li><ScrollLink to="projectContainer" smooth={true} duration={500}>Projects</ScrollLink></li>
              <li><ScrollLink to="ContactMe" smooth={true} duration={500}>Contact Me</ScrollLink></li>
              <li><a href="/Joao_Augusto_Cv.pdf" download="Joao_Augusto_CV">Resume</a></li>
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}
