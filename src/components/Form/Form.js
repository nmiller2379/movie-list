import React, { useState } from "react";
import Button from "../Button/Button";

export default function Form({ onClick }) {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    setFormData({ ...formData, id:Date.now(), [event.target.name]: event.target.value, isWatched: false });
  };

  return (
    <>
      <form>
        <label htmlFor="movie">Enter a movie:</label>
        <input onChange={handleChange} type="text" id="movie" name="movie" />
        <label htmlFor="genre">Enter the genre:</label>
        <input onChange={handleChange} type="text" id="genre" name="genre" />
        <label htmlFor="rating">Enter the rating:</label>
        <input onChange={handleChange} type="text" id="rating" name="rating" />
      </form>
      <Button text={"Submit"} onClick={() => onClick(formData)} />
    </>
  );
}
