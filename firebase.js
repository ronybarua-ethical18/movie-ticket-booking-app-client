import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCEv8Pol6raVCrtIDq9z1xmsa3MLvv8xSs",
  authDomain: "ticket-counter-merng-app.firebaseapp.com",
  projectId: "ticket-counter-merng-app",
  storageBucket: "ticket-counter-merng-app.appspot.com",
  messagingSenderId: "690560244440",
  appId: "1:690560244440:web:537b2f1a9379cde66c15ad",
};
firebase.initializeApp(firebaseConfig);
storage = firebase.storage();

export default storage;
