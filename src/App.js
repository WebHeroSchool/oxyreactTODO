import React from 'react';
import logo from './logo.svg';
import './App.css';

const count1 = 17;
const variable = 'samething';
const count2 = 10;
const undf = undefined;
const zero = null;
const fake = false;
const trufhful = true;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style={{
          color:'green',
          fontSize:60
        }}>
        Hello World!
        </p>
        <p>
        {variable}
        </p>
        <p>
        {count1}
        </p>
        <p>
        {count1 *  count2}
        </p>
        <p>
        {undf,zero,fake,trufhful}
        </p>
        <p>
        {count1&&count2}
        </p>
        <p>
        {count1<count2?'count1':'count2'}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
