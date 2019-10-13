import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAAegKorHdmCpcOJ-oVqH2Pk_wdeQBQV4M",
  authDomain: "scout-db-82899.firebaseapp.com",
  databaseURL: "https://scout-db-82899.firebaseio.com",
  projectId: "scout-db-82899",
  storageBucket: "scout-db-82899.appspot.com",
  messagingSenderId: "1001580750857",
  appId: "1:1001580750857:web:786edfa90af313c99730d8",
  measurementId: "G-X2MKRYWMY6"
};


  firebase.initializeApp(config);
  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;


  