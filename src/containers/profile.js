import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProfile } from '../actions/index';
// import { Link } from 'react-router';
import CurrentLoveDisplay from '../components/current_love_display';
import Maps from '../components/map';

class Profile extends Component {
  componentDidMount() {
    this.props.fetchProfile(this.props.userId);
    // setInterval(this.props.fetchPosts, 500);
  }

  render() {
    return (
      <div>
        <CurrentLoveDisplay profile={this.props.profile}/>
        {/* <Maps profile={this.props.profile}/> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    userId:  state.facebookObject.id

  }
}

export default connect(mapStateToProps, { fetchProfile })(Profile);
