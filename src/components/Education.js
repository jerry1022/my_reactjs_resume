import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col, Thumbnail} from 'react-bootstrap';

class Education extends Component {
  listSchool() {
     return this.props.educations.map((education) => {
       return (
               <Col xs={6} md={4}>
                 <Thumbnail src={education.icon} alt={education.school}>
                     <h3>{education.school}</h3>
                     <p>{education.major}</p>
                     <p>{education.period}</p>
                     <p><a href={education.link}>{education.link}</a></p>
                 </Thumbnail>
               </Col>
       );
     });
  }

  render() {
    return (
      <div> 
        <h1>Educations</h1>
        <Grid>
          <Row>
        {this.listSchool()} 
          </Row>
        </Grid>
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
