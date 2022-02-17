import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCDPARJ80vSDreOk8QA5NvNaydCLif2pgo",
    authDomain: "register1-b6689.firebaseapp.com",
    projectId: "register1-b6689",
    storageBucket: "register1-b6689.appspot.com",
    messagingSenderId: "661249889616",
    appId: "1:661249889616:web:30ff7c9904c81beb8a4855",
    measurementId: "G-99MLEL5NYD"
  };

  const app = initializeApp(firebaseConfig)

 export const auth=getAuth(app)