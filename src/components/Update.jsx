import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './styles/Update.css';

function Update() {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [image, setImage] = useState("");

  const [movie, setMovie] = useState(null);
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
        alert("ID entered was not found!");
      });
  }

  function handleUpdate(e){
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
      alert("An error has occurred while updating! Changes were not made.")
    });
  }

  let updateForm = null;
  if (movie != null) {
    updateForm = (
      <form className="modern-form" onSubmit={handleUpdate}>
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

        <button type="submit">Update Movie</button>
      </form>
    );
  }

  return (
    <div className="update-page">
      <form className="modern-form" onSubmit={handleSearch}>
        <h2>Update Movie</h2>
        <label>Enter Movie ID:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <button type="submit">Update Movie</button>
      </form>

      {updateForm}

    </div>
  );
}

export default Update;
