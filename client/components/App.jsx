import React from 'react';
import ReviewList from './ReviewList.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {reviews: []};
    this.getReviews();
  }

  getReviews() {
    let randomHouse = Math.floor(100 * Math.random());
    $.ajax({
      url: `/reviews/${randomHouse}`,
      type: 'GET',
      // contentType: 'application/json',
      dataType: 'json',
    }).done((reviews) => {
      // console.log('reviews in the client:', reviews);
      this.setState({reviews: reviews});
    }).fail(() => {
      console.log('reviews get request failed');
    });
  }

  render() {
    let reviewList;
    if (this.state.reviews.length > 0) {
      reviewList = <ReviewList reviews={this.state.reviews} />;
    } else {
      reviewList = '';
    }
    return (
      <div id='reviews'>
        <div id='searchSection'>Search Section</div>
        <div id='aggregatedReviews'>Aggregate</div>
        <div id="reviewList">
          {reviewList}
        </div>
      </div>

    );
  }
}

export default App;