import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react'
import Navbar from './components/navbar'

class App extends Component{
  render(){
    return (
      <div className="App">
        <Navbar/>
      </div>
    );
  }
}

export default App;
