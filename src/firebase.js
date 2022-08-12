import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCYmUBLuAzUe6B8LjV1RZAbkLS3ckAk_2w",
  authDomain: "fishontoast-f380f.firebaseapp.com",
  projectId: "fishontoast-f380f",
  storageBucket: "fishontoast-f380f.appspot.com",
  messagingSenderId: "710709575542",
  appId: "1:710709575542:web:32fc91ae59387539abc457",
  measurementId: "G-E4LZRN5VG1",
};

firebase.initializeApp(firebaseConfig);

export const auth = getAuth();

export default firebase;
