import React from 'react';
import ReviewEntry from './ReviewEntry.jsx';
import styles from './styles/ListStyle.css';



class ReviewList extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.reviews);
  }
  render() {
    const reviewList = this.props.reviews.map((review, index) => {
      return <ReviewEntry key={index.toString()} rev={review} />;
    });
    const noItems = (<div><h1>No reviews were found.</h1></div>);
    return (
      <div id={styles.reviewContainer}>
        {reviewList.length === 0 ? noItems : reviewList}
      </div>
    );
  }
}

export default ReviewList;