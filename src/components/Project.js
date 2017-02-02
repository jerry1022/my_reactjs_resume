import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Button, Modal} from 'react-bootstrap';
import {closeCompanyProjects} from '../actions/action-company';
import {listProject} from '../actions/action-project';
import ProjectDetail from './ProjectDetail';

class Project extends Component {
  projectList() {
     if (this.props.experience === null) {
      return (
        <h2>please click company ...</h2>
      );
    }
    return this.props.experience.project.map((project) => {
      return <Button bsStyle='primary' onClick={()=>this.props.listProject(project)}
        	 key={project.id}
             >
		{project.name}
             </Button>
      }
    );
  }
  render() {
    var companyName = '';
    var showProjects = false;
    if (this.props.experience !== null) {
        companyName = this.props.experience.company;
        showProjects = this.props.experience.showProjects;
    }
    return (
      <div>
      <Modal show={showProjects} bsSize="large" aria-labelledby="contained-modal-title-lg" onHide={()=>this.props.closeCompanyProjects()}>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">{companyName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h1>Project</h1>
          {this.projectList()}
          <ProjectDetail /> 
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>this.props.closeCompanyProjects()}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    experience: state.company
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    closeCompanyProjects: closeCompanyProjects,
    listProject: listProject
    }, dispatch);
} 

export default connect(mapStateToProps, matchDispatchToProps)(Project);
