import { initializeApp} from 'firebase/app'
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { getFirestore,doc, getDoc,setDoc, Firestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBoKzQRpnfOkxiWf8jmPOiWYE1-uLg24s8",
    authDomain: "bookmarker-723d6.firebaseapp.com",
    projectId: "bookmarker-723d6",
    storageBucket: "bookmarker-723d6.appspot.com",
    messagingSenderId: "773745882079",
    appId: "1:773745882079:web:fb9600eaac2cc498064a6a"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt:"select_account"
  });

  export const auth = getAuth();
  export const signInWithGooglePopup = () => signInWithPopup(auth,provider);

  export const db = getFirestore();

 export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db,'users',userAuth.uid);
  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());
  } 