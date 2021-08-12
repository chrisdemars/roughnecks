import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const config = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId
}

if ( !firebase.apps.length) {
  firebase.initializeApp(config);
} else {
  firebase.app();
}

export const db = firebase.firestore();

export const auth = firebase.auth()

