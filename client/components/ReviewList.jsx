import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';


class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.reviews);
  }
  render() {
    const reviewList = this.props.reviews.map((review, index) => {
      return <ReviewEntry key={index.toString()} rev={review} />;
    });
    const noItems = (<div><h1>No movie was found.</h1></div>);
    return (
      <div id="reviewContainer">
        {reviewList.length === 0 ? noItems : reviewList}
      </div>
    );
  }
}

export default ReviewList;