import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBc-N8V_kgQYZzjbM6TrDTDPmC2XL9MpA4",
    authDomain: "gameshow-2b6a8.firebaseapp.com",
    projectId: "gameshow-2b6a8",
    storageBucket: "gameshow-2b6a8.appspot.com",
    messagingSenderId: "458265131929",
    appId: "1:458265131929:web:12fc9f81ebdd9efdf8b108",
    measurementId: "G-HSMN50L9G1"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  



export { firebase };