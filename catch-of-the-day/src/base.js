import Rebase from "re-base";
import firebase from "firebase";
//import { getAuth } from 'firebase/auth';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDCgsQ6Wyg9nQbQs-AW5YsstdomAf7cnp8",
  authDomain: "catch-of-the-day-daef3-default-rtdb.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-daef3-default-rtdb.firebaseio.com/",
  projectId: "catch-of-the-day-daef3",
  storageBucket: "catch-of-the-day-daef3.appspot.com",
  messagingSenderId: "23537079152",
  appId: "1:23537079152:web:dabee84360a7ecf1a335b5",
  measurementId: "G-GGXM5731C4"
});

const base = Rebase.createClass(firebaseApp.database());
//const auth = getAuth(app)

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
