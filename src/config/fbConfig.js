import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import '../../config';
var config = config.firebaseConfig;

firebase.initializeApp(config);
firebase.firestore();

export default firebase;