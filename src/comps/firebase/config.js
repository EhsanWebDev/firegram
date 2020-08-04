import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBgnGCzR9Y3QB7i9ABJ7R1MfUbFbSNUCNE",
  authDomain: "firegram-4de02.firebaseapp.com",
  databaseURL: "https://firegram-4de02.firebaseio.com",
  projectId: "firegram-4de02",
  storageBucket: "firegram-4de02.appspot.com",
  messagingSenderId: "442213500202",
  appId: "1:442213500202:web:7550ef301acfdc0785ca53",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, storage, timestamp };
