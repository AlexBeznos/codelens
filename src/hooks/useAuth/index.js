import firebase from 'firebase/app';
import 'firebase/auth';

const provider = new firebase.auth.GoogleAuthProvider();
const authWithGoogle = () => firebase.auth().signInWithPopup(provider);
const signOut = () => firebase.auth().signOut();

function useAuth() {
  return { authWithGoogle, signOut };
}

export default useAuth;
