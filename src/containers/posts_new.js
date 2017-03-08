import React          from 'react';
import { connect }    from 'react-redux';
import { createPost } from '../actions/index';
import {browserHistory}  from 'react-router';
import axios          from 'axios';

class PostsNew extends React.Component {

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props.location[2]);
    axios.post('https://protected-escarpment-52671.herokuapp.com/posts/', {
    user_id: this.props.facebookObject.id,
    name:    this.props.facebookObject.name,
    city:    this.props.location[0],
    country: this.props.location[1],
    lat:     this.props.location[2].lat,
    lng:     this.props.location[2].lng
  })
  .then(function (response) {
    console.log(response);
    browserHistory.push('/profile');
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  render() {
    if (this.props.isDisabled) {
      return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <button className="button" type="submit" value="send my love" disabled>Send My Love</button>
        </form>
      );
    }
    else {
      return (
        <form onSubmit={this.handleSubmit.bind(this)}>
          <button className="button" type="submit" value="send my love">Send My Love</button>
        </form>
      );
    }
  }
}

export default connect(null, { createPost })(PostsNew);
