import React from 'react';
import './App.css';


import Header from "./components/Header";
import Nav from "./components/Navbar";
import Profile from "./components/Profile";

const App = () => {
  return (
      <div className="app-wrapper">
        <Header/>
        <div className='con'>
          <Nav/>
          <Profile />

        </div>
      </div>
  );
}

export default App;
