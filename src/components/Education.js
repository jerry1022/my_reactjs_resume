import React, { Component } from 'react';
import {connect} from 'react-redux';

class Education extends Component {
  listSchool() {
     return this.props.educations.map((education) => {
       return (
            <div>
	    <h2>School: {education.school}</h2>
	    <h2>Major: {education.major}</h2>
	    <h2>Period: {education.period}</h2>
            <h2>Link: <a href={education.link}>{education.link}</a></h2>
            <hr/>
            </div>
       );
     });
  }

  render() {
    return (
      <div> 
        {this.listSchool()} 
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    educations: state.education
  };
}

export default connect(mapStateToProps)(Education);
