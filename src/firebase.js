import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBLTbkvDEjx-uZ6ACY0GDufSCa0-JhFpMw",
    authDomain: "clone-react-b9e5e.firebaseapp.com",
    projectId: "clone-react-b9e5e",
    storageBucket: "clone-react-b9e5e.appspot.com",
    messagingSenderId: "963945454415",
    appId: "1:963945454415:web:1c411c3510767b8e01833a",
    measurementId: "G-DJ6GPK3X9X"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new  firebase.auth.GoogleAuthProvider()

export {db,auth,provider};
