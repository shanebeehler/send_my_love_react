import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStats } from '../actions/index';
// import { Link } from 'react-router';
import StatsDisplay from '../components/stats_display';

class Stats extends Component {
  componentDidMount() {
    this.props.fetchStats();
    // setInterval(this.props.fetchPosts, 500);
  }

  render() {
    return (
      <div>
        <div className="stats">
          <StatsDisplay title="total distance(km)" stats={this.props.stats} count={6}/>
          <StatsDisplay title="times passed"       stats={this.props.stats} count={2}/>
          <StatsDisplay title="total people"       stats={this.props.stats} count={5}/>
          <StatsDisplay title="total cities"       stats={this.props.stats} count={0}/>
          <StatsDisplay title="total countries"    stats={this.props.stats} count={1}/>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stats: state.stats
  }
}

export default connect(mapStateToProps, { fetchStats })(Stats);
