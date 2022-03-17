// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrxDl2-J3N9kXjPOO5m2lIzp_AEPs4eUs",
  authDomain: "instagram-clone-7229f.firebaseapp.com",
  projectId: "instagram-clone-7229f",
  storageBucket: "instagram-clone-7229f.appspot.com",
  messagingSenderId: "691309441341",
  appId: "1:691309441341:web:0290205450199170c79554"
};

// Initialize Firebase
// * Get Apps fungsinya buat cek apakah kita pernah inisialisasi sebelumnya, kalo belum maka kita inisiasi
// * sekarang, kalo udah ada maka kita pake getApp() buat ambil yang sebelumnya.
// * ini dipakenya untuk next js karena ssr
const app = getApps.length === 0 ?  initializeApp(firebaseConfig) : getApp();
const firestoreDb = getFirestore();
const storage = getStorage();

export {app, firestoreDb, storage};