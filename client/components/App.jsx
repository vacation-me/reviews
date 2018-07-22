import React from 'react';
import ReviewList from './ReviewList.jsx';
import $ from 'jquery';
import style from './styles/AppStyle.css';

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
        <div id='searchSection'><h1>Search Section</h1></div>
        <div id='aggregatedReviews'><h1>Aggregate</h1></div>
        <div id="reviewList">
          <h1>Reviews</h1>  
          {reviewList}
        </div>
      </div>

    );  
  }
}

export default App;