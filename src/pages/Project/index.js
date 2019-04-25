import React from 'react';
import ProjectEditor from './ProjectEditor';
import ProjectNotFound from './ProjectNotFound';
import useProject from '../../hooks/useProject';

function EditPane() {
  const project = useProject();
  return project ? <ProjectEditor {...project} /> : <ProjectNotFound />;
}

export default EditPane;
