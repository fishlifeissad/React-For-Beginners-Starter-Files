import Rebase from "re-base";
import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDCgsQ6Wyg9nQbQs-AW5YsstdomAf7cnp8",
  authDomain: "catch-of-the-day-daef3-default-rtdb.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-daef3-default-rtdb.firebaseio.com/"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
