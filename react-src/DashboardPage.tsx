
import React from 'react';
import KPIOverview from '../dashboard/KPIOverview';
import ProjectMatrix from '../dashboard/ProjectMatrix';
import FinancialCenter from '../dashboard/FinancialCenter';
import Alerts from '../dashboard/Alerts';
import { Project, Alert } from '../../types';
import { mockFinancials, mockProjects } from '../../constants';

const DashboardPage: React.FC<{
    alerts: Alert[],
    projects: Project[],
    financials: typeof mockFinancials,
    onProjectClick: (project: Project) => void,
    setActivePage: (page: string) => void,
    searchTerm: string,
}> = ({ alerts, projects, financials, onProjectClick, setActivePage, searchTerm }) => {
    return (
        <>
            <KPIOverview setActivePage={setActivePage} />
            <Alerts alerts={alerts} projects={projects} onProjectClick={onProjectClick} searchTerm={searchTerm} />
            <ProjectMatrix projects={projects} onProjectClick={onProjectClick} searchTerm={searchTerm} />
            <FinancialCenter financials={financials} />
        </>
    );
};

export default DashboardPage;