import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

var config = {
  apiKey: "AIzaSyAbCNTz2QCc9uYoLFVyhAkHENQ7WUK0oqU",
  authDomain: "postit-a38b6.firebaseapp.com",
  databaseURL: "https://postit-a38b6.firebaseio.com",
  projectId: "postit-a38b6",
  storageBucket: "postit-a38b6.appspot.com",
  messagingSenderId: "514224469915"
};

firebase.initializeApp(config);
firebase.firestore();

export default firebase;