import React, { Component } from 'react';
import '../App.css';
import SearchForm from './SearchForm';
import FlightList from './FlightList';
import { Wrapper } from '../styles/WrapperStyle';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <SearchForm />
        <FlightList />
      </Wrapper>
    );
  }
}

export default App;
