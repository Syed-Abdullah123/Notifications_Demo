import AsyncStorage from '@react-native-async-storage/async-storage';
import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY!,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN!,
//   projectId: process.env.FIREBASE_PROJECT_ID!,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET!,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID!,
//   appId: process.env.FIREBASE_APP_ID!,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID!
// };

const firebaseConfig = {
  apiKey: "AIzaSyAWL3ji-XuQ4oWct01gHkGYqimSOcR_mdk",
  authDomain: "scenique-b1005.firebaseapp.com",
  projectId: "scenique-b1005",
  storageBucket: "scenique-b1005.firebasestorage.app",
  messagingSenderId: "381666480",
  appId: "1:381666480:web:bbce6a65c2aecac0ebe775",
  measurementId: "G-NTKE9WF3C8"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(AsyncStorage)
});
export const FIREBASE_DB = getFirestore(FIREBASE_APP);