import React from "react";
import { API_URL, API_KEY_3 } from "../../api";
import Tabs from "../Tabs/Tabs";
import Item from "../Item/Item";

import "../App/App.scss";

import Arrow from "../../utils/download.svg";

//UI = fn(state, props)

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      moviesWillWatch: [],
      sort_by: "revenue.desc",
    };
  }
  componentDidMount() {
    this.getMovies();
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("prev", prevProps, prevState);
    // console.log("this", this.props, this.state);

    if (prevState.sort_by !== this.state.sort_by) {
      console.log("call api");
      this.getMovies();
    }
  }

  getMovies = () => {
    fetch(
      `${API_URL}/discover/movie?api_key=${API_KEY_3}&sort_by=${this.state.sort_by}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        this.setState({
          movies: data.results,
        });
      });
  };

  removeMovie = (movie) => {
    const updateMovies = this.state.movies.filter(function (item) {
      return item.id !== movie.id;
    });
    console.log(updateMovies);
    console.log("updateMovie", this.state.moviesWillWatch.length);
    this.setState({
      movies: updateMovies,
    });
  };

  addMovieToWillWatch = (movie) => {
    console.log(movie);

    const updateMoviesWillWatch = [...this.state.moviesWillWatch, movie];

    this.setState({
      moviesWillWatch: updateMoviesWillWatch,
    });

    // console.log("new", updateMoviesWillWatch[0].title);
  };

  removeMovieFromWillWatch = (movie) => {
    const updateMoviesWillWatch = this.state.moviesWillWatch.filter(function (
      item
    ) {
      return item.id !== movie.id;
    });

    this.setState({
      moviesWillWatch: updateMoviesWillWatch,
    });
  };

  updateSortBy = (value) => {
    this.setState({
      sort_by: value,
    });
  };

  render() {
    return (
      <div className="container">
        <Tabs
          sort_by={this.state.sort_by}
          updateSortBy={this.updateSortBy}
          addMovieToWillWatch={this.addMovieToWillWatch}
          removeMovieFromWillWatch={this.removeMovieFromWillWatch}
        />
        {this.state.movies.map((movie) => {
          return (
            <div className="" key={movie.id}>
              <Item
                movie={movie}
                removeMovie={this.removeMovie}
                addMovieToWillWatch={this.addMovieToWillWatch}
                removeMovieFromWillWatch={this.removeMovieFromWillWatch}
              />
            </div>
          );
        })}
        <div className="willWatch">
          <p>Will Watch: {this.state.moviesWillWatch.length}</p>
          <img src={Arrow} alt="Click here" className="arrow"></img>
            <div className="list">
              {this.state.moviesWillWatch.map((movie) => {
                return (
                  <div className="new" key={movie.title}>
                    <div className="new__list">{movie.title}</div>
                    {console.log(movie.title)}
                  </div>
                );
              })}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
