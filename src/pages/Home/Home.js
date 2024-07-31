import React from "react";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/form");
  };
  return (
    <div>
      <Header title={"My Movie Menu"} />
      <p>
        Welcome to the home page. This site gives you the chance to keep track
        of movies you'd like to watch. You can enter a movie, see your list of
        movies, mark movies as watched, and delete movies from your list.
      </p>
      <Button text={"Get started"} onClick={handleClick} />
    </div>
  );
}
