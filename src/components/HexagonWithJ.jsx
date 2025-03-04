import PropTypes from 'prop-types';

const HexagonWithJ = ({onClick}) => {
  return (
    <svg width="60" height="45" viewBox="0 0 120 85" xmlns="http://www.w3.org/2000/svg" className="hexagon-svg" onClick={onClick} >

      <g className="hexagon-foreground">
        <polygon points="60,5 90,20 90,65 60,80 30,65 30,20" fill="none" stroke="whitesmoke" strokeWidth="4"/>
        <text x="60" y="55" fontFamily="Arial" fontSize="25" fill="whitesmoke" textAnchor="middle">J</text>
      </g>
    </svg>
  );


};
HexagonWithJ.propTypes = {
  onClick: PropTypes.func 
};

export default HexagonWithJ;






