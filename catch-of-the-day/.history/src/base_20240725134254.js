import Rebase from "re-base";
import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDXUCNSpi5u07F76httlCTXAA4mPVQlEHs",
  authDomain: "catch-of-the-day-daef3-default-rtdb.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-daef3-default-rtdb.firebaseio.com/"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;