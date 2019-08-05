import React from "react";

class MovieLibrary extends React.Component {
  state = {};
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.props.movies &&
            this.props.movies.map((movie, index) => (
              <div key={index} className="col-md-3">
                <img src={movie.Poster} className="img-fluid" onClick={() => this.props.onMovieClicked(movie.imdbID)} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default MovieLibrary;
