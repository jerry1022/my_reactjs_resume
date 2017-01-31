import React, { Component } from 'react';
import {connect} from 'react-redux';

class Profile extends Component {
  render() {
    return (
      <div>
	<h2>Name: {this.props.profile.name}</h2>
	<h2>Birth: {this.props.profile.birthday}</h2>
	<h2>Gender: {this.props.profile.gender}</h2>
	<h2>Address: {this.props.profile.address}</h2>
	<h2>Contact: {this.props.profile.phone}</h2>
	<h2>Email: {this.props.profile.email}</h2>
	<h2>Skype: {this.props.profile.skype}</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile
  };
}

export default connect(mapStateToProps)(Profile);
