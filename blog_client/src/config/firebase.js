import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBVqEguM2W_-6HhStWfWKsS1hxCWjHG3NY",
    authDomain: "blogjune10.firebaseapp.com",
    databaseURL: "https://blogjune10.firebaseio.com",
    projectId: "blogjune10",
    storageBucket: "blogjune10.appspot.com",
    messagingSenderId: "1099502771994",
    appId: "1:1099502771994:web:513dab1865057e7144d6a3",
    measurementId: "G-LF2MTLNP2P"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();
  export const auth = firebase.auth();

  export default firebase;

