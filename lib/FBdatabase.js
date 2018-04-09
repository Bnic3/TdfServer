/**
 * Created by john.nana on 1/1/2018.
 */

var firebase = require("firebase");


//configuring firebase
// Initialize Firebase
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDjR2wKYXwKp3pPoGWNDOES8QQqRng6lOc",
    authDomain: "tdfapp-84701.firebaseapp.com",
    databaseURL: "https://tdfapp-84701.firebaseio.com",
    projectId: "tdfapp-84701",
    storageBucket: "tdfapp-84701.appspot.com",
    messagingSenderId: "322761703736"
  };
  firebase.initializeApp(config);

// var config = {
//     apiKey: process.env.FBDB_API_KEY,
//     authDomain: process.env.FBDB_AUTH_DOMAIN,
//     databaseURL: process.env.FBDB_DB_URL,
//     projectId: process.env.FBDB_PROJ_ID,
//     storageBucket: process.env.FBDB_BUCKET,
//     messagingSenderId: process.env.FBDB_SENDER_ID
// };
// firebase.initializeApp(config);


//initailize firebase-admin sdk
// admin.initializeApp({
//     credential: admin.credential.cert(serviceAccount),
//     databaseURL: process.env.FBDB_DB_URL
// });

module.exports = {firebase}
