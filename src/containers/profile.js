import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { fetchProfile }     from '../actions/index';
import CurrentLoveDisplay   from '../components/current_love_display';
import MapDisplay           from '../components/map_display';
import FacebookLogin        from '../containers/facebook_login';
import { hashHistory }      from 'react-router';

class Profile extends Component {
  componentDidMount() {
    if (this.props.facebookObject.name != "logged out" && this.props.facebookObject !== undefined) {
      this.props.fetchProfile(this.props.facebookObject.id);
    }
    else {
      hashHistory.push('/');
    }
  }


  render() {
    if (this.props.facebookObject.name === "logged out") {
      return <div>Log In</div>
    }
    else {
      return (
        <div>
          <CurrentLoveDisplay profile={this.props.profile}/>
          <MapDisplay profile={this.props.profile}/>
          <FacebookLogin loggedIn={true} className="logout"/>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    profile: state.profile,
    facebookObject: state.facebookObject

  }
}

export default connect(mapStateToProps, { fetchProfile })(Profile);
