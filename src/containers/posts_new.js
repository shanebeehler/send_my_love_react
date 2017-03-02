import React from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';
import {hashHistory} from 'react-router';
import axios from 'axios';
// import { config } from '../../config.js';

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
    hashHistory.push('/profile');
  })
  .catch(function (error) {
    console.log(error);
  });
  }

  render() {
    return (
        <form className="love-form" onSubmit={this.handleSubmit.bind(this)}>
          <label>
            {this.props.facebookObject.name}
          </label>
          <label>in</label>
          <label>
            {this.props.location[0]}, {this.props.location[1]}
          </label>
          <input className="button" type="submit" value="pass the love"/>
        </form>
    );
  }
}

export default connect(null, { createPost })(PostsNew);
