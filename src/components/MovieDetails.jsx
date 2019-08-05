import React from "react";
import Comments from "./Comments";

class MovieDetails extends React.Component {
  constructor(props) {
    super(props);

    this.state = { movie: null, comments: [] };
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          {!this.state.movie && <h1>Loading</h1>}
          {this.state.movie && (
            <>
              <div className="col-md-4">
                <img src={this.state.movie.Poster} className="img-fluid" />
              </div>
              <div className="col-md-8">{this.state.movie.Plot}</div>
              <div className="col-md-12">
                <Comments comments={this.state.comments} />
              </div>
            </>
          )}
        </div>
      </div>
    );
  }

  componentDidMount = async () => {
    await this.fetchMovieDetailsAndComments(this.props.imdbID);
  };

  componentDidUpdate = async prevProps => {
    if (prevProps.imdbID !== this.props.imdbID) {
      await this.fetchMovieDetailsAndComments(this.props.imdbID);
    }
  };

  fetchMovieDetailsAndComments = async id => {
    var response = await fetch("http://www.omdbapi.com/?apikey=24ad60e9&i=" + id);
    var movie = await response.json();

    var commentResp = await fetch("https://strive-school-testing-apis.herokuapp.com/api/comments/" + id, {
      headers: {
        Authorization: "Basic YWRtaW46c3VwZXJzZWNyZXQ="
      }
    });
    var comments = await commentResp.json();

    this.setState({ movie: movie, comments: comments });
  };
}

export default MovieDetails;
