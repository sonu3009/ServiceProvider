import React from 'react';
import logo from './logo.svg';
import './App.css';
import Commonheader from './commonheader';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      APP Component is calling <br/>
        <p>Common header calling
          {/* <Commonheader /> */}
        </p>

      </header>
    </div>
  );
}

export default App;
