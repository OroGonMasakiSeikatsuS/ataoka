import firebase from "firebase"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAEhyByTPsob1LQiFt3ro3TTy0vjJxZK5w",
  authDomain: "ataoka-5c6eb.firebaseapp.com",
  projectId: "ataoka-5c6eb",
  storageBucket: "ataoka-5c6eb.appspot.com",
  messagingSenderId: "422153424926",
  appId: "1:422153424926:web:223f850f6cdd06fe2a9e0f",
}

//  moviesのfirestore
// const firebaseConfig = {
//   apiKey: "AIzaSyBvIEMEloczxRTVeY6lBO1cUJqEh2pwTS0",
//   authDomain: "ataoka-334208.firebaseapp.com",
//   projectId: "ataoka-334208",
//   storageBucket: "ataoka-334208.appspot.com",
//   messagingSenderId: "205098168586",
//   appId: "1:205098168586:web:afe6cbcff017f323ea8af3",
//   measurementId: "G-JL1BSQEB7P",
// }

firebase.initializeApp(firebaseConfig)
