import React, { useState } from 'react';

import './App.css';
import Footer from './components/Footer/'
import Header from './components/Header/';
import Main from './components/Main/';

import {BrowserRouter} from 'react-router-dom';
import {userContext} from './context/userContext'

function App() {
  const [user, setUser] = useState({name:""});
  const login = (name) => setUser({name});
  const logout = () => setUser({name:""});

  const funciones = {
    user,
    login,
    logout
  }

  return (
    <div className="App">
      <BrowserRouter>
        <userContext.Provider value={funciones}>
          <Header />
          <Main />
        </userContext.Provider>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
