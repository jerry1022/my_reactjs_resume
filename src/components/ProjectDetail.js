import React, { Component } from 'react';
import {connect} from 'react-redux';


class ProjectDetail extends Component {
  render() {
    if (this.props.project === null) {
      return <h2>Select Project please ... </h2>
    }
    return (
      <div>
           <h2>Name: {this.props.project.name}</h2>
           <h2>Desc: {this.props.project.desc}</h2>
           <h2>Responsibility: {this.props.project.responsibility}</h2>
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
