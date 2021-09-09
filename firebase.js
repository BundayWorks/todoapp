var firebaseConfig = {
    apiKey: "AIzaSyB_H25eJY4-Ow32-XW0JsBb-A0aZuLu-bs",
    authDomain: "to-do-practise.firebaseapp.com",
    projectId: "to-do-practise",
    storageBucket: "to-do-practise.appspot.com",
    messagingSenderId: "178373403971",
    appId: "1:178373403971:web:1ded357ebf78ac005ffbf6",
    measurementId: "G-MSK9NC16EE"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();