import "./App.css";
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation, useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import Cards from "./components/Cards";
import Nav from './components/Nav';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from "./components/Favorites.jsx";
import Home from "./components/Home.jsx"



function App() {
  const [characters, setCharacters] = useState([]);
 
  const navigate = useNavigate();
const [access, setAccess] = useState(false);
const [errorApi, seterrorApi] = React.useState(false);
const EMAIL = 'ejemplo@gmail.com';
const PASSWORD = 'unaPassword';

function logout() {
  setAccess(false);
}

const login = (userData) => {
  if (userData.password === PASSWORD && userData.email === EMAIL) {
    setAccess(true);
    navigate('/home');
  }
};
useEffect(() => {
  if (!access) {
    navigate('/');
  }
}, [access, navigate]);

async function onSearch(dato) {
  try {
    const backRequest = await axios(
      `http://localhost:3001/character/${dato}`
    );
    if (backRequest.data.name) {
      seterrorApi(false);
      setCharacters((oldChars) => [...oldChars, backRequest.data]);
    } else {
      seterrorApi(true);
    }
  } catch (error) {
    seterrorApi(true);
  }
}

  const onClose = (id) => {
    const parsedId = parseInt(id);
    const charactersFiltered = characters.filter((character) => character.id !== parsedId);
    setCharacters(charactersFiltered);
  };
  const location= useLocation();
  
  return (
   
      <div className='App'>
          {location.pathname !== "/" && <Nav onSearch={onSearch} out={logout} />}
      <Routes>
        <Route
          path="/home"
          element={
            !errorApi ? (
              <Home characters={characters} onClose={onClose} />
            ) : (
              <h1>Componente de error 404</h1>
            )
          }
        />
        <Route path="/" element={<Form Login={login} />} className="my-route" />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/about" element={<About />} />
      <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
       
      </div>
    
  );
}

export default App;