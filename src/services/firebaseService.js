import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA90mqOe3lyZ6C4LQSzvo0rDTPIIDpKyZA",
    authDomain: "notification-app-6385d.firebaseapp.com",
    databaseURL: "https://notification-app-6385d.firebaseio.com",
    projectId: "notification-app-6385d",
    storageBucket: "notification-app-6385d.appspot.com",
    messagingSenderId: "724319602128",
    appId: "1:724319602128:web:5456a70749c986fd9ea5d5"
  };

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

export function initNotification(){

    Notification.requestPermission().then((permission) =>{
        console.log(permission)
        if(permission === "granted"){
                messaging.getToken().then((currentToken) => {
                    if (currentToken) {
                        console.log("Token")
                        console.log(currentToken)
                    } else {
                    console.log('No Instance ID token available. Request permission to generate one.');
                    }
                }).catch((err) => {
                    console.log('An error occurred while retrieving token. ', err);
                });

        }
    
    })
}