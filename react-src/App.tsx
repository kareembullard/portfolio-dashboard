
import React, { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Header from './components/layout/Header';
import SmartAssistantButton from './components/assistant/SmartAssistantButton';
import SmartAssistant from './components/assistant/SmartAssistant';
import { mockProjects, mockAlerts, mockFinancials, mockTasks } from './constants';
import { Project } from './types';

import DashboardPage from './components/pages/DashboardPage';
import ProjectsPage from './components/pages/ProjectsPage';
import FinancialsPage from './components/pages/FinancialsPage';
import AnalyticsPage from './components/pages/AnalyticsPage';
import SettingsPage from './components/pages/SettingsPage';
import WikiPage from './components/pages/WikiPage';
import ProjectDetailModal from './components/dashboard/ProjectDetailModal';

const App: React.FC = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isAssistantOpen, setAssistantOpen] = useState(false);
    const [activePage, setActivePage] = useState('Dashboard');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    const portfolioData = {
        projects: mockProjects,
        alerts: mockAlerts,
        financials: mockFinancials,
        tasks: mockTasks,
    };

    const handleProjectClick = (project: Project) => {
        setSelectedProject(project);
    };

    const handlePageChange = (page: string) => {
        setActivePage(page);
        setSearchTerm(''); // Reset search on page change
    };

    const renderPage = () => {
        switch (activePage) {
            case 'Dashboard':
                return <DashboardPage 
                            searchTerm={searchTerm}
                            alerts={mockAlerts} 
                            projects={mockProjects} 
                            financials={mockFinancials}
                            onProjectClick={handleProjectClick}
                            setActivePage={handlePageChange}
                        />;
            case 'Projects':
                return <ProjectsPage searchTerm={searchTerm} projects={mockProjects} onProjectClick={handleProjectClick} />;
            case 'Financials':
                return <FinancialsPage financials={mockFinancials} />;
            case 'Analytics':
                return <AnalyticsPage searchTerm={searchTerm} tasks={mockTasks} />;
            case 'Settings':
                return <SettingsPage />;
            case 'Wiki':
                return <WikiPage />;
            default:
                return <DashboardPage 
                            searchTerm={searchTerm}
                            alerts={mockAlerts} 
                            projects={mockProjects} 
                            financials={mockFinancials}
                            onProjectClick={handleProjectClick}
                            setActivePage={handlePageChange}
                        />;
        }
    };

    return (
        <div className="flex h-screen bg-background font-sans text-text-primary">
            <Sidebar 
                sidebarOpen={sidebarOpen} 
                setSidebarOpen={setSidebarOpen} 
                activePage={activePage}
                setActivePage={handlePageChange}
            />

            <div className="flex-1 flex flex-col overflow-hidden">
                <Header 
                    setSidebarOpen={setSidebarOpen} 
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                />

                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background">
                    <div className="container mx-auto px-6 py-8">
                        {renderPage()}
                    </div>
                </main>
            </div>

            <SmartAssistantButton onClick={() => setAssistantOpen(true)} />
            <SmartAssistant 
                isOpen={isAssistantOpen} 
                onClose={() => setAssistantOpen(false)}
                portfolioData={portfolioData}
            />
            <ProjectDetailModal 
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />
        </div>
    );
};

export default App;