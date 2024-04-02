import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faXTwitter, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import HexagonWithJ from './HexagonWithJ';

export default function SocialBar() {

    const scrollToTop = () => {
        window.scrollTo({
            top:0,
            behavior:"smooth"
        });
        console.log('icon Clicked')
    }
  return (
    <div className='socialBar'>
        <div className='imgContainer'>
            <HexagonWithJ onClick={scrollToTop}/>
        </div>
        <div className='socialContainer'>
            <ul>
                <li>
                    <a href="https://github.com/Kogha97" target='_blank'>
                    <FontAwesomeIcon icon={faGithub} className='github' /></a>
                </li>

                <li><a href="https://twitter.com" target='_blank'>
                    <FontAwesomeIcon icon={faXTwitter} className='twitter'/></a>
                </li>
                <li><a href="https://www.instagram.com/joao.m.augusto/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} className='instagram'/></a>
                </li>
                <li><a href="https://www.linkedin.com/in/joao-augusto-25634b224/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedinIn} className='linkedin' /></a>
                </li>
            </ul>
        </div>
    </div>
  )
}
