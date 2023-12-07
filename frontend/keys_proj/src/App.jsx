import { useState, useContext } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import { api } from './utilities';

function App() {

  const [likes, setLikes] = useState([])
  const [dislikes, setDislikes] = useState([])
  
  const token = localStorage.getItem("token");
    if(token) {
      api.defaults.headers.common["Authorization"] = `Token ${token}`
      console.log(`axios request authorization header set to: ${api.defaults.headers.common["Authorization"]}`);
    };

  return (
    <>
      <NavBar/>
      <Outlet context={{likes, setLikes, dislikes, setDislikes}}/>
    </>
  )
}

export default App
