// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database"
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyADTKAHz5nlbMTTQEK6ZhnaDmY7VqBeFr8",
  authDomain: "crud-todo-f0aa6.firebaseapp.com",
  databaseURL: "https://crud-todo-f0aa6-default-rtdb.firebaseio.com",
  projectId: "crud-todo-f0aa6",
  storageBucket: "crud-todo-f0aa6.appspot.com",
  messagingSenderId: "812273406282",
  appId: "1:812273406282:web:5753d18a4c8936343df1b3",
  measurementId: "G-MSY5TNNKJB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)
export const auth = getAuth()
