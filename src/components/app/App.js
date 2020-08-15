import React, { Component } from 'react';
import BusinessList from '../businessList/BusinessList'
import SearchBar from '../searchBar/SearchBar'
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar/>
        <BusinessList/>
      </div>
    );
  }
}

export default App;
