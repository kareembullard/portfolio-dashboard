
import React from 'react';
import { Project, ProjectStatus } from '../../types';
import { XMarkIcon } from '@heroicons/react/24/solid';

const healthColorMap: { [key in Project['health']]: { text: string; bg: string; } } = {
    green: { text: 'text-success', bg: 'bg-success/10' },
    yellow: { text: 'text-warning', bg: 'bg-warning/10' },
    red: { text: 'text-danger', bg: 'bg-danger/10' },
};

const ProgressBar: React.FC<{ value: number; color?: string }> = ({ value, color = 'bg-primary' }) => (
    <div className="w-full bg-border rounded-full h-2">
        <div className={`${color} h-2 rounded-full`} style={{ width: `${value}%` }}></div>
    </div>
);

const DetailItem: React.FC<{ label: string; value: React.ReactNode }> = ({ label, value }) => (
    <div>
        <p className="text-xs text-text-secondary uppercase tracking-wider">{label}</p>
        <p className="font-semibold text-text-primary">{value}</p>
    </div>
);

const ProjectDetailModal: React.FC<{ project: Project | null; onClose: () => void }> = ({ project, onClose }) => {
    if (!project) return null;
    
    const budgetUtilization = (project.spent / project.budget) * 100;
    const health = healthColorMap[project.health];

    return (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" onClick={onClose}>
            <div
                className="bg-surface w-full max-w-2xl rounded-xl shadow-2xl transform transition-all duration-300 ease-in-out"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-4 border-b border-border">
                    <div>
                        <h2 className="text-xl font-bold text-text-primary">{project.name}</h2>
                        <p className="text-sm text-text-secondary">{project.id}</p>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-1 rounded-full text-text-secondary hover:bg-border transition-colors"
                    >
                        <XMarkIcon className="h-6 w-6" />
                    </button>
                </div>

                {/* Body */}
                <div className="p-6 space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className={`p-3 rounded-md ${health.bg}`}>
                            <DetailItem label="Status" value={<span className={health.text}>{project.status}</span>} />
                        </div>
                        <div className="bg-background/50 p-3 rounded-md">
                           <DetailItem label="Project Lead" value={project.lead} />
                        </div>
                        <div className="bg-background/50 p-3 rounded-md">
                            <DetailItem label="End Date" value={project.endDate} />
                        </div>
                    </div>

                    <div className="space-y-4">
                         <div>
                            <div className="flex justify-between items-end mb-1">
                                <p className="text-sm font-medium text-text-secondary">Completion</p>
                                <p className="text-lg font-bold text-text-primary">{project.completion}%</p>
                            </div>
                            <ProgressBar value={project.completion} />
                        </div>
                        <div>
                            <div className="flex justify-between items-end mb-1">
                                <p className="text-sm font-medium text-text-secondary">Budget Utilization</p>
                                <p className="text-lg font-bold text-text-primary">${project.spent.toLocaleString()} / <span className="text-sm font-normal text-text-secondary">${project.budget.toLocaleString()}</span></p>
                            </div>
                            <ProgressBar value={budgetUtilization} color="bg-success" />
                        </div>
                    </div>
                    
                    <div className="border-t border-border pt-4">
                        <DetailItem label="Next Milestone" value={project.nextMilestone} />
                    </div>
                </div>
                
                {/* Footer */}
                <div className="p-4 bg-background/30 rounded-b-xl flex justify-end gap-3">
                    <button className="bg-border text-text-primary font-semibold py-2 px-4 rounded-lg hover:bg-border/70 transition-colors">
                        View Full Report
                    </button>
                    <button className="bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary-hover transition-colors">
                        Update Project
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailModal;
