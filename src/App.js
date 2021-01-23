import './App.css';
import MyComponent from './MyComponent';
import React, { Component } from 'react';

class App extends Component{
  render(){
    return(
      <MyComponent  age = {25}/>
    )
  }
}

export default App;
