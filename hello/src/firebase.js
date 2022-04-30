// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
import firebase from 'firebase';
import "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBNF8S3fdmUA_FVpeb8xGYW3MF6IgCk5J4",
    authDomain: "my-shopping-cart-993c4.firebaseapp.com",
    projectId: "my-shopping-cart-993c4",
    storageBucket: "my-shopping-cart-993c4.appspot.com",
    messagingSenderId: "262786982415",
    appId: "1:262786982415:web:d9bf8bd4fabdfe2103b97a"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
