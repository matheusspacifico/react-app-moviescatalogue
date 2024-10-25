import { useState } from "react";
import axios from "axios";
import './styles/Read.css';

function Read() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");

  const [movie, setMovie] = useState(null);

  function handleSearch(e){
    e.preventDefault();

    axios.get(`https://6719816c7fc4c5ff8f4d9f11.mockapi.io/movies/${id}`)
      .then((res) => {
        setMovie(res.data);
        setName(res.data.name);
        setGenre(res.data.genre);
        setYear(res.data.date.substr(0, 4));
        setImage(res.data.image);
      }).catch((err) => {
        console.error(err);
        alert("ID entered was not found!");
      });
  }

  let readMovie = null;
  if (movie != null) {
    readMovie = (
      <div className="movie-info">

        <img className="movie-image" src={image}></img>
        <div className="movie-text">
          <h1>{name} ({year})</h1>
          <h2>{genre}</h2>
        </div>
      </div>

    );
  }


  return (
    <div className="read-page">
      <form className="modern-form" onSubmit={handleSearch}>
        <h2>Read Movie</h2>
        <label>Enter Movie ID:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <button type="submit">Read Movie</button>
      </form>

      {readMovie}

    </div>
  );
}

export default Read;