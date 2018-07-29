import React from 'react';
import './styles/MatchedStyle.css';

const Matched = (props) => {
  return (
    <div id="matchedContainer">
      <p id="numReviews">{props.reviews.length} {props.reviews.length === 1 ? 'guest has' : 'guests have'} mentioned "<strong>{props.searched}</strong>"</p>
      <p onClick={props.handleClick} id="leaveSearch">Back to all reviews</p>
    </div>
  );
};

export default Matched;