import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {

};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;