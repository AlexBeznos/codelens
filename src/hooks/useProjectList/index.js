import { useEffect, useReducer } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
//import { createFirebaseResource } from '../../utils/cache';

//function normalize(projects) {
  //return Object.entries(projects).map(([id, value]) => ({
    //id,
    //...value,
  //}));
//}

//const projectsResource = createFirebaseResource(() =>
  //firebase.database().ref(`/projects`),
//);

function reducer(state = [], project) {
  return [...state, project];
}
function useProjectList(userUid) {
  const [state, dispatch] = useReducer(reducer, []);

  const pushValue = (snap) => dispatch({ uid: snap.key, ...snap.val() });

  useEffect(() => {
    firebase
      .database()
      .ref('projects/')
      .orderByChild('owner')
      .equalTo(userUid)
      .on('child_added', pushValue)
  }, []);


  return state;
}

export default useProjectList;
