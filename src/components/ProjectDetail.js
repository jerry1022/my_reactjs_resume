import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button} from 'react-bootstrap';


class ProjectDetail extends Component {
  listProjectSkills() {
     return this.props.project.skills.map((skill)=>{
       return (<Button bsStyle="success">{skill}</Button>);
     });
  }
  render() {
    if (this.props.project === null) {
      return <h2>Select Project please ... </h2>
    }
    return (
      <div>
           <h2>Name:</h2>
           <h3>{this.props.project.name}</h3>
           <h2>Desc:</h2>
           <h3>{this.props.project.desc}</h3>
           <h2>Responsibility:</h2> 
           <h3>{this.props.project.responsibility}</h3>
           <h2>Skills:</h2>
           {this.listProjectSkills()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    project: state.project
  };
}

export default connect(mapStateToProps)(ProjectDetail);
