import { combineReducers } from 'redux';
import boardReducer from './board-reducer';

const allReducers = combineReducers({
    boards: boardReducer,
})

export default allReducers;