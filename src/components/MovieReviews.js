import React, { Component } from 'react';

class MovieReviews extends Component{

  makeMovies() {
    let movieTitles = this.props.reviews.map(review => <li className="review">{review.display_title}</li>)
    return movieTitles
  }

  

  render(){
    return(
      <div className="review-list">
        <ul>
          {this.makeMovies()}
        </ul>
      </div>
    )

  }

}

export default MovieReviews;
