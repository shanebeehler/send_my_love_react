import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { fetchStats }       from '../actions/index';
import StatsDisplay         from '../components/stats_display';
import PostsIndex           from '../containers/posts_index';
import Loading              from 'react-loading';

class Stats extends Component {
  componentDidMount() {
    this.props.fetchStats();
    // setInterval(this.props.fetchStats, 10000);
  }

  render() {
    if (this.props.stats) {
      return (
        <div className="stats-display">
          <h2>Global Love Stats</h2>
          <div className="stats">
            <StatsDisplay title="total distance(km)" stats={this.props.stats} count={6}/>
            <PostsIndex />
            <StatsDisplay title="times passed"       stats={this.props.stats} count={2}/>
            <StatsDisplay title="total people"       stats={this.props.stats} count={5}/>
            <StatsDisplay title="total cities"       stats={this.props.stats} count={0}/>
            <StatsDisplay title="total countries"    stats={this.props.stats} count={1}/>
          </div>
        </div>
      );
    }
    else {
      return (
        <div className="stats">
          <Loading type='spinning-bubbles' color='#EF5C48' />
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    stats: state.stats
  }
}

export default connect(mapStateToProps, { fetchStats })(Stats);
