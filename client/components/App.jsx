import React from 'react';
import ReviewList from './ReviewList';


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id='reviews'>
        <div id='searchSection'></div>
        <div id='aggregatedReviews'></div>
        <div id="reviewList">
          <ReviewList />
        </div>
      </div>

    );
  }
}

export default App;