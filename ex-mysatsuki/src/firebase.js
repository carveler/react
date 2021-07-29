import firebase from 'firebase/app';

import 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBSE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBSE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBSE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBSE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBSE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBSE_APP_ID,
};
const app = firebase.initializeApp(firebaseConfig);

export const auth = app.auth();
export default app;
