import { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  

  return (
    <>
      <NavBar/>
      <h1>Hey all</h1>
      <Outlet/>

    </>
  )
}

export default App
