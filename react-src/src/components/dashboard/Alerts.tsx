
import React from 'react';
import { Alert, Project } from '../../types';

const AlertsComponent: React.FC<{ alerts: Alert[], projects: Project[], onProjectClick: (project: Project) => void; searchTerm: string; }> = ({ alerts, projects, onProjectClick, searchTerm }) => {
    const alertConfig = {
        warning: { borderColor: 'border-danger', bgColor: 'bg-danger/10', textColor: 'text-danger' },
        info: { borderColor: 'border-text-secondary', bgColor: 'bg-text-secondary/10', textColor: 'text-text-secondary' },
        success: { borderColor: 'border-success', bgColor: 'bg-success/10', textColor: 'text-success' },
    };
    
    const renderAlertMessage = (message: string) => {
        const projectRegex = /([A-Z]{3,10}-\d{4})/g;
        const parts = message.split(projectRegex);
        
        return parts.map((part, index) => {
            if (part.match(projectRegex)) {
                const project = projects.find(p => p.id === part);
                if (project) {
                    return (
                        <button 
                            key={index} 
                            onClick={() => onProjectClick(project)}
                            className="font-bold underline hover:text-primary transition-colors duration-200 mx-1"
                        >
                            {part}
                        </button>
                    );
                }
            }
            return <span key={index}>{part}</span>;
        });
    };

    const filteredAlerts = alerts.filter(alert => 
        alert.message.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="my-8">
            <h2 className="text-xl font-semibold text-text-primary mb-4">Critical Alerts</h2>
            <div className="space-y-3">
                {filteredAlerts.length > 0 ? (
                    filteredAlerts.map(alert => {
                        const config = alertConfig[alert.type];
                        const Icon = alert.icon;
                        return (
                            <div key={alert.id} className={`flex items-center p-4 rounded-md border-l-4 ${config.borderColor} ${config.bgColor}`}>
                                <Icon className={`h-5 w-5 mr-4 flex-shrink-0 ${config.textColor}`} />
                                <span className="text-sm text-text-primary">{renderAlertMessage(alert.message)}</span>
                            </div>
                        );
                    })
                ) : (
                    <p className="text-text-secondary text-center py-4">No alerts match your search.</p>
                )}
            </div>
        </div>
    );
};

export default AlertsComponent;