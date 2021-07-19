import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    apiKey: "AIzaSyDmrlBleGUIU3oG5BTH_3eOIh9SIej8VD0",
    authDomain: "messenger-app-moad.firebaseapp.com",
    databaseURL: "https://messenger-app-moad-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "messenger-app-moad",
    storageBucket: "messenger-app-moad.appspot.com",
    messagingSenderId: "902915408129",
    appId: "1:902915408129:web:dd41cdfba0ae2a511c5b00",
    measurementId: "G-VMNXH2DC99"
  });

const db = firebaseApp.firestore();

export default db;