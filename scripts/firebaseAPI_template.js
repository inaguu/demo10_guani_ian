//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyATFraYCF4pYFCGL4RfvpZQ4dKfZXwYYNs",
    authDomain: "fir-comp1800-75a83.firebaseapp.com",
    projectId: "fir-comp1800-75a83",
    storageBucket: "fir-comp1800-75a83.appspot.com",
    messagingSenderId: "719342910387",
    appId: "1:719342910387:web:3c7359af9acd60753be9c6"
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
