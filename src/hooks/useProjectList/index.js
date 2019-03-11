import { useReducer, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

const initialState = {
  isLoading: true,
  projects: null,
};

function reducer(state = initialState, projects) {
  return {
    ...state,
    isLoading: false,
    projects,
  };
}

function normalize(projects) {
  return Object.entries(projects).map(([id, value]) => ({
    id,
    ...value,
  }));
}

function useProjectList() {
  const [state, setState] = useReducer(reducer, initialState);

  useEffect(() => {
    const projectsRef = firebase.database().ref('/projects');
    const onValue = snapshot => {
      setState(normalize(snapshot.val()));
    };

    projectsRef.on('value', onValue);

    return () => projectsRef.off('value', onValue);
  }, []);

  return state;
}

export default useProjectList;
