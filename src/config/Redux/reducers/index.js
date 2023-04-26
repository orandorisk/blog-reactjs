import { combineReducers } from 'redux';

import data from './data';
import GlobalReducers from './GlobalReducers';
import createBlogReducers from './createBlogReducers';

export default combineReducers({ data, GlobalReducers, createBlogReducers });