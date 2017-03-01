import { FETCH_POSTS } from '../actions/index';

export default function(state = { all: [] }, action) {
  switch(action.type) {
  case FETCH_POSTS:
    return Object.assign({}, state, {
      all: action.payload.data[0]
    })
  default:
    return state;
  }
}
