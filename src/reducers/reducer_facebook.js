import { FACEBOOK_OBJECT } from '../actions/index';

export default function(state = {name: "logged out"}, action) {
  switch(action.type) {
  case FACEBOOK_OBJECT:
    var facebookObject = action.payload;
    console.log(action.payload);
    return facebookObject;
  default:
    return state;
  }
}
