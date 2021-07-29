import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';
var firebaseConfig = {
  apiKey: 'AIzaSyCDvgFmkwQJAmCur3PYxiQpAf31Tp9Tx8Q',
  authDomain: 'firegram-b6b17.firebaseapp.com',
  projectId: 'firegram-b6b17',
  storageBucket: 'firegram-b6b17.appspot.com',
  messagingSenderId: '281001002652',
  appId: '1:281001002652:web:cfca7ce78185b6b490cf59',
};
firebase.initializeApp(firebaseConfig);

const projectStorege = firebase.storege();
const porjectFirestore = firebase.firestore();

export { projectStorege, porjectFirestore };
