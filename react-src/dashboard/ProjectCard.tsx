import React from 'react';
import { Project, ProjectStatus } from '../../types';

const healthColorMap: { [key in Project['health']]: string } = {
    green: 'bg-success',
    yellow: 'bg-warning',
    red: 'bg-danger',
};

const statusTextMap: { [key in ProjectStatus]: string } = {
    [ProjectStatus.OnTrack]: 'text-success',
    [ProjectStatus.AtRisk]: 'text-warning',
    [ProjectStatus.OffTrack]: 'text-danger',
    [ProjectStatus.Completed]: 'text-primary',
    [ProjectStatus.BehindSchedule]: 'text-warning',
    [ProjectStatus.AheadOfSchedule]: 'text-success',
    [ProjectStatus.Planning]: 'text-text-secondary',
    [ProjectStatus.InProgress]: 'text-primary',
};

const ProjectCard: React.FC<{ project: Project; onProjectClick: (project: Project) => void; }> = ({ project, onProjectClick }) => {
    return (
        <div 
            className="bg-surface rounded-lg p-5 flex flex-col justify-between hover:shadow-lg hover:ring-2 hover:ring-primary transition-all duration-300 cursor-pointer"
            onClick={() => onProjectClick(project)}
        >
            <div>
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <h4 className="font-bold text-lg text-text-primary">{project.name}</h4>
                        <p className="text-sm text-text-secondary">{project.id}</p>
                    </div>
                    <span className={`h-3.5 w-3.5 rounded-full ${healthColorMap[project.health]} mt-1`}></span>
                </div>
                <p className="text-sm text-text-secondary mb-4">{project.phase}</p>
            </div>
            <div>
                <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1 text-text-secondary">
                        <span>Progress</span>
                        <span className="font-semibold text-text-primary">{project.completion}%</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                        <div className="bg-primary h-2 rounded-full" style={{ width: `${project.completion}%` }}></div>
                    </div>
                </div>
                <div className="border-t border-border pt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
                    <div>
                        <p className="text-text-secondary">Next Milestone</p>
                        <p className="font-semibold text-text-primary">{project.nextMilestone}</p>
                    </div>
                     <div>
                        <p className="text-text-secondary">Due Date</p>
                        <p className="font-semibold text-text-primary">{project.endDate}</p>
                    </div>
                    <div>
                        <p className="text-text-secondary">Budget</p>
                        <p className="font-semibold text-text-primary">${project.spent.toLocaleString()} / ${project.budget.toLocaleString()}</p>
                    </div>
                    <div>
                        <p className="text-text-secondary">Status</p>
                        <p className={`font-semibold ${statusTextMap[project.status]}`}>{project.status}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;