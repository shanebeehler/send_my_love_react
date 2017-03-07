import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { fetchProfile }     from '../actions/index';
import CurrentLoveDisplay   from '../components/current_love_display';
import FacebookLogin        from '../containers/facebook_login';

class Profile extends Component {
  componentDidMount() {
    if (this.props.facebookObject != "logged out") {
      this.props.fetchProfile(this.props.facebookObject.id);
    }
  }

  render() {
    if (this.props.profile === "logged out") {
      return(
        <div>
          Must be logged in.
        </div>
      );
    }
    else {
      return (
        <div>
          <CurrentLoveDisplay profile={this.props.profile}/>
          <FacebookLogin loggedIn={true} className="logout"/>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    facebookObject:  state.facebookObject

  }
}

export default connect(mapStateToProps, { fetchProfile })(Profile);
