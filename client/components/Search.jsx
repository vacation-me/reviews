import React from 'react';
import $ from 'jquery';
import styles from './styles/SearchStyle.css';
import emptyStar from './styles/icons/star-clear.svg';
import halfStar from './styles/icons/star-half.svg';
import fullStar from './styles/icons/star.svg';
import magnifyingGlass from './styles/icons/search.svg';


class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }  

  // this function should be a utility function as it is duplicated in AggregatedReviews
  renderStars(rating) {
    let outputArray = [];
    let numStars = 0;
    // this loop renders all initial full stars
    while (rating / 1 > 1) {
      outputArray.push(<img key={numStars.toString()}className={styles.star} src={fullStar} />);
      rating -= 1;
      numStars += 1;
    }
    // this conditional chain renders either an empty, half, or full start depending on decimal
    if (rating > 0.75) {
      outputArray.push(<img key={numStars.toString()} className={styles.star} src={fullStar} />);
      numStars += 1;
    } else if (rating > 0.25) {
      outputArray.push(<img key={numStars.toString()} className={styles.star} src={halfStar} />);
      numStars += 1;
    } else {
      outputArray.push(<img key={numStars.toString()} className={styles.star} src={emptyStar} />);
      numStars += 1;
    }
    // this renders remaining empty stars when necessary
    while (numStars < 5) {
      outputArray.push(<img key={numStars.toString()} className={styles.star} src={emptyStar} />);
      numStars += 1;
    }
    return outputArray;
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.searchSubmit(this.state.value);
  }

  // continuosly updates the value of the input box
  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div id={styles.searchContainer}>
        <div id={styles.reviewCount}>
          {this.props.numReviews} {(this.props.numReviews === 1) ? 'Review' : 'Reviews'}
        </div>
        <div id={styles.overallScore} className={styles.starSet}>
          {this.renderStars(this.props.ratings.overall)}
        </div>
        <div id={styles.barContainer}>
          {/* highlight box is added so both icon and input are highlighted when input is in focus */}
          <div id={styles.highlightBox}>
            <div id={styles.iconContainer}>
              <img id={styles.searchIcon} src={magnifyingGlass} />
            </div>
            <form id={styles.searchForm} onSubmit={this.handleSubmit}>
              <input id={styles.searchBar} type="text" value={this.state.value} placeholder="Search reviews" onChange={this.handleChange}/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;