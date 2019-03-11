import React from 'react';
import useProjectsList from '../../hooks/useProjectList';
import ProjectCard from '../../components/ProjectCard';

function DashboardPage() {
  const { projects, isLoading } = useProjectsList();

  if (isLoading) {
    return 'loading...';
  }

  return (
    <div>
      <div>DashboardPage</div>
      <div>
        {projects.map(project => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            mode={project.language}
          />
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
