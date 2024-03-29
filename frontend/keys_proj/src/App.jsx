import { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import { api } from './utilities';

function App() {
  const [likes, setLikes] = useState([])
  const [dislikes, setDislikes] = useState([])
  const [user, setUser] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [house_id, setHouse_id] = useState(null)

  const getInfo = async() => {
    let token = localStorage.getItem("token")
    if (token){
      api.defaults.headers.common["Authorization"] = `Token ${token}`
      let response = await api.get("/users")
      setUser(response.data.user)
      setIsLoggedIn(true)
    }
  }

  useEffect(() => {
    getInfo()
  },[])

  const logout = async() => {
    let response = await api.post("users/logout/")
    if (response.status === 204){
        setUser(null)
        localStorage.removeItem("token")
        delete api.defaults.headers.common["Authorization"];
        setIsLoggedIn(false)
    }
  }

  return (
    <>
      <NavBar user={user} isLoggedIn={isLoggedIn} logout={logout}/>
      <Outlet context={{likes, setLikes, dislikes, setDislikes, user, setUser, isLoggedIn, setIsLoggedIn, setHouse_id, house_id}}/>
    </>
  )
}

export default App
