
import React from 'react';
import { Project } from '../../types';
import ProjectCard from './ProjectCard';

const ProjectMatrix: React.FC<{ projects: Project[], onProjectClick: (project: Project) => void; searchTerm: string; }> = ({ projects, onProjectClick, searchTerm }) => {
    
    const filteredProjects = projects.filter(project =>
        project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.id.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="mt-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold text-text-primary">Active Projects</h2>
                <button className="bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary-hover transition-colors">Add Project</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} onProjectClick={onProjectClick} />
                    ))
                ) : (
                     <p className="text-text-secondary md:col-span-2 text-center py-8">No projects match your search.</p>
                )}
            </div>
        </div>
    );
};

export default ProjectMatrix;