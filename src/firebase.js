// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "app.firebaseapp.com",
  databaseURL: "https://softwallet-95861-default-rtdb.firebaseio.com",
  projectId: "softwallet-95861",
  storageBucket: "YOUR_APP.appspot.com",
  messagingSenderId: "XXXXXX",
  appId: "1:462287559226:web:cb733e930a37d9df74b303"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, push };
