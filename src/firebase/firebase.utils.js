import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAUxFXELjFjd2AXKqoAPvm4Y3Bai0cRUT8",
    authDomain: "crwn-db-66550.firebaseapp.com",
    databaseURL: "https://crwn-db-66550.firebaseio.com",
    projectId: "crwn-db-66550",
    storageBucket: "crwn-db-66550.appspot.com",
    messagingSenderId: "183292894189",
    appId: "1:183292894189:web:b16202ee27909acc7065e4",
    measurementId: "G-MC03ZCJ6W5"
  };


  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);


  export default firebase;