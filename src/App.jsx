import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Create from './components/Create';
import Update from './components/Update';
import Read from './components/Read';
import Delete from './components/Delete';

function App() {

  return (
    <BrowserRouter>
      <div>
        <h1>Movies Catalogue</h1>
        <ul>
          <li><Link to='/'>HOME</Link></li>
          <li><Link to='/create'>CREATE</Link></li>
          <li><Link to='/update'>UPDATE</Link></li>
          <li><Link to='/read'>READ</Link></li>
          <li><Link to='/delete'>DELETE</Link></li>
        </ul>
      </div>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/update' element={<Update />}></Route>
        <Route path='/read' element={<Read />}></Route>
        <Route path='/delete' element={<Delete />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
