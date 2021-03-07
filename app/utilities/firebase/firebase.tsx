import firebase from "firebase"
import firebaseConfig from "../../env/firebaseConfig.json"

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase.apps.length ? firebase.app() : firebase.initializeApp(firebaseConfig);
