import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyDS5Am2qVe6UoyPpO0D-BQzzn-M-vk0Bhw",
    authDomain: "guesswhom-a210f.firebaseapp.com",
    projectId: "guesswhom-a210f",
    storageBucket: "guesswhom-a210f.appspot.com",
    messagingSenderId: "484079180659",
    appId: "1:484079180659:web:e9bb960eb075cfe1cc4306",
    measurementId: "G-L2TLBW8JBP"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;
