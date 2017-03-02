import axios from 'axios';
import haversine from 'haversine-distance';
// import { config } from '../../config.js';
import { vars } from '../../webpack.prod.config.js';

export const FETCH_POSTS     = 'FETCH_POSTS';
export const CREATE_POST     = 'CREATE_POST';
export const SHOW_POSITION   = 'SHOW_POSITION';
export const FACEBOOK_OBJECT = 'FACEBOOK_OBJECT';
export const FETCH_STATS     = 'FETCH_STATS';
export const FETCH_PROFILE   = 'FETCH_PROFILE'

// const API_KEY  = config.geocode_api_key;
const GEOCODE_KEY = vars.GEOCODE_KEY;
const ROOT_URL = 'https://protected-escarpment-52671.herokuapp.com/posts/';
const PROFILE_URL = 'https://protected-escarpment-52671.herokuapp.com/';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_POSTS,
    payload: request
  }
}

export function createPost(props) {
  const request = axios.post(`${ROOT_URL}`, props);

  return  {
    type: CREATE_POST,
    payload: request
  }
}

export function showPosition(position) {
  const request = axios.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&result_type=locality&key=${GEOCODE_KEY}`);
  console.log(request);
  return {
    type: SHOW_POSITION,
    payload: request
  };
}

export function distanceBetween(from, to) {
  const distance = haversine(from, to);

  return {
    type: DISTANCE_BETWEEN,
    payload: distance
  };
}

export function fetchStats() {
  const request = axios.get(`${ROOT_URL}`);

  return {
    type: FETCH_STATS,
    payload: request
  }
}

export function fetchProfile(userId) {
  const request = axios.get(`${PROFILE_URL}${userId}`);

  return {
    type: FETCH_PROFILE,
    payload: request
  }
}

export function facebookObject(response) {
  return {
    type: FACEBOOK_OBJECT,
    payload: response
  }
}
