import React from 'react';
import ReviewList from './ReviewList.jsx';
import AggregatedReviews from './AggregatedReviews.jsx';
import Search from './Search.jsx';
import $ from 'jquery';
import './styles/AppStyle.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {reviews: [], aggregatedValues: {}, numReviews: 0};
    this.getReviews();
  }

  handleSubmit() {
    // console.log('handled submit');
  }

  getReviews() {
    // temporary placeholder to select a random house to view
    let randomHouse = Math.floor(100 * Math.random());
    // get request retrieves reviews and aggregated values from server
    $.ajax({
      url: `/reviews/${randomHouse}`,
      type: 'GET',
      dataType: 'json',
    }).done((reviews) => {
      // separate aggregatedValues to send down to AggregatedReviews
      const aggregatedValues = reviews[reviews.length - 1];
      this.setState({aggregatedValues: aggregatedValues});
      // remove aggregatedValues from reviews array
      reviews.splice(-1, 1);
      /* the shape of reviews is an array of tuples where the index 0 of the tuple is user info
      and index 1 is the associated review info */
      this.setState({reviews: reviews});
      // record number of reviews
      this.setState({numReviews: reviews.length});
    }).fail(() => {
      console.log('reviews get request failed');
    });
  }

  render() {
    // there are three distinct sections to the review component
    return (
      <div id='reviews'>
        <div id='searchSection'>
          <Search numReviews={this.state.numReviews} ratings={this.state.aggregatedValues} handleSubmit={this.handleSubmit}/>
        </div>
        <div id='aggregatedReviews'>
          {Object.keys(this.state.aggregatedValues).length && <AggregatedReviews ratings={this.state.aggregatedValues} />}
        </div>
        <div id="reviewList">
          {this.state.reviews.length && <ReviewList reviews={this.state.reviews} />}
        </div>
      </div>
    );  
  }
}

export default App;