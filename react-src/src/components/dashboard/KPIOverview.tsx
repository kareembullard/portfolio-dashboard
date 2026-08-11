
import React from 'react';
import { portfolioHealth, revenueTarget, currentRevenue, kpis } from '../../constants';

const KpiCard: React.FC<{ children: React.ReactNode, title: string, className?: string, onClick?: () => void }> = ({ children, title, className, onClick }) => (
    <div className={`bg-surface rounded-lg p-4 sm:p-6 transition-shadow hover:shadow-xl ${onClick ? 'cursor-pointer' : ''} ${className}`} onClick={onClick}>
        <h3 className="text-md font-semibold text-text-secondary mb-4">{title}</h3>
        {children}
    </div>
);

const PortfolioHealthCard = () => {
    const score = portfolioHealth;
    const scorePercentage = (score / 10) * 100;
    const style = { background: `conic-gradient(from 180deg, #1FB8CD ${scorePercentage * 1.8}deg, #3A3C3C 0deg)` };

    return (
        <KpiCard title="Portfolio Health">
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="relative w-32 h-32">
                    <div className="absolute inset-0 rounded-full" style={style}></div>
                    <div className="absolute inset-2 bg-surface rounded-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold text-text-primary">{score.toFixed(1)}</span>
                    </div>
                </div>
                <div className="bg-success/10 text-success text-sm font-semibold px-4 py-1 rounded-full">Good</div>
            </div>
        </KpiCard>
    );
};

const RevenueProgressCard: React.FC<{onClick?: () => void}> = ({onClick}) => {
    const progress = (currentRevenue / revenueTarget) * 100;
    return (
        <KpiCard title="Revenue Progress" onClick={onClick}>
            <div className="flex flex-col justify-between h-full">
                <div className="text-right text-sm text-text-secondary mb-2">Target: ${revenueTarget.toLocaleString()}</div>
                <div className="w-full bg-border rounded-full h-2.5 mb-2">
                    <div className="bg-primary h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                </div>
                <div className="text-center text-xl font-semibold text-text-primary">
                    ${currentRevenue.toLocaleString()} / <span className="text-base text-text-secondary">${revenueTarget.toLocaleString()}</span>
                </div>
            </div>
        </KpiCard>
    );
};

const ProjectStatusCard: React.FC<{onClick?: () => void}> = ({onClick}) => {
    const statuses = [
        { label: 'On Track', count: kpis.projectsOnTrack, color: 'bg-success' },
        { label: 'At Risk', count: kpis.projectsAtRisk, color: 'bg-warning' },
        { label: 'Critical', count: kpis.projectsCritical, color: 'bg-danger' },
    ];

    return (
        <KpiCard title="Project Status" onClick={onClick}>
            <div className="space-y-4 pt-2">
                {statuses.map(status => (
                    <div key={status.label} className="flex items-center">
                        <span className={`h-3 w-3 rounded-full ${status.color}`}></span>
                        <span className="ml-3 text-2xl font-bold text-text-primary">{status.count}</span>
                        <span className="ml-2 text-md text-text-secondary">{status.label}</span>
                    </div>
                ))}
            </div>
        </KpiCard>
    );
};

const ResourceUtilizationCard: React.FC<{onClick?: () => void}> = ({onClick}) => {
    const value = kpis.resourceUtilization;
    const rotation = (value / 100) * 180;
    const style = { background: `conic-gradient(from 180deg, #1FB8CD ${rotation}deg, #3A3C3C 0deg)` };

    return (
        <KpiCard title="Resource Utilization" onClick={onClick}>
             <div className="flex items-end justify-center h-full">
                <div className="w-40 h-20 relative">
                    <div className="absolute inset-0 rounded-t-full" style={style}></div>
                    <div className="absolute inset-x-2 bottom-0 h-16 bg-surface rounded-t-full"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                         <span className="text-3xl font-bold text-text-primary -mb-4">{value}%</span>
                    </div>
                </div>
            </div>
        </KpiCard>
    );
};

const KPIOverview: React.FC<{setActivePage: (page: string) => void}> = ({ setActivePage }) => {
    return (
        <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            <PortfolioHealthCard />
            <RevenueProgressCard onClick={() => setActivePage('Financials')} />
            <ProjectStatusCard onClick={() => setActivePage('Projects')} />
            <ResourceUtilizationCard onClick={() => setActivePage('Analytics')} />
        </div>
    );
};

export default KPIOverview;
