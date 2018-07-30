import React from 'react';
import styles from './styles/MatchedStyle.css';

const Matched = (props) => {
  return (
    <div id={styles.matchedContainer}>
      <p id={styles.numReviews}>{props.reviews.length} {props.reviews.length === 1 ? 'guest has' : 'guests have'} mentioned "<strong>{props.searched}</strong>"</p>
      <p onClick={props.handleClick} id={styles.leaveSearch}>Back to all reviews</p>
    </div>
  );
};

export default Matched;