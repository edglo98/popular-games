import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  const firebaseConfig = {
    apiKey: "AIzaSyAoIypVOWyL1RnRdB0c5QQA57N8UcBW1vQ",
    authDomain: "react-crud-2380f.firebaseapp.com",
    projectId: "react-crud-2380f",
    storageBucket: "react-crud-2380f.appspot.com",
    messagingSenderId: "959020494086",
    appId: "1:959020494086:web:ae9160b5105b9676f6c287"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const db = firebase.firestore();
  const auth = new firebase.auth();
  const googleAuth = new firebase.auth.GoogleAuthProvider();

  export {
    googleAuth,
    db,
    auth,
    firebase
  }