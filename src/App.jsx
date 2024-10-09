import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home';
import Navbar from './component/Navbar';
import View from './component/View';
import "./App.css";

const App = () => {
    const url = "http://www.omdbapi.com/?apikey=15983b1e&";
  return (
    
    <Router>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/view/:id' element={<View/>}></Route>
        </Routes>
    </Router>
    
  )
}

export default App;
