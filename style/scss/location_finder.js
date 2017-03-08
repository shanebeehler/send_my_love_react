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

class LocationFinder extends Component {

  fetchLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.props.showPosition);
    }
  }

  render() {
    if (this.props.facebookObject.name === "logged out" || this.props.facebookObject === "logged out" && this.props.location[0] === "unknown") {
      return (
        <div className="love-form">
          <ReactTransitions
            transition={ "fade-move-from-top" }
            width={ "inherent" }
            height={ "60px" }
          >
          <label key="2">
            <FacebookLogin loggedIn={false} />
          </label>
          </ReactTransitions>
          <label>in</label>
          <button className="location-button"
                onClick={this.fetchLocation.bind(this)}>Share Location</button>
          <PostsNew facebookObject={this.props.facebookObject} location={this.props.location} isDisabled={true}/>
          <Welcome />
        </div>
      );
    }
    else if (this.props.facebookObject.name !== "logged out" && this.props.location[0] === "unknown") {
      return (
        <div className="love-form">
          <ReactTransitions
            transition={ "fade-move-from-top" }
            width={ "inherent" }
            height={ "60px" }
          >
          <label key="1">
            {this.props.facebookObject.name}
          </label>
          </ReactTransitions>
          <label>in</label>
          <button className="location-button"
                  onClick={this.fetchLocation.bind(this)}>Share Location</button>
          <PostsNew facebookObject={this.props.facebookObject} location={this.props.location} isDisabled={true}/>
          <Welcome />
        </div>
      );
    }
    else if (this.props.facebookObject.name === "logged out" && this.props.location[0] != "unknown") {
      return (
        <div className="love-form">
          <FacebookLogin loggedIn={false} />
          <label>in</label>
          <label>
            {this.props.location[0]}, {this.props.location[1]}
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
            {this.props.facebookObject.name}
          </label>
          <label>in</label>
          <label>
            {this.props.location[0]}, {this.props.location[1]}
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
