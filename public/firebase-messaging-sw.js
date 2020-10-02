importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyA90mqOe3lyZ6C4LQSzvo0rDTPIIDpKyZA",
  authDomain: "notification-app-6385d.firebaseapp.com",
  databaseURL: "https://notification-app-6385d.firebaseio.com",
  projectId: "notification-app-6385d",
  storageBucket: "notification-app-6385d.appspot.com",
  messagingSenderId: "724319602128",
  appId: "1:724319602128:web:5456a70749c986fd9ea5d5",
};

firebase.initializeApp(firebaseConfig);
firebase.messaging();
