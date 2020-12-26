import { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Contact from './Components/Contact';
// import './App.css';
import Index from './Components/Indexs';
import Navbar from "./Components/NavBar/index";

class App extends Component{
  render(){
    return (
      <BrowserRouter className="App">
        <Navbar/>
          <Route exact path="/" component={Index}/>
          <Route path="/contact" component={Contact} />
      </BrowserRouter>
    );
  }
}

export default App;

