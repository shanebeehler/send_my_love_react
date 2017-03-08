import React, { Component, PropTypes } from 'react';
import ReactDOM                        from 'react-dom';
import { connect }                     from 'react-redux';
import { bindActionCreators }          from 'redux';
import { showPosition }                from '../actions/index';
import LocationDisplay                 from '../components/location_display';
import PostsNew                        from './posts_new';
import Welcome                         from '../components/welcome';
import FacebookLogin                   from '../containers/facebook_login';
import ReactTransitions                from 'react-transitions';
// import '../../node_modules/react-transitions/dist/animations.css';

const transition = "rotate-cube-top-out-rotate-cube-top-in";

class LocationFinder extends Component {

  fetchLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.props.showPosition);
    }
  }

  render() {
    if (this.props.facebookObject.name === "logged out" && this.props.location[0] === "unknown") {
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
          <Welcome />
        </div>
      );
    }
    else if (this.props.facebookObject.name !== "logged out" && this.props.location[0] === "unknown") {
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
          <Welcome />
        </div>
      );
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
    location:       state.location
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ showPosition: showPosition }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(LocationFinder);
