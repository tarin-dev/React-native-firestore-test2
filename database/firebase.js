import * as firebase from 'firebase';
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore';



const firebaseConfig = initializeApp({
    apiKey: "AIzaSyDmlRIm7z_F_ZXxlh2JV0bukYa-_cBJnBk",
    authDomain: "mclerks-beta.firebaseapp.com",
    projectId: "mclerks-beta",
    storageBucket: "mclerks-beta.appspot.com",
    messagingSenderId: "530710846605",
    appId: "1:530710846605:web:66c420bec4de5f302296c4",
    measurementId: "G-KF53B2F8VR"
});

const firestore = getFirestore();

