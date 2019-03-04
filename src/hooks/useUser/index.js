import { useEffect, useReducer } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

const initialState = {
  isLoading: true,
  user: null,
};

function reducer(state = initialState, user) {
  return {
    ...state,
    isLoading: false,
    user,
  };
}

function useUser() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(dispatch);
  }, []);

  return state;
}

export default useUser;
