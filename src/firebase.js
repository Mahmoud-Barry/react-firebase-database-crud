// Import the functions you need from the SDKs you need
import  firebase from "./firebase";
import "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0qCN9pgX42e7q3bTmEBVnH7OWIKfE5bo",
  authDomain: "tutoapp-db07f.firebaseapp.com",
  projectId: "tutoapp-db07f",
  storageBucket: "tutoapp-db07f.appspot.com",
  messagingSenderId: "932698295284",
  appId: "1:932698295284:web:8581bdc7c6ef6d7eb047a1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database();
