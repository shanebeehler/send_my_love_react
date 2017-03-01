import React, { Component } from 'react';
import { connect } from 'react-redux';

class LocationDisplay extends Component {
  render() {
    if (!this.props.location) {
      return <div>Click button for location</div>;
    }

    return (
      <input value={this.props.location} type="text" className="location-input" />
    );
  }
}

function mapStateToProps(state) {
  return {
    location: state.location
  };
}

export default connect(mapStateToProps)(LocationDisplay);
