
import React, { useState, useMemo } from 'react';
import { Project } from '../../types';
import ProjectCard from '../dashboard/ProjectCard';

const ProjectsPage: React.FC<{ projects: Project[], onProjectClick: (project: Project) => void; searchTerm: string; }> = ({ projects, onProjectClick, searchTerm }) => {
    const [statusFilter, setStatusFilter] = useState('all');
    const [sortKey, setSortKey] = useState('name');
    
    const filteredAndSortedProjects = useMemo(() => {
        let tempProjects = [...projects];

        if (searchTerm) {
            const lowercasedFilter = searchTerm.toLowerCase();
            tempProjects = tempProjects.filter(p =>
                p.name.toLowerCase().includes(lowercasedFilter) ||
                p.id.toLowerCase().includes(lowercasedFilter) ||
                p.phase.toLowerCase().includes(lowercasedFilter) ||
                p.status.toLowerCase().includes(lowercasedFilter)
            );
        }

        if (statusFilter !== 'all') {
            tempProjects = tempProjects.filter(p => p.health === statusFilter);
        }

        tempProjects.sort((a, b) => {
            switch (sortKey) {
                case 'name': return a.name.localeCompare(b.name);
                case 'completion': return b.completion - a.completion;
                case 'endDate': return new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
                case 'budget': return b.budget - a.budget;
                default: return 0;
            }
        });
        
        return tempProjects;
    }, [projects, statusFilter, sortKey, searchTerm]);

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                 <h1 className="text-2xl font-bold text-text-primary">Projects</h1>
                 <button className="bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary-hover transition-colors">Add Project</button>
            </div>
            <div className="bg-surface rounded-lg p-4 mb-6 flex items-center gap-6">
                <div className="flex-1">
                    <label htmlFor="statusFilter" className="block text-sm font-medium text-text-secondary mb-1">Filter by Status</label>
                    <select id="statusFilter" value={statusFilter} onChange={e => setStatusFilter(e.target.value)} className="w-full bg-background border border-border rounded-md px-3 py-2 text-text-primary focus:ring-primary focus:border-primary">
                        <option value="all">All</option>
                        <option value="green">On Track</option>
                        <option value="yellow">At Risk</option>
                        <option value="red">Off Track</option>
                    </select>
                </div>
                <div className="flex-1">
                    <label htmlFor="sortKey" className="block text-sm font-medium text-text-secondary mb-1">Sort by</label>
                    <select id="sortKey" value={sortKey} onChange={e => setSortKey(e.target.value)} className="w-full bg-background border border-border rounded-md px-3 py-2 text-text-primary focus:ring-primary focus:border-primary">
                        <option value="name">Project Name</option>
                        <option value="completion">Completion %</option>
                        <option value="endDate">Due Date</option>
                        <option value="budget">Budget</option>
                    </select>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredAndSortedProjects.length > 0 ? (
                    filteredAndSortedProjects.map((project) => (
                        <ProjectCard key={project.id} project={project} onProjectClick={onProjectClick} />
                    ))
                ) : (
                    <p className="text-text-secondary md:col-span-2 text-center py-8">No projects match your criteria.</p>
                )}
            </div>
        </div>
    );
};

export default ProjectsPage;