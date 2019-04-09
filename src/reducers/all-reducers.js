import { combineReducers } from 'redux';
import boardReducer from './board-reducer';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import authReducer from './authReducer';

const allReducers = combineReducers({
    auth: authReducer,
    boards: boardReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer 
})

export default allReducers;