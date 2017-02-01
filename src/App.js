import React, { Component } from 'react';
import Profile from './components/Profile';
import Education from './components/Education';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Project from './components/Project';
import ProjectDetail from './components/ProjectDetail';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <img src='images/face.png' className="App-logo" alt="logo" />
            <h2>Welcome to Jerry Resume</h2>
          </div>
        </div>
        <Profile />
        <hr />
        <Education />
        <hr />
        <Skill />
        <hr />
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
