// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDqoG5TnfwCv70xfsnPV-K5kv3QnJWV_uQ",
  authDomain: "smart-aiot-dam-controller.firebaseapp.com",
  databaseURL: "https://smart-aiot-dam-controller-default-rtdb.firebaseio.com",
  projectId: "smart-aiot-dam-controller",
  storageBucket: "smart-aiot-dam-controller.appspot.com",
  messagingSenderId: "928291310526",
  appId: "1:928291310526:web:8e687c58c82a1a7c1f47ef",
  measurementId: "G-5ZT65WKZLY",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.database();

export default db;
