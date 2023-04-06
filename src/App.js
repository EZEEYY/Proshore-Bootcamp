import './App.css';
import React from 'react';
import Data from './components/first';
import Third from './components/third';
import { Link, Route,Routes } from 'react-router-dom';
import Home from './Home';
import DarkMode from './components/DarkMode';
import { useGlobalContext } from './Data';
function App() {
  const {mode,modeup,Mode} = useGlobalContext()
  return (
    <div className={`${mode?'darkmode':'lightmode'}`}> 
      <ul>
          <li>
              <Link to='/'>Home</Link>
            <li>
              <Link to='/first'>first</Link>
            </li>
            <li>
              <Link to='/third'>third</Link>
            </li>
          <DarkMode/>
        </li>
      </ul>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/first' element={<Data/>}></Route>
        <Route path='/third' element={<Third/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
