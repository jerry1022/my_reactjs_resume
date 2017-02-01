import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';

class Education extends Component {
  listSchool() {
     return this.props.educations.map((education) => {
       return (
            <div>
            <Grid className='show-grid'>
               <Row>
	           <Col xs={2} md={2} lg={2}>
	    		<h2>School:</h2>
                   </Col>
                   <Col xsHidden md={6} lg={6}>
                        <h2>{education.school}</h2>
                   </Col>
               </Row>
	       <Row>
	           <Col xs={2} md={2} lg={2}>
	    		<h2>Major:</h2>
                   </Col>
                   <Col xsHidden md={6} lg={6}>
                        <h2>{education.major}</h2>
                   </Col>
               </Row>
 	       <Row>
	           <Col xs={2} md={2} lg={2}>
	    		<h2>Period:</h2>
                   </Col>
                   <Col xsHidden md={6} lg={6}>
                        <h2>{education.period}</h2>
                   </Col>
               </Row>
               <Row>
	           <Col xs={2} md={2} lg={2}>
	    		<h2>Link:</h2>
                   </Col>
                   <Col xsHidden md={6} lg={6}>
                        <a href={education.link}><h2>{education.link}</h2></a>
                   </Col>
               </Row>
            </Grid>
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
