import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import  {  getFirestore ,  collection ,  getDocs  } from 'firebase/firestore/lite' ;
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAjLzAZUWmxxgnvaM0uUrxFV8U-TR0l2lA",
    authDomain: "crown-db-7e6e0.firebaseapp.com",
    projectId: "crown-db-7e6e0",
    storageBucket: "crown-db-7e6e0.appspot.com",
    messagingSenderId: "974117713724",
    appId: "1:974117713724:web:576cc2d1a6fc657e9ed039",
    measurementId: "G-FLD3T8665K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export const db =  getFirestore (app);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => signInWithPopup(auth, provider)
