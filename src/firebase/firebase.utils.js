import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyAUxFXELjFjd2AXKqoAPvm4Y3Bai0cRUT8',
    authDomain: 'crwn-db-66550.firebaseapp.com',
    databaseURL: 'https://crwn-db-66550.firebaseio.com',
    projectId: 'crwn-db-66550',
    storageBucket: 'crwn-db-66550.appspot.com',
    messagingSenderId: '183292894189',
    appId: '1:183292894189:web:b16202ee27909acc7065e4',
    measurementId: 'G-MC03ZCJ6W5'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    // if a user is not signed in and
    // i'm not getting an object returned i want to exit
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    // console.log(firestore.doc('users/235hfghj'));
    console.log(snapShot);

    // Check if there is any data of that user
    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        // If there isn't create a new user using the data
        // from the userAuth object
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
