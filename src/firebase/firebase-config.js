import 'firebase/firestore';
import 'firebase/auth';
import {initializeApp} from "firebase/app";
import { getFirestore} from 'firebase/firestore';
import { GoogleAuthProvider} from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyBo2SIyULa3XPdUFDn3U6-tIC-IIVBvFR8",
  authDomain: "personal-website-fcfc5.firebaseapp.com",
  projectId: "personal-website-fcfc5",
  storageBucket: "personal-website-fcfc5.appspot.com",
  messagingSenderId: "836423657192",
  appId: "1:836423657192:web:972504fab7a5832bbccb5d"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const googleAuthProvider = new GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  app
}

