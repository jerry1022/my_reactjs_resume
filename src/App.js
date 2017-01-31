import React, { Component } from 'react';
import Profile from './components/Profile';
import Education from './components/Education';
import Experience from './components/Experience';
import Project from './components/Project';
import ProjectDetail from './components/ProjectDetail';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Profile />
        <hr />
        <Education />
        <Experience />
        <hr />
        <Project />
        <hr />
        <ProjectDetail />
      </div>
    );
  }
}

export default App;
