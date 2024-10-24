import axios from "axios";
import { useEffect, useState } from "react";

function Home() {

  useEffect( () => {
    axios.get('https://6719816c7fc4c5ff8f4d9f11.mockapi.io/movies')
      .then( res => setData(res.data) )
      .catch( err => console.log(err) );
  }, [] );

  const [data, setData] = useState([]);

  return (
    <div>

      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Genre</th>
              <th>Year</th>
              <th>Cover</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((e, i) => (
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.genre}</td>
                  <td>{e.date.substr(0, 4)}</td>
                  <td><img src={e.image}></img></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default Home;