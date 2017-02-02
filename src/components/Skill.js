import React, { Component } from 'react';
import {connect} from 'react-redux';
import {ButtonToolbar, Button} from 'react-bootstrap';


class Skill extends Component {
  level(score) {
    switch (score) {
      case 1:
        return 'danger';
        break;
      case 2:
        return 'warning';
        break;
      case 3:
        return 'info';
        break;
      case 4:
        return 'success';
        break;
      case 5:
        return 'primary';
        break;
      default: 
        return '';
     }
  }
  program() {
     return this.props.skills.program.map((program)=>{
       return (<Button bsStyle={this.level(program.level)}> {program.name}</Button>);
     });
  }
  framework() {
       return this.props.skills.framework.map((framework)=>{
         return (<Button bsStyle={this.level(framework.level)}> {framework.name}</Button>);
     });
  }
  db() {
       return this.props.skills.db.map((db)=>{
        return (<Button bsStyle={this.level(db.level)}> {db.name}</Button>);
     });
  }
  web() {
       return this.props.skills.web.map((web)=>{
        return (<Button bsStyle={this.level(web.level)}> {web.name}</Button>);
     });
  }
  render() {
    return (
      <div>
        <h1>Skills</h1>
	<h2>Program Language: <br />
            <ButtonToolbar>
            {this.program()}
            </ButtonToolbar>
        </h2>
	<h2>Framework: <br /> 
            <ButtonToolbar>
            {this.framework()}
            </ButtonToolbar>
        </h2>
	<h2>DataBase: <br />
            <ButtonToolbar>
            {this.db()}
            </ButtonToolbar>
        </h2>
      	<h2>Web: <br />
            <ButtonToolbar>
            {this.web()}
            </ButtonToolbar>
        </h2>
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
