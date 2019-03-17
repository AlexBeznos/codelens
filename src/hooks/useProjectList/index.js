import firebase from 'firebase/app';
import 'firebase/database';
import { createFirebaseResource } from '../../utils/cache';

function normalize(projects) {
  return Object.entries(projects).map(([id, value]) => ({
    id,
    ...value,
  }));
}

const projectsResource = createFirebaseResource(() =>
  firebase.database().ref(`/projects`),
);

function useProjectList() {
  return normalize(projectsResource.read());
}

export default useProjectList;
