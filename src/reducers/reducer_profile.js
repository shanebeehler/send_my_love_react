import { FETCH_PROFILE } from '../actions/index';

export default function(state = null, action) {
  switch(action.type) {
  case FETCH_PROFILE:
    var profile = action.payload.data;
    console.log(profile);
    return profile;
  default:
    return state;
  }
}
