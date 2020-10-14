import * as firebase from "firebase";
import "firebase/database";
import "firebase/auth";

var firebaseConfig  = {
    apiKey: "AIzaSyAZj7RccF1Va_kUpmFE1vlADn3xq3Gw13o",
    authDomain: "dominus-freight.firebaseapp.com",
    databaseURL: "https://dominus-freight.firebaseio.com",
    projectId: "dominus-freight",
    storageBucket: "dominus-freight.appspot.com",
    messagingSenderId: "155397332378",
    appId: "1:155397332378:web:017119f8d084e4292aee23",
    measurementId: "G-EZC03J3VVC"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig );
firebase.analytics();


export default firebase;
// export const auth = firebase.auth();