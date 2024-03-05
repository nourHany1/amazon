import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyCxTpMkljaNdATVDmwXKWILJXUCknqzLqg",
  authDomain: "fir-a5348.firebaseapp.com",
  projectId: "fir-a5348",
  storageBucket: "fir-a5348.appspot.com",
  messagingSenderId: "748436010137",
  appId: "1:748436010137:web:f60eea608eba8e7b05b408"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
