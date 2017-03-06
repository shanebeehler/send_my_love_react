import { FACEBOOK_OBJECT } from '../actions/index';

export default function(state = "Login to share your name", action) {
  switch(action.type) {
  case FACEBOOK_OBJECT:
    var facebookObject = action.payload;
    console.log(action.payload);
    return facebookObject;
  default:
    return state;
  }
}
