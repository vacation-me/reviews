import React from 'react';
import $ from 'jquery';
import './styles/SearchStyle.css';
import emptyStar from './styles/icons/star-clear.svg';
import halfStar from './styles/icons/star-half.svg';
import fullStar from './styles/icons/star.svg';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'Search reviews'};
  }  

  renderStars(rating, outerDiv) {
    // don't add stars on re-render if they already exist
    if ($(outerDiv).children().length !== 0) {
      return;
    }
    // numStars is used to ensure that 5 stars are always rendered
    let numStars = 0;
    // this loop renders all initial full stars
    while (rating / 1 >= 1) {
      $(outerDiv).append(`<img class="star" src=${fullStar} />`);
      rating -= 1;
      numStars += 1;
    }
    // this loop renders either an empty, half, or full start depending on decimal
    while (rating !== 0) {
      if (rating > 0.75) {
        $(outerDiv).append(`<img class="star" src=${fullStar} />`);
        rating = 0;
        numStars += 1;
      } else if (rating > 0.25) {
        $(outerDiv).append(`<img class="star" src=${halfStar} />`);
        rating = 0;
        numStars += 1;
      } else {
        $(outerDiv).append(`<img class="star" src=${emptyStar} />`);
        rating = 0;
        numStars += 1;
      }
    }
    // this renders remaining empty stars when necessary
    while (numStars !== 5) {
      $(outerDiv).append(`<img class="star" src=${emptyStar} />`);
      numStars += 1;
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div id="searchContainer">
        <div id="reviewCount">
          {this.props.numReviews} {(this.props.numReviews === 1) ? 'Review' : 'Reviews'}
        </div>
        <div id="overallScore" className="starSet">
          {this.renderStars(this.props.ratings.overall, '#overallScore')}
        </div>
        <form id="searchForm" onSubmit={this.props.handleSubmit(this.state.value)}>
          <input id="searchBar" type="text" value={this.state.value} onChange={this.handleChange}/>
        </form>
      </div>
    );
  }
}

export default Search;