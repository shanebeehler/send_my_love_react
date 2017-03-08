import { FETCH_STATS } from '../actions/index';

export default function(state = false, action) {
  switch(action.type) {
  case FETCH_STATS:
    var stats = action.payload.data[1];
    console.log(stats);
    return stats;
  default:
    return state;
  }
}
