import { React, useState, useEffect } from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <Header></Header>
          <Main></Main>
        </div>
      </div>
    </div>
  );
}

export default App;
