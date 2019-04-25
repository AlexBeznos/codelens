import React, { useContext } from 'react';
import useProjectsList from '../../hooks/useProjectList';
import ProjectCard from '../../components/ProjectCard';
import UserContext from '../../contexts/User';

function DashboardPage() {
  const user = useContext(UserContext);
  const projects = useProjectsList(user.uid);

  return (
    <div>
      <div>DashboardPage</div>
      <div>
        {projects.map(project => (
          <ProjectCard
            key={project.uid}
            id={project.uid}
            title={project.title}
            mode={project.language}
          />
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
