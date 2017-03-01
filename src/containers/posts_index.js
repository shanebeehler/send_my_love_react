import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
import PostsDisplay from '../components/posts_display';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
    // setInterval(this.props.fetchPosts, 500);
  }

  render() {
    return (
      <PostsDisplay posts={this.props.posts} />
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all
  }
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
