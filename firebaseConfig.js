import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'api-key',
  authDomain: 'jp-goals.firebaseapp.com',
  databaseURL: 'https://project-id.firebaseio.com',
  projectId: 'jp-goals',
  storageBucket: 'jp-goals.firebase.app',
  messagingSenderId: 'sender-id',
  appId: 'app-id',
  measurementId: 'G-measurement-id',
};

const app = initializeApp(firebaseConfig);
// For more information on how to access Firebase in your project,
// see the Firebase documentation: https://firebase.google.com/docs/web/setup#access-firebase
