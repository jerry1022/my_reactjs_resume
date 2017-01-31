import React, { Component } from 'react';
import {bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {selectCompany} from '../actions/action-company';


class Experience extends Component {
  experienceList() {
	return this.props.experiences.map((experience) => { 
            return(
            <div>
	      <img src={experience.icon} onClick={()=>this.props.selectCompany(experience)}/>
              <h2 onClick={()=>this.props.selectCompany(experience)} 
                  key={experience.id} 
              >
                  Company: {experience.company}
              </h2>
            </div>
            );
          })
  }

  render() {
    return (
      <div>
          <h1>Experiences</h1>
          {this.experienceList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    experiences: state.experience
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
      selectCompany: selectCompany
    }, dispatch); 
}
export default connect(mapStateToProps, matchDispatchToProps)(Experience);
