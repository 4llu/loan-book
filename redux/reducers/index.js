import { combineReducers } from 'redux-immutable';
import { Record } from 'immutable';
import people from './people';

const StateRecord = Record({
	people: undefined,
});

const rootReducer = combineReducers({
    people,
}, StateRecord);

export default rootReducer;
