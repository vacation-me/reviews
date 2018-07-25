import React from 'react';
import $ from 'jquery';
import './styles/AggregatedStyle.css';
import starClear from './styles/icons/star-clear.svg';
import star from './styles/icons/star.svg';
import starHalf from './styles/icons/star-half.svg';




const AggregatedReviews = (props) => {
  console.log('Ratings in child: ', props.ratings);

  const renderStars = function (rating, outerDiv) {
    if ($(outerDiv).children().length !== 0) {
      return;
    }
    console.log('here');
    let numStars = 0;
    while (rating / 1 >= 1) {
      $(outerDiv).append(`<img class="star" src=${star} />`);
      rating -= 1;
      numStars += 1;
    }
    while (rating !== 0) {
      if (rating > 0.75) {
        $(outerDiv).append(`<img class="star" src=${star} />`);
        rating = 0;
        numStars += 1;
      } else if (rating > 0.25) {
        $(outerDiv).append(`<img class="star" src=${starHalf} />`);
        rating = 0;
        numStars += 1;
      } else {
        $(outerDiv).append(`<img class="star" src=${starClear} />`);
        rating = 0;
        numStars += 1;
      }
    }
    while (numStars !== 5) {
      $(outerDiv).append(`<img class="star" src=${starClear} />`);
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