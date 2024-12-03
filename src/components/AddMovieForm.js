import React, { useState } from "react";

export default function AddMovieForm({ onAddMovie }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    // TODO: write code to handle form submission
    event.preventDefault();

    if (title.trim()) {
      onAddMovie({ title: title, watched: false });
      setTitle("");
    }
  };

  // TODO: add a form to add a new movie
  return(
    <form onSubmit = {handleSubmit}>

      <input 
      value={title}
      type="text"
      placeholder="Movie Title"
      onChange={(event) => setTitle(event.target.value)}
      />

      <button type="submit">Add Movie</button>
    </form>
  );
}