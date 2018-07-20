import React from 'react';
import ReviewList from './ReviewList.jsx';
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  getReviews() {
    $.ajax({
      url: '/reviews/72',
      type: 'GET',
      // contentType: 'application/json',
      dataType: 'json',
      // data: {id: 72},
    }).done(() => {

    }).fail(() => {

    });
  }

  render() {
    this.getReviews();
    return (
      <div id='reviews'>
        <div id='searchSection'>Search Section</div>
        <div id='aggregatedReviews'>Aggregate</div>
        <div id="reviewList">
          <ReviewList />
        </div>
      </div>

    );
  }
}

export default App;