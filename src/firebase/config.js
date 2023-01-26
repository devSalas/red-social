import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import {v4 as uuid} from 'uuid'

const firebaseConfig = {
  apiKey: "AIzaSyBHM3Y0Z2rA3nVsW__B2Ks25lE5Ses50aQ",
  authDomain: "red-social-75dc8.firebaseapp.com",
  projectId: "red-social-75dc8",
  storageBucket: "red-social-75dc8.appspot.com",
  messagingSenderId: "601193123735",
  appId: "1:601193123735:web:7ad221229c196a05f17ed2"
};

const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)

export async function subirArchivos(file) {
  
  const storageRef = ref(storage, `posts/${uuid()}`)
  await uploadBytes(storageRef, file)
  const url = await getDownloadURL(storageRef)
  return url

}