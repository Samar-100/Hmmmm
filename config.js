import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
    apiKey: "AIzaSyCiUW8KC-TP6T2NLaI7WFORL2MdaNtNdVo",
    authDomain: "book-santa-2-1bac0.firebaseapp.com",
    projectId: "book-santa-2-1bac0",
    storageBucket: "book-santa-2-1bac0.appspot.com",
    messagingSenderId: "428560007678",
    appId: "1:428560007678:web:6be951b085064f5dfa80af"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
