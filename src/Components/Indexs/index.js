import { Component } from 'react';
// import './App.css';
import About from "./../About/index";
import Footer from "./../Footer/index";
import Home from "./../Home/index";
import Portifolio from "./../Portfolio/index";
import Profile from "./../Profile/index";
import SocialMedia from "./../SocialMedia/index";
import Work from "./../Work/index";

class Index extends Component{
  render(){
    return (
      <div className="App">
        <header className="App-header">
         <Home/>
         <Work/>
         <Portifolio/>
         <Profile/>
         <About/>
         <SocialMedia/>
         <Footer/>
        </header>
      </div>
    );
  }
}

export default Index;

