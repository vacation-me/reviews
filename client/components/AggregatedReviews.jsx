import React from 'react';
import $ from 'jquery';
import './styles/AggregatedStyle.css';
import emptyStar from './styles/icons/star-clear.svg';
import halfStar from './styles/icons/star-half.svg';
import fullStar from './styles/icons/star.svg';

const AggregatedReviews = (props) => {
  const renderStars = function (rating, outerDiv) {

    // don't add stars on re-render if they already exist
    if ($(outerDiv).children().length !== 0) {
      return;
    }
    // numStars is used to ensure that 5 stars are always rendered
    let numStars = 0;
    // this loop renders all initial full stars
    while (rating / 1 >= 1) {
      $(outerDiv).append(`<img class="star" src=${fullStar} />`);
      rating -= 1;
      numStars += 1;
    }
    // this loop renders either an empty, half, or full start depending on decimal
    while (rating !== 0) {
      if (rating > 0.75) {
        $(outerDiv).append(`<img class="star" src=${fullStar} />`);
        rating = 0;
        numStars += 1;
      } else if (rating > 0.25) {
        $(outerDiv).append(`<img class="star" src=${halfStar} />`);
        rating = 0;
        numStars += 1;
      } else {
        $(outerDiv).append(`<img class="star" src=${emptyStar} />`);
        rating = 0;
        numStars += 1;
      }
    }
    // this renders remaining empty stars when necessary
    while (numStars !== 5) {
      $(outerDiv).append(`<img class="star" src=${emptyStar} />`);
      numStars += 1;
    }
  };

  return (
    <div id="aggregateContainer">
      <div id="accuracy">Accuracy</div>
      <div id="accuracyStars" className="starSet">
        {renderStars(props.ratings.accuracy, '#accuracyStars')}
      </div>
      <div id="location">Location</div>
      <div id="locationStars" className="starSet">
        {renderStars(props.ratings.location, '#locationStars')}
      </div>
      <div id="communication">Communication</div>
      <div id="communicationStars" className="starSet">
        {renderStars(props.ratings.communication, '#communicationStars')}
      </div>
      <div id="checkIn">Check-in</div>
      <div id="checkInStars" className="starSet">
        {renderStars(props.ratings.checkIn, '#checkInStars')}
      </div>
      <div id="cleanliness">Cleanliness</div>
      <div id="cleanlinessStars" className="starSet">
        {renderStars(props.ratings.cleanliness, '#cleanlinessStars')}
      </div>
      <div id="value">Value</div>
      <div id="valueStars" className="starSet">
        {renderStars(props.ratings.value, '#valueStars')}
      </div>
    </div>
  );
};

export default AggregatedReviews;