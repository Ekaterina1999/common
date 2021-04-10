import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCr7dqrwM8Ux8cXJHaGTcnufiGZ-qQsdus",
    authDomain: "charon-f1e32.firebaseapp.com",
    databaseURL: "https://charon-f1e32-default-rtdb.firebaseio.com",
    projectId: "charon-f1e32",
    storageBucket: "charon-f1e32.appspot.com",
    messagingSenderId: "884271227133",
    appId: "1:884271227133:web:dab2151f02bcd7f7bbde94",
    measurementId: "G-L9Y64V0L79"
  };

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();

export default db;