import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
class SearchableMovieReviewsContainer extends Component{

  constructor(){
    super();
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  componentDidMount(search){
    const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
    const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${search}`
                + `api-key=${NYT_API_KEY}`;
   fetch(URL)
    .then(res => res.json())
    .then(json => this.setState({
      reviews: json.results
    }))
  }

  render(){
    return(
      <div className="searchable-movie-reviews">
      <MovieReviews reviews={this.state.results}/>
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer;
