// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN23Ja6pumKI1BvrYhJZHrhSXOkuY7gqk",
  authDomain: "the-news-dragon-client-43acd.firebaseapp.com",
  projectId: "the-news-dragon-client-43acd",
  storageBucket: "the-news-dragon-client-43acd.appspot.com",
  messagingSenderId: "294797000497",
  appId: "1:294797000497:web:4070e8beeda384bdc5fa10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;