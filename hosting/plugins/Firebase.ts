import firebase from "firebase/app";
import "firebase/analytics";

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyDs9yUdtIA2k5MsdKTn3yWxZJrMXl5VVgU",
    authDomain: "going-twilight.firebaseapp.com",
    projectId: "going-twilight",
    storageBucket: "going-twilight.appspot.com",
    messagingSenderId: "464731553021",
    appId: "1:464731553021:web:337982eabdeb4f46245294",
    measurementId: "G-5ZTX5RH151",
  });

  firebase.analytics();
}
