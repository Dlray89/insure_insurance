import React from 'react'
import Navbar from './Components/Nav-folder/Nav'
import Header from './Components/header-folder/header'
import Body from './Components/Body Content/body'
import Footer from './Components/Footer/footer'
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar  />
      <Header  />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
