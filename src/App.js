import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/sub/Navbar';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="App">
    <Routes>
        <Route exact path='/' element={< Home />}></Route>
        <Route exact path='/login' element={< Login />}></Route>
      </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
