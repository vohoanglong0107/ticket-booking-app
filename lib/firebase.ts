import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCSdkSxoGIxpwjknKk52BeWzr8i8tL4o1c",
  authDomain: "ticket-booking-e8484.firebaseapp.com",
  projectId: "ticket-booking-e8484",
  storageBucket: "ticket-booking-e8484.appspot.com",
  messagingSenderId: "2689793450",
  appId: "1:2689793450:web:f67251d3e841e8f7f5ffd3",
};

export const firebase = initializeApp(firebaseConfig);
