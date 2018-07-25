import React from 'react';
import ReviewList from './ReviewList.jsx';
import AggregatedReviews from './AggregatedReviews.jsx';
import $ from 'jquery';
import style from './styles/AppStyle.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {reviews: [], aggregatedValues: {}};
    this.getReviews();
  }

  getReviews() {
    let randomHouse = Math.floor(100 * Math.random());
    $.ajax({
      url: `/reviews/${randomHouse}`,
      type: 'GET',
      dataType: 'json',
    }).done((reviews) => {
      let aggregatedValues = reviews[reviews.length - 1];
      // console.log('Aggregated Values: ', aggregatedValues);
      this.setState({aggregatedValues: aggregatedValues});
      reviews.splice(-1, 1);
      // console.log('Reviews: ', reviews);
      this.setState({reviews: reviews});
    }).fail(() => {
      console.log('reviews get request failed');
    });
  }

  render() {
    let reviewList;
    let ratings;
    if (this.state.reviews.length > 0) {
      reviewList = <ReviewList reviews={this.state.reviews} />;
    } else {
      reviewList = '';
    }
    if (Object.keys(this.state.aggregatedValues).length > 0) {
      ratings = <AggregatedReviews ratings={this.state.aggregatedValues} />;
    } else {
      ratings = '';
    }
    return (
      <div id='reviews'>
        <div id='searchSection'><h1>Search Section</h1></div>
        <div id='aggregatedReviews'>
          {ratings}
        </div>
        <div id="reviewList">
          {reviewList}
        </div>
      </div>

    );  
  }
}

export default App;