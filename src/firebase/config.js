import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyAs00-PTGVnYmMGT2bx03xM7fRLsbBNcx8',
  authDomain: 'readinglistapp-c6162.firebaseapp.com',
  projectId: 'readinglistapp-c6162',
  storageBucket: 'readinglistapp-c6162.appspot.com',
  messagingSenderId: '489686519443',
  appId: '1:489686519443:web:5c48086080735ccf2e8766',
}

// initialise firebase app with config
initializeApp(firebaseConfig)

// init firestore database
const db = getFirestore()

// init firebase auth
const auth = getAuth()

export { db, auth }
