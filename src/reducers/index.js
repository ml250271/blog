import { combineReducers } from 'redux';
import postsReducer from './postsReducers';
import showUser from './showUser';

export default combineReducers({
    posts: postsReducer,
    user: showUser
});