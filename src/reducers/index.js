import { combineReducers } from 'redux';
import PostsReducer        from './reducer_posts';
import LocationReducer     from './reducer_location';
import FacebookReducer     from './reducer_facebook';
import StatsReducer        from './reducer_stats';
import ProfileReducer      from './reducer_profile';
import { loadingBarReducer } from 'react-redux-loading-bar'

const rootReducer = combineReducers({
  posts:          PostsReducer,
  facebookObject: FacebookReducer,
  location:       LocationReducer,
  stats:          StatsReducer,
  profile:        ProfileReducer,
  loadingBar:     loadingBarReducer
});

export default rootReducer;
