import React from "react";
import Header from "../../components/Header/Header";
import Form from "../../components/Form/Form";
import Button from "../../components/Button/Button";

export default function FormPage({ onClick, movieAdded, addMovie }) {
  return (
    <div>
      <Header title={"Add a movie"} />
      <Form onClick={onClick} />
      {movieAdded && (
        <div>
          <p>Movie added!</p>
          <Button onClick={addMovie} text="See movies"  />
        </div>
      )}
    </div>
  );
}
