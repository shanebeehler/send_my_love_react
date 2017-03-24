import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { fetchPosts }       from '../actions/index';
import { Link }             from 'react-router';
import PostsDisplay         from '../components/posts_display';
import MapDisplay           from '../components/map_display';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    // setInterval(this.props.fetchPosts, 10000);
  }

  render() {
    if (this.props.posts.length !== 0) {
      var profile = { current_love: this.props.posts.reverse() };
      return (
        // <PostsDisplay posts={this.props.posts} />
        <MapDisplay profile={profile} public={true}/>
      );
    }
    else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
