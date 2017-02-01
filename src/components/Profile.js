import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Grid, Row, Col} from 'react-bootstrap';

class Profile extends Component {
  render() {
    return (
      <Grid>
        <Row className='show-grid'>
            <Col xs={2} md={2} lg={2}>
		<h2>Name:</h2>
            </Col>
            <Col xs={1} md={1} lg={1}>
                <h2>{this.props.profile.name}</h2>
            </Col>
        </Row>
        <Row>
            <Col xs={2} md={2} lg={2}>
		<h2>Birth:</h2>
            </Col>
            <Col xs={1} md={1} lg={1}>
                <h2>{this.props.profile.birthday}</h2>
            </Col>
        </Row>
        <Row>
            <Col xs={2} md={2} lg={2}>
		<h2>Gender:</h2>
            </Col>
            <Col xs={1} md={1} lg={1}>
                <h2>{this.props.profile.gender}</h2>
            </Col>
        </Row>
        <Row>
            <Col xsHidden md={2} lg={2}>
		<h2>Address:</h2>
            </Col>
            <Col xsHidden md={10} lg={10}>
                <h2>{this.props.profile.address}</h2>
            </Col>
        </Row>
        <Row>
            <Col xs={2} md={2} lg={2}>
		<h2>Email:</h2>
            </Col>
            <Col xs={1} md={1} lg={1}>
                <h2>{this.props.profile.email}</h2>
            </Col>
        </Row>
        <Row>
            <Col xs={2} md={2} lg={2}>
		<h2>Skype:</h2>
            </Col>
            <Col xs={1} md={1} lg={1}>
                <h2>{this.props.profile.skype}</h2>
            </Col>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

export default connect(mapStateToProps)(Profile);
