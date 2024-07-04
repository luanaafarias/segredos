// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8P8SgyaDXqXuFOvUZKpKkrh8Oj47msoQ",
  authDomain: "secret-5f50f.firebaseapp.com",
  projectId: "secret-5f50f",
  storageBucket: "secret-5f50f.appspot.com",
  messagingSenderId: "614289495356",
  appId: "1:614289495356:web:dbbcd6b2e69a79de7efa39",
  measurementId: "G-QHCCBXC8XK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//const auth = getAuth(app)

export {app}
