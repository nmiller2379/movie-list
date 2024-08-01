import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Display from "./pages/Display/Display";
import Error from "./pages/Error/Error";
import Form from "./pages/Form/Form";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [movieAdded, setMovieAdded] = useState(false);

  const handleClick = (movie) => {
    setMovies([...movies, movie]);
    setMovieAdded(true);
  };

  const deleteMovie = (id) => {
    const updatedMovies = movies.filter((movie) => movie.id !== id);
    setMovies(updatedMovies);
  };

  const handleAddMovie = () => {
    setMovieAdded(false);
    navigate("/movies");
  };

  const markAsWatched = (id) => {
    const updatedMovies = movies.map((movie) => {
      if (movie.id === id) {
        return { ...movie, isWatched: true };
      }
      return movie;
    });
    setMovies(updatedMovies);
    console.log(updatedMovies);
  };

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/movies"
          element={
            <Display
              movies={movies}
              markAsWatched={markAsWatched}
              deleteMovie={deleteMovie}
            />
          }
        />
        <Route
          path="/form"
          element={
            <Form
              onClick={handleClick}
              setMovies={setMovies}
              addMovie={handleAddMovie}
              movieAdded={movieAdded}
            />
          }
        />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
