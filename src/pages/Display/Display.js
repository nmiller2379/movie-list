import React from "react";
import Header from "../../components/Header/Header";
import "./Display.css";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function Display({ movies, markAsWatched, deleteMovie }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/form");
  };

  return (
    <div>
      <Header title={"Movies"} />
      <ul>
        {movies.map((movie) => (
          <div
            className="movie-list"
            id={movie.isWatched ? "watched-movie" : null}
          >
            <li key={movie.id}>
              <div className="movie-item">
                <span>Name:</span> {movie.movie}
              </div>
              <div className="movie-item">
                <span>Genre:</span> {movie.genre}
              </div>
              <div className="movie-item">
                <span>Rating:</span> {movie.rating}
              </div>
              <div className="movie-item">
                <span>ID:</span> {movie.id}
              </div>
            </li>
            <Button
              text={"Mark as watched"}
              onClick={() => markAsWatched(movie.id)}
            />
            <Button text={"Delete"} onClick={() => deleteMovie(movie.id)} />
            <hr />
          </div>
        ))}
      </ul>
      <Button text={"Add a movie"} onClick={handleClick} />
    </div>
  );
}
