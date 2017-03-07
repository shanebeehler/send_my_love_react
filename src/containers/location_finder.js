import React, { Component, PropTypes } from 'react';
import { connect }                     from 'react-redux';
import { bindActionCreators }          from 'redux';
import { showPosition }                from '../actions/index';
import LocationDisplay                 from '../components/location_display';
import PostsNew                        from './posts_new';
import Welcome                         from '../components/welcome';
import FacebookLogin                   from '../containers/facebook_login';

class LocationFinder extends Component {

  fetchLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.props.showPosition);
    }
  }

  render() {
    if (this.props.facebookObject.name === "logged out" && this.props.location[0] === "unknown") {
      return (
        <div>
          <FacebookLogin loggedIn={false} />
          <button className="location-button logout"
                onClick={this.fetchLocation.bind(this)}>Share Location</button>
          <Welcome />
        </div>
      );
    }
    else if (this.props.facebookObject.name !== "logged out" && this.props.location[0] === "unknown") {
      return (
        <div>
          <label>
            {this.props.facebookObject.name}
          </label>
          <button className="location-button logout"
                  onClick={this.fetchLocation.bind(this)}>Share Location</button>
          <Welcome />
        </div>
      );
    }
    else if (this.props.facebookObject.name === "logged out" && this.props.location[0] != "unknown") {
      return (
        <div>
          <FacebookLogin loggedIn={false} />
          <label>
            {this.props.location[0]}, {this.props.location[1]}
          </label>
          <Welcome />
        </div>
      );
    }
    else {
      return(
        <div className="form-wrap">
          <PostsNew facebookObject={this.props.facebookObject} location={this.props.location} />
        </div>
      );
    }
  }
}

function mapStateToProps(state, ownProps) :stateProps {
  return {
    facebookObject: state.facebookObject,
    location:       state.location
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showPosition: showPosition }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationFinder);
