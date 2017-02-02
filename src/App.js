import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import Profile from './components/Profile';
import Education from './components/Education';
import Skill from './components/Skill';
import Experience from './components/Experience';
import Project from './components/Project';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div className="App-header">
            <Image src='images/face.png' className="App-logo" alt="logo" circle />
            <h2>Welcome to Jerry Resume</h2>
          </div>
        </div>
        <Profile />
        <hr />
        <Education />
        <Skill />
        <hr />
        <Experience />
        <Project />
        <hr />
      </div>
    );
  }
}

export default App;
