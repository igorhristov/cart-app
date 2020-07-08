import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyD_DjcnRyQFRDJXtaEh3qUTpdDQCt7tL3A',
    authDomain: 'igor-cart-db.firebaseapp.com',
    databaseURL: 'https://igor-cart-db.firebaseio.com',
    projectId: 'igor-cart-db',
    storageBucket: 'igor-cart-db.appspot.com',
    messagingSenderId: '996673527753',
    appId: '1:996673527753:web:152e96d0ec3f60dca3d218',
    measurementId: 'G-BFC78TCHRW',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const singInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
