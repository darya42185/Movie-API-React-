import React from "react";

import "./Item.scss";

import close from "../../utils/close.svg";
import remove from "../../utils/delete.svg";
import add from "../../utils/add.svg";
import trash from "../../utils/trash.svg";
import expand from "../../utils/expand.svg";

class Item extends React.Component {
  constructor() {
    super();

    this.state = {
      willWatch: false,
      large: false,
    };
  }

  // componentWillUnmount() {
  //   console.log("unmount", this.props.data.title);
  // }
  closeImage = () => {};
  render() {
    const {
      movie,
      removeMovie,
      addMovieToWillWatch,
      removeMovieFromWillWatch,
    } = this.props;

    return (
      <div className="card">
        <img
          className="card-img-top"
          src={`https://image.tmdb.org/t/p/w500${
            movie.backdrop_path || movie.poster_path
          }`}
          alt=""
        />
        <div className="card-body">
          <h6 className="card-title">{movie.title}</h6>
          <p className="card-rating">Rating: {movie.vote_average}</p>
          <div className="functional">
            {this.state.willWatch === true ? (
              <div className="description">
                <img
                  src={remove}
                  alt="Remove from Will Watch"
                  className="icon"
                  onClick={() => {
                    this.setState({
                      willWatch: false,
                    });
                    removeMovieFromWillWatch(movie);
                  }}
                />
                <div className="description__value">
                  <h2>Remove from Will Watch</h2>
                </div>
              </div>
            ) : (
              <div className="description">
                <img
                  src={add}
                  alt="Add to Will Watch"
                  className="icon"
                  onClick={() => {
                    this.setState({
                      willWatch: true,
                    });
                    addMovieToWillWatch(movie);
                  }}
                />
                <div className="description__value">
                  <h2>Add to Will Watch</h2>
                </div>
              </div>
            )}
            <div className="description">
              <img
                src={trash}
                alt="Delete movie"
                className="icon"
                onClick={removeMovie.bind(null, movie)}
              />
              <div className="description__value">
                <h2>Delete film</h2>
              </div>
            </div>

            {this.state.large === true ? (
              <div className="large">
                <img
                  className="large__img"
                  src={`https://image.tmdb.org/t/p/w500${
                    movie.backdrop_path || movie.poster_path
                  }`}
                  alt=""
                />
                <div
                  onClick={() => {
                    this.setState({
                      large: false,
                    });
                  }}
                >
                  <img
                    className="large__container-close"
                    src={close}
                    alt="Close"
                  />
                </div>
              </div>
            ) : (
              <div className="description">
                <img
                  src={expand}
                  alt="Enlarge"
                  className="icon"
                  onClick={() => {
                    this.setState({
                      large: true,
                    });
                  }}
                />
                <div className="description__value">
                  <h2>Enlarge picture</h2>
                </div>
              </div>
            )}
          </div>
          {/* // */}
        </div>
      </div>
    );
  }
}

export default Item;
