import { combineReducers } from 'redux';
import message from './message';
import header from './header';

export default combineReducers({
    message,
    header
});
