import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { fetchProfile }     from '../actions/index';
import CurrentLoveDisplay   from '../components/current_love_display';

class Profile extends Component {
  componentDidMount() {
    this.props.fetchProfile(this.props.userId);
  }

  render() {
    return (
      <div>
        <CurrentLoveDisplay profile={this.props.profile}/>
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
