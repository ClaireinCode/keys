import { useState, useContext } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {

  const [likes, setLikes] = useState([])
  const [dislikes, setDislikes] = useState([])
  

  return (
    <>
      <NavBar/>
      <Outlet context={{likes, setLikes, dislikes, setDislikes}}/>
    </>
  )
}

export default App
