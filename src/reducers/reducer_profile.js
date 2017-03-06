import { FETCH_PROFILE } from '../actions/index';

export default function(state = "logged out", action) {
  switch(action.type) {
  case FETCH_PROFILE:
    if (action.payload === "logged out") {
      return action.payload;
    }
    else {
      var profile = action.payload.data;
      console.log(profile);
      return profile;    
    }
  default:
    return state;
  }
}
