import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBlgEDlxE1rng4n2hGMLd1Jga5qP-ReDUk",
  authDomain: "bubbl-t.firebaseapp.com",
  databaseURL: "https://bubbl-t.firebaseio.com",
  projectId: "bubbl-t",
  storageBucket: "bubbl-t.appspot.com",
  messagingSenderId: "271240170578",
  appId: "1:271240170578:web:27db80d76055de6c57a38b",
  measurementId: "G-BJ2F2F2F55"
};

firebase.initializeApp(firebaseConfig);
let db = firebase.database();

export default firebase;
