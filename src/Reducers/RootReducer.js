import { combineReducers } from 'redux';
import { Reducer } from './Reducer';
import { BGReducer } from './BGReducer';

export const rootReducer = combineReducers({
  header: Reducer,
  app: BGReducer,
});
