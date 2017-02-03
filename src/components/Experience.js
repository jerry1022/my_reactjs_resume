import React, { Component } from 'react';
import {bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import {Button, Grid, Row, Col, Thumbnail} from 'react-bootstrap';
import {selectCompany} from '../actions/action-company';


class Experience extends Component {
  experienceList() {
	return this.props.experiences.map((experience) => { 
            return(
               <Col xs={6} md={4}>
      	         <Thumbnail src={experience.icon} alt="242x200" onClick={()=>this.props.selectCompany(experience)}>
                     <h3>{experience.company}</h3>
                     <p>{experience.title} {experience.period}</p>
                     <Button bsStyle='info'>Detail...</Button>
                 </Thumbnail>
               </Col>
            );
          })
  }

  render() {
    return (
      <div>
          <h1>Working Experiences</h1>
          <Grid>
            <Row>
              {this.experienceList()}
            </Row>
          </Grid>
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
      selectCompany: selectCompany,
    }, dispatch); 
}
export default connect(mapStateToProps, matchDispatchToProps)(Experience);
