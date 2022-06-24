import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBugBkKkPB7WshD86KXWF0QncmUFJg2BMI",
    authDomain: "proyecto-4-restaurante-a-952ae.firebaseapp.com",
    projectId: "proyecto-4-restaurante-a-952ae",
    storageBucket: "proyecto-4-restaurante-a-952ae.appspot.com" ,
    messagingSenderId: "1046938296867",
    appId: "1046938296867:web:86c5cde31716a0c3634796"
  };

  const firebaseApp = initializeApp(firebaseConfig)
  const db = getFirestore( firebaseApp );

  export { db }