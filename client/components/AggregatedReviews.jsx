import React from 'react';
import style from './styles/AggregatedStyle.css';

const AggregatedReviews = (props) => {
  return (
    <div id="aggregateContainer">
      <div id="accuracy">Accuracy</div>
      <div id="location">Location</div>
      <div id="communication">Communication</div>
      <div id="checkIn">Check-in</div>
      <div id="cleanliness">Cleanliness</div>
      <div id="value">Value</div>
    </div>
  );
};

export default AggregatedReviews;