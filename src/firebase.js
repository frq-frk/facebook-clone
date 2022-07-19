import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBkBpHFDhilrdvRSclGihl81M2rZVTZWLg",
    authDomain: "facebook-clone-c2521.firebaseapp.com",
    projectId: "facebook-clone-c2521",
    storageBucket: "facebook-clone-c2521.appspot.com",
    messagingSenderId: "282489085511",
    appId: "1:282489085511:web:8b3971437fdf015c049b62",
    measurementId: "G-EQTX7HH846"
  };

  const firebaseApp = initializeApp(firebaseConfig)

  const db = getFirestore(firebaseApp)

  const auth = getAuth(firebaseApp);

  const provider = new GoogleAuthProvider();

  export { auth, provider}

  export default db;
  