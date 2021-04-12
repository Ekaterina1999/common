import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHyeSrr-nqwUVJGTzuAyR_Ij6DZdgtV8g",
    authDomain: "comandproject-98763.firebaseapp.com",
    projectId: "comandproject-98763",
    storageBucket: "comandproject-98763.appspot.com",
    messagingSenderId: "276645872038",
    appId: "1:276645872038:web:9e6a76b1718cbdcc99cf67",
    measurementId: "G-N8RJL5VXK3"
  };
  
const firebaseApp1=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;