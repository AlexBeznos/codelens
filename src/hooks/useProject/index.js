import { useReducer, useEffect } from 'react';
import useReactRouter from 'use-react-router';
import firebase from 'firebase/app';
import 'firebase/database';

const initialState = {
  isLoading: true,
  project: null,
};

function reducer(state = initialState, project) {
  return {
    ...state,
    isLoading: false,
    project,
  };
}

function useProject() {
  const [state, setState] = useReducer(reducer, initialState);
  const { match } = useReactRouter();
  const { id } = match.params;

  useEffect(() => {
    if (!!id) {
      const projectRef = firebase.database().ref(`/projects/${id}`);
      const onValue = snapshot => {
        setState({ uid: id, ...snapshot.val() });
      };

      projectRef.on('value', onValue);

      return () => projectRef.off('value', onValue);
    }
  }, [id]);

  return state;
}

export default useProject;
