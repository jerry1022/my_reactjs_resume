import React, { Component } from 'react';
import {connect} from 'react-redux';

class Skill extends Component {
  program() {
     return this.props.skills.program.map((program)=>{
       return (<h4>{program}</h4>);
     });
  }
  framework() {
       return this.props.skills.framework.map((framework)=>{
         return (<h4>{framework}</h4>);
     });
  }
  db() {
       return this.props.skills.db.map((db)=>{
        return (<h4>{db}</h4>);
     });
  }

  render() {
    return (
      <div>
        <h1>Skills</h1>
	<h2>Program Language: <br />
            {this.program()}
        </h2>
	<h2>Framework: <br /> 
            {this.framework()}</h2>
	<h2>DataBase: <br />
            {this.db()}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    skills: state.skill
  };
}

export default connect(mapStateToProps)(Skill);
