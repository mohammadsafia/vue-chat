import firebase from 'firebase'
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
let firebaseConfig = {
  apiKey: "AIzaSyDICWhw4SpIqldQVJptKK0MM9pNfHu2vMQ",
  authDomain: "vue-chat-7275c.firebaseapp.com",
  databaseURL: "https://vue-chat-7275c.firebaseio.com",
  projectId: "vue-chat-7275c",
  storageBucket: "vue-chat-7275c.appspot.com",
  messagingSenderId: "416757382308",
  appId: "1:416757382308:web:d4ad2d5f4b01294820fa31",
  measurementId: "G-S503SERTMX"
};
// Initialize Firebase
const firebaseApp =firebase.initializeApp(firebaseConfig);

export default  firebaseApp.firestore()
