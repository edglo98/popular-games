import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

  const firebaseConfig = {
    apiKey: "AIzaSyB04jnV2bMbkZSXYYXavT7NBMa2bK8qbLY",
    authDomain: "popgame-3aebd.firebaseapp.com",
    projectId: "popgame-3aebd",
    storageBucket: "popgame-3aebd.appspot.com",
    messagingSenderId: "427354903982",
    appId: "1:427354903982:web:772f2f2e2a61df812ae43f"
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

  /* edgar
  apiKey: "AIzaSyB04jnV2bMbkZSXYYXavT7NBMa2bK8qbLY",
    authDomain: "popgame-3aebd.firebaseapp.com",
    projectId: "popgame-3aebd",
    storageBucket: "popgame-3aebd.appspot.com",
    messagingSenderId: "427354903982",
    appId: "1:427354903982:web:772f2f2e2a61df812ae43f"
  */
    /* david
    apiKey: "AIzaSyAoIypVOWyL1RnRdB0c5QQA57N8UcBW1vQ",
    authDomain: "react-crud-2380f.firebaseapp.com",
    projectId: "react-crud-2380f",
    storageBucket: "react-crud-2380f.appspot.com",
    messagingSenderId: "959020494086",
    appId: "1:959020494086:web:ae9160b5105b9676f6c287"
  */