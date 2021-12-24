import { initializeApp } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyDYrsCkvHn3fhPiIpZzaAZCEHFwkQCv9Js",
    authDomain: "coding-temple-5c51a.firebaseapp.com",
    projectId: "coding-temple-5c51a",
    storageBucket: "coding-temple-5c51a.appspot.com",
    messagingSenderId: "733434616246",
    appId: "1:733434616246:web:a3e2f5d3cc9e87a5c7c917",
    measurementId: "G-NYN5C5C4C2"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;