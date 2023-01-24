import { React, useState, useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <div className="row">
          <Nav></Nav>
          <Main></Main>
        </div>
      </div>
    </div>
  );
}

export default App;
