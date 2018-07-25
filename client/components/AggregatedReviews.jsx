import React from 'react';
import $ from 'jquery';
import './styles/AggregatedStyle.css';
import starClear from './styles/icons/star-clear.svg';
import star from './styles/icons/star.svg';
import starHalf from './styles/icons/star-half.svg';




const AggregatedReviews = (props) => {

  const renderStars = function (rating, outerDiv) {
    let numStars = 0;
    console.log(rating, outerDiv);
    while (rating / 1 >= 1) {
      console.log('Full star');
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
        console.log('Half star');
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
    console.log(rating);
  };

  return (
    <div id="aggregateContainer">
      <div id="accuracy">Accuracy</div>
      <div id="accuracyStars" className="starSet">
        {renderStars(4.5, '#accuracyStars')}
      </div>
      <div id="location">Location</div>
      <div id="locationStars" className="starSet">
        {renderStars(2.3, '#locationStars')}
      </div>
      <div id="communication">Communication</div>
      <div id="communicationStars" className="starSet">
        {renderStars(3, '#communicationStars')}
      </div>
      <div id="checkIn">Check-in</div>
      <div id="checkInStars" className="starSet">
        {renderStars(4.8, '#checkInStars')}
      </div>
      <div id="cleanliness">Cleanliness</div>
      <div id="cleanlinessStars" className="starSet">
        {renderStars(4, '#cleanlinessStars')}
      </div>
      <div id="value">Value</div>
      <div id="valueStars" className="starSet">
        {renderStars(5, '#valueStars')}
      </div>
    </div>
  );
};

export default AggregatedReviews;