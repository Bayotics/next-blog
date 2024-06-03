import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import NavAnnoucement from './components/NavAnnouncement';
import HomePage from './pages/HomePage';
import SigninScreen from './pages/Signin';
import SignupScreen from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <div className='main'>
        <header>
          <NavAnnoucement />
          <Nav />
        </header>
        <main>
          <div className='main-content'>
            <Routes>
              <Route path='/' element = {<HomePage />} />
              <Route path="/signin" element={<SigninScreen />} />
              <Route path="/signup" element={<SignupScreen />} />
            </Routes>
          </div>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
