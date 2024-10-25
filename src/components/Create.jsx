import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './styles/Create.css';

function Create() {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  function handleCreate(e){
    e.preventDefault();

    axios.post(`https://6719816c7fc4c5ff8f4d9f11.mockapi.io/movies`, {
      name,
      genre,
      date: `${year}-01-01`,
      image,
    }).then(() => {
      navigate("/");
    }).catch((err) => {
      console.error(err);
      alert("An error has occurred while creating! Movie was not created.");
    });
  }

  return (
    <div className="create-page">

      <form className="modern-form" onSubmit={handleCreate}>
        <h2>Create Movie</h2>
        <label>Name:</label>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label>Genre:</label>
        <input
          type="text"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />

        <label>Year:</label>
        <input 
          type="number"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />

        <label>Image URL (optional):</label>
        <input 
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button type="submit">Create Movie</button>

      </form>


    </div>
  );
}

export default Create;