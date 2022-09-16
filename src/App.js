import React from 'react'
import Navbar from "./components/Navbar";
import Search from './components/Search';
import CustomerType from './components/CustomerType';
import Home from './components/Home';


function App() {
  return (
    <div className="App">
       <Navbar/>
       <div className="container all_margin">
        <Search/>
        <CustomerType/>
        <Home/>
       </div>

    </div>
  );
}

export default App;
