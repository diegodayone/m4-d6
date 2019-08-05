import React from 'react';
import './App.css';
import MovieLibrary from './components/MovieLibrary';
import MovieDetails from './components/MovieDetails';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = { movies: [], selectedMovie: null }
  }

  render() {
    return (
      <div>

        {this.state.movies &&
          <MovieLibrary movies={this.state.movies} onMovieClicked={(imdbID) => this.setState({ selectedMovie: imdbID })} />
        }

        {this.state.selectedMovie &&
          <MovieDetails imdbID={this.state.selectedMovie} />}
      </div>
    );
  }


  componentDidMount = async () => {
    var result = await fetch("http://www.omdbapi.com/?apikey=24ad60e9&s=harry%20potter");
    var json = await result.json();

    this.setState({
      movies: json.Search
    });
  }
}

export default App;
