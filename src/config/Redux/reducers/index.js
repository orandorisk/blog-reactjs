import { combineReducers } from 'redux';

import data from './data';
import GlobalReducers from './GlobalReducers';

export default combineReducers({ data, GlobalReducers });