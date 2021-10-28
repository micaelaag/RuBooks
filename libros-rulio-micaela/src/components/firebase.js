//Tenes que traer a firebase
import firebase from "firebase/app"

//Tenes que traer el servicio que vas a usar
import "firebase/firestore"

//Tenes que inicializar la app
const firebaseConfig = {
    apiKey: "AIzaSyCAFEt-xx2hsubjli3soL-Uxy881Ju8FKk",
    authDomain: "rubooks-690fc.firebaseapp.com",
    projectId: "rubooks-690fc",
    storageBucket: "rubooks-690fc.appspot.com",
    messagingSenderId: "155489401875",
    appId: "1:155489401875:web:748e5094555fe9f97353e6"
  
}
const app = firebase.initializeApp(firebaseConfig)


export const firestore = firebase.firestore(app)

