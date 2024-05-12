import { combineReducers } from 'redux';
import doctorInfoPageReducer from './doctorInfoPageReducer';
import doctorListReducer from './doctorListReducer';

const redusers = combineReducers({
  doctorList: doctorListReducer,
  doctorInfoPage: doctorInfoPageReducer,
});

export default redusers;
