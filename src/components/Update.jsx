import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Update.css';

function Update() {
  const [id, setId] = useState("");
  const [movie, setMovie] = useState(null);
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");
  const navigate = useNavigate();

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
        alert("ID entered wasn't found!");
      });
  }

  function handleSubmit(e){
    e.preventDefault();
    axios.put(`https://6719816c7fc4c5ff8f4d9f11.mockapi.io/movies/${id}`, {
      name,
      genre,
      date: `${year}-01-01`,
      image,
    }).then(() => {
      navigate("/");
    }).catch((err) => {
      console.error(err);
    });
  }

  let updateForm = null;
  if (movie != null) {
    updateForm = (
      <form className="search" onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />

        <label>Genre:</label>
        <input type="text" 
          value={genre} 
          onChange={(e) => setGenre(e.target.value)} 
          required 
        />

        <label>Year:</label>
        <input type="number" 
          value={year} 
          onChange={(e) => setYear(e.target.value)} 
          required 
        />

        <label>Image URL (optional):</label>
        <input type="text" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
        />

        <button type="submit">Update Movie</button>
      </form>
    );
  }

  return (
    <div className="update-page">
      <form className="search" onSubmit={handleSearch}>
        <h2>Update Movie</h2>
        <label>Enter Movie ID:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>

      {updateForm}

    </div>
  );
}

export default Update;
