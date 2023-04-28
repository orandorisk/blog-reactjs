import { combineReducers } from 'redux';

import data from './data';
import GlobalReducers from './GlobalReducers';
import createBlogReducers from './createBlogReducers';
import dataById from './dataById';

export default combineReducers({ data, GlobalReducers, createBlogReducers, dataById });