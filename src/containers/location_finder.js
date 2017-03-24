import React, { Component, PropTypes } from 'react';
import ReactDOM                        from 'react-dom';
import { connect }                     from 'react-redux';
import { bindActionCreators }          from 'redux';
import { showPosition, fetchProfile }  from '../actions/index';
import LocationDisplay                 from '../components/location_display';
import PostsNew                        from './posts_new';
import FacebookLogin                   from '../containers/facebook_login';
import ReactTransitions                from 'react-transitions';
import MapDisplay                      from '../components/map_display';
// import '../../node_modules/react-transitions/dist/animations.css';

const transition = "rotate-cube-bottom-out-rotate-cube-bottom-in";

class LocationFinder extends Component {

  componentDidUpdate() {
    if (this.props.facebookObject.name !== "logged out" && this.props.profile === "logged out") {
      this.props.fetchProfile(this.props.facebookObject.id);
    }
  }

  fetchLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.props.showPosition);
    }
    else {
      alert("Location Unavailable. Make sure Location Services are on!")
    }
  }

  render() {
    var now = new Date;
    now = now.getTime();
    if (this.props.facebookObject.name === "logged out") {
      return (
        <div className="love-form">
          <label>
            <ReactTransitions
              transition={ transition }
              width={ "100%" }
              height={ "60px" }
            >
              <div key="1">
                <FacebookLogin loggedIn={false} />
              </div>
            </ReactTransitions>
          </label>

          <label>in</label>

            <label>
              <div>
                <button className="location-button"
                        onClick={this.fetchLocation.bind(this)}
                        disabled>Share Location</button>
              </div>
            </label>

          <PostsNew facebookObject={this.props.facebookObject} location={this.props.location} isDisabled={true}/>
        </div>
      );
    }
    else if (this.props.facebookObject.name !== "logged out" && this.props.location[0] === "unknown") {
      if (this.props.profile !== "logged out" && this.props.profile.current_love[1].milliseconds > now) {
        var milliseconds = this.props.profile.current_love[1].milliseconds;
        return (
          <div className="love-form">
            <label>
              <ReactTransitions
                transition={ transition }
                width={ "100%" }
                height={ "60px" }
              >
                <div key="3">
                  {this.props.facebookObject.name}
                </div>
              </ReactTransitions>
            </label>
  {/*
            <label>in</label> */}
            <label>
              <ReactTransitions
                transition={ transition }
                width={ "100%" }
                height={ "60px" }
                >
                  <div key="9">
                    Send Love again in {Math.round((milliseconds - now) / 3600000)} hours.
                  </div>
              </ReactTransitions>
            </label>
            {/* <MapDisplay profile={this.props.profile}/> */}
          </div>
        );
      }

      else {
        return (
          <div className="love-form">
            <label>
              <ReactTransitions
                transition={ transition }
                width={ "100%" }
                height={ "60px" }
              >
                <div key="3">
                  {this.props.facebookObject.name}
                </div>
              </ReactTransitions>
            </label>

            <label>in</label>
            <label>
              <ReactTransitions
                transition={ transition }
                width={ "100%" }
                height={ "60px" }
                >
                  <div key="9">
                    <button className="location-button"
                            onClick={this.fetchLocation.bind(this)}>Share Location</button>
                  </div>
              </ReactTransitions>
            </label>
            <PostsNew facebookObject={this.props.facebookObject} location={this.props.location} isDisabled={true}/>
          </div>
        );
      }
    }
    else {
      return(
        <div className="love-form">
            <label>
              <div>
                {this.props.facebookObject.name}
              </div>
            </label>

          <label>in</label>

          <label>
            <ReactTransitions
              transition={ transition }
              width={ "inherent" }
              height={ "60px" }
            >
              <div key="8">
                {this.props.location[0]}, {this.props.location[1]}
              </div>
            </ReactTransitions>
          </label>
          <PostsNew facebookObject={this.props.facebookObject} location={this.props.location} isDisabled={false}/>
        </div>
      );
    }
  }
}

function mapStateToProps(state, ownProps) :stateProps {
  return {
    facebookObject: state.facebookObject,
    location:       state.location,
    profile:        state.profile
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showPosition: showPosition, fetchProfile: fetchProfile }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationFinder);
