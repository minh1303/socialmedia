// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCw_i0DZuSOSUDbK90ctXYBa08F-kd0wNk",
  authDomain: "socialmedia-96901.firebaseapp.com",
  databaseURL: "https://socialmedia-96901-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "socialmedia-96901",
  storageBucket: "socialmedia-96901.appspot.com",
  messagingSenderId: "1079850698648",
  appId: "1:1079850698648:web:a8b8547083c63c52624ded"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app 