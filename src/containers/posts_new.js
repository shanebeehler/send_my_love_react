import React          from 'react';
import { connect }    from 'react-redux';
import { createPost } from '../actions/index';
import {hashHistory}  from 'react-router';
import axios          from 'axios';

class PostsNew extends React.Component {

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.props.location[2]);
    var milliseconds = new Date;
    milliseconds = milliseconds.getTime() + 72000000;
    // var now = new Date;
    // now = now.getTime();
    // var timer = (milliseconds - now) / 3600000;
    axios.post('https://protected-escarpment-52671.herokuapp.com/posts/', {
    user_id:      this.props.facebookObject.id,
    name:         this.props.facebookObject.name,
    city:         this.props.location[0],
    country:      this.props.location[1],
    lat:          this.props.location[2].lat,
    lng:          this.props.location[2].lng,
    milliseconds: milliseconds
  })
  .then(function (response) {
    console.log(response);
    hashHistory.push('/profile');
    alert("Love Sent!")
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
