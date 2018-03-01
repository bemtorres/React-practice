import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

firebase.initializeApp({
    apiKey: "AIzaSyDBkjE8MyuMMfa2vO7rDOmn8T7hhihcaL4",
    authDomain: "photoapp-504b0.firebaseapp.com",
    databaseURL: "https://photoapp-504b0.firebaseio.com",
    projectId: "photoapp-504b0",
    storageBucket: "photoapp-504b0.appspot.com",
    messagingSenderId: "373727940221"
  });

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
