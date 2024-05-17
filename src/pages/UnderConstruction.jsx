import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function UnderConstruction() {
  const navigate = useNavigate();

  return (
    <div className='UnderConstructionContainer'>
      <h2>This project is still under construction  </h2>
        <h2><a href="/" onClick={(e) => {e.preventDefault(); navigate('/');}} className="goBackLink">Click here</a> to go back.</h2>
    </div>
  );
}
