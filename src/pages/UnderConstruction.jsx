import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faHammer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function UnderConstruction() {
  const navigate = useNavigate();

  return (
    <div className='under-construction-container'>
      <h2>
        This project is still under construction   <FontAwesomeIcon icon={faHammer} className="hammer-icon" />
      </h2>
      <h2>
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            navigate('/');
          }}
          className="go-back-link"
        >
          Click here
        </a> to go back.
      </h2>
    </div>
  );
}
