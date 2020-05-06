import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Homepage from './component/Homepage';
import Extraact from './component/Extraact';
import Resume from './component/Resume';

class App extends Component {
  render() {
    const resume = () => <h1>resume</h1>;
    return (
      <div>
        <Header />
        <Route exact path="/" component={Homepage} />
        <Route path="/extraactivities" component={Extraact} />
        <Route exact path="/resume" component={Resume} />
      </div>
    );
  }
}

export default App;
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <p>
//         Edit <code>src/App.js</code> and save to reload.
//       </p>
//       <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         Learn React
//       </a>
//     </header>
//   </div>
// );
