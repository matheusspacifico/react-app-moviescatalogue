import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './styles/Delete.css';

function Delete() {
  const [id, setId] = useState("");

  const navigate = useNavigate();

  function handleDelete(e){
    e.preventDefault();

    axios.delete(`https://6719816c7fc4c5ff8f4d9f11.mockapi.io/movies/${id}`)
      .then(() => {
        navigate("/");
      }).catch((err) => {
        console.error(err);
        alert("ID entered was not found!");
      });
  }

  return (
    <div className="delete-page">
      <form className="modern-form" onSubmit={handleDelete}>
        <h2>Delete Movie</h2>
        <label>Enter Movie ID:</label>
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
          required
        />
        <button type="submit">Delete Movie</button>
      </form>
    </div>
  );
}

export default Delete;