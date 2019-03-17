import useReactRouter from 'use-react-router';
import firebase from 'firebase/app';
import 'firebase/database';
import { createFirebaseResource } from '../../utils/cache';

const projectResource = createFirebaseResource(id =>
  firebase.database().ref(`/projects/${id}`),
);

export default function useProject() {
  const { id } = useReactRouter().match.params;
  return projectResource.read(id);
}
