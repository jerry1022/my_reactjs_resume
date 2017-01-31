import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {listProject} from '../actions/action-project';


class Project extends Component {
  projectList() {
     if (this.props.projects === null) {
      return (
        <h2>please click company ...</h2>
      );
    }
    return this.props.projects.map((project) => {
      return <h2 onClick={()=>this.props.listProject(project)}
        	 key={project.id}
             >
		project: {project.name}
             </h2>
      }
    );
  }

  render() {
    return (
      <div>
          {this.projectList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    projects: state.company
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    listProject: listProject
    }, dispatch);
} 

export default connect(mapStateToProps, matchDispatchToProps)(Project);
