import firebase from "firebase/app";
import "firebase/auth";

// usually these would not be pushed, but this assignment needs
// to be graded

const app = firebase.initializeApp({
  apiKey: "AIzaSyDVlvjtJyAaYwTqYpZ9x8W6th7wcsX7XvE",
  authDomain: "superlative-9227b.firebaseapp.com",
  projectId: "superlative-9227b",
  storageBucket: "superlative-9227b.appspot.com",
  messagingSenderId: "1096265904136",
  appId: "1:1096265904136:web:88c6214436c4c2f5eba1bd",
  measurementId: "G-3E9S0DY7Q7"
});

export const auth = app.auth();
export default app;
