import * as firebase from 'firebase';
import '@firebase/firestore'

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC4ihk50ek3QEHao57nrEX8JrsxKdj9i6s",
  authDomain: "kopa-locate.firebaseapp.com",
  databaseURL: "https://kopa-locate.firebaseio.com",
  projectId: "kopa-locate",
  storageBucket: "kopa-locate.appspot.com",
  messagingSenderId: "16571641192",
  appId: "1:16571641192:web:2b1d5b7a5e34b72c4bfadd",
  measurementId: "G-GKER2D7M5F"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();

let newsRef = db.collection('news');

export default newsRef;