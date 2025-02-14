import { useEffect, useRef } from 'react';
import Typed from 'typed.js';

export default function Introduction() {
  const el = useRef(null);
  const typed = useRef(null);

  useEffect(() => {
    const options = {
      strings: [
        'João Augusto.'
      ],
      typeSpeed: 45,
      backSpeed: 45,
      showCursor: true,
      cursorChar: '|',
      loop: false
    };

    typed.current = new Typed(el.current, options);

    return () => {
  
      typed.current.destroy();
    }
  }, []);

  return (
    <div className='introduction'>
      <h1>Hi, my name is</h1>
      <h2><span ref={el}></span></h2>
      <h3>I craft digital solutions for the online realm.</h3>
      <p>I am a new and excited Full Stack Web & App Developer, looking to emerge myself into the world of technology, ready to adapt, learn, and create a digital Paragon. I can not wait for this new adventure!</p>
    </div>
  );
}
