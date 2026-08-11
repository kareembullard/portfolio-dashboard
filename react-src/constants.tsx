import React from 'react';
import { Project, Kpi, Alert, FinancialData, Task, ProjectStatus } from './types';

// Data for design
export const portfolioHealth = 8.1;
export const revenueTarget = 5000;
export const currentRevenue = 4150;

export const mockProjects: Project[] = [
    { id: 'GDCCSI-2025', name: "Gem Dropper's Content Initiative", phase: 'Network, Conduct', health: 'green', status: ProjectStatus.OnTrack, completion: 65, budget: 3500, spent: 2100, lead: 'Kareem B.', endDate: '2025-06-31', nextMilestone: 'Finalize Ebook Task Lists' },
    { id: 'SALES-2025', name: 'Digital Products Sales Target', phase: 'Conduct, Control', health: 'green', status: ProjectStatus.OnTrack, completion: 83, budget: 1000, spent: 450, lead: 'Kareem B.', endDate: '2025-07-01', nextMilestone: 'Final Q3 Push' },
    { id: 'CANNON-2025', name: 'Get in the Cannon Project', phase: 'Market, Conduct', health: 'green', status: ProjectStatus.InProgress, completion: 40, budget: 5000, spent: 1500, lead: 'Kareem B.', endDate: '2025-12-31', nextMilestone: 'MVP Launch' },
    { id: 'NCA-2025', name: 'Networking & Client Acquisition', phase: 'Conduct', health: 'green', status: ProjectStatus.InProgress, completion: 50, budget: 2500, spent: 1000, lead: 'Kareem B.', endDate: '2025-12-31', nextMilestone: 'Sign 5 New Clients' },
    { id: 'AMLS-2025', name: 'Airtable Multi-Layered System', phase: 'Setup', health: 'green', status: ProjectStatus.OnTrack, completion: 90, budget: 1200, spent: 1100, lead: 'Kareem B.', endDate: '2025-08-30', nextMilestone: 'Deploy Dashboard v1' },
    { id: 'MEMOIR-2025', name: 'Memoir Writing', phase: 'Document, Develop', health: 'green', status: ProjectStatus.InProgress, completion: 15, budget: 500, spent: 50, lead: 'Kareem B.', endDate: '2026-12-31', nextMilestone: 'Complete First Draft' },
    { id: 'CREATIVE-2025', name: 'Creative Resurgence Epic', phase: 'Conduct', health: 'green', status: ProjectStatus.OnTrack, completion: 70, budget: 3000, spent: 1800, lead: 'Kareem B.', endDate: '2025-12-31', nextMilestone: 'Gallery Showcase' },
    { id: 'CERT-2026', name: 'Professional Certifications Renewal', phase: 'Conduct, Educate', health: 'yellow', status: ProjectStatus.AtRisk, completion: 20, budget: 800, spent: 150, lead: 'Kareem B.', endDate: '2026-02-01', nextMilestone: 'Pass CompTIA A+ Exam' },
    { id: 'Suno-EXP-2025', name: 'Suno Export & Music Management', phase: 'Conduct', health: 'green', status: ProjectStatus.OnTrack, completion: 55, budget: 2000, spent: 900, lead: 'Kareem B.', endDate: '2025-12-31', nextMilestone: 'Release 10 Edited Tracks' },
    { id: 'TMB-2025', name: 'Automation & Bot Development', phase: 'Develop, Setup', health: 'green', status: ProjectStatus.InProgress, completion: 45, budget: 1500, spent: 600, lead: 'Kareem B.', endDate: '2025-11-30', nextMilestone: 'Deploy Task Merging Bot' },
    { id: 'CH7-BK-2025', name: 'Financial Management (CH7-BK-2025)', phase: 'Setup, Conduct', health: 'yellow', status: ProjectStatus.AtRisk, completion: 30, budget: 2000, spent: 1800, lead: 'Kareem B.', endDate: '2025-12-31', nextMilestone: 'Finalize Bankruptcy Process' },
];

export const kpis = {
  projectsOnTrack: mockProjects.filter(p => p.health === 'green').length,
  projectsAtRisk: mockProjects.filter(p => p.health === 'yellow').length,
  projectsCritical: mockProjects.filter(p => p.health === 'red').length,
  resourceUtilization: 87,
};

const WarningIcon = (props: React.SVGProps<SVGSVGElement>) => <svg fill="currentColor" viewBox="0 0 20 20" {...props}><path fillRule="evenodd" d="M8.257 3.099c.625-1.09 2.13-1.09 2.755 0l6.92 12.11a1.65 1.65 0 01-1.378 2.54H2.715a1.65 1.65 0 01-1.378-2.54L8.257 3.099zM9 13.5a1 1 0 112 0 1 1 0 01-2 0zm1-5.25a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5z" clipRule="evenodd" /></svg>;
const InfoIcon = (props: React.SVGProps<SVGSVGElement>) => <svg fill="currentColor" viewBox="0 0 20 20" {...props}><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" /></svg>;
const CheckIcon = (props: React.SVGProps<SVGSVGElement>) => <svg fill="currentColor" viewBox="0 0 20 20" {...props}><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>;

export const mockAlerts: Alert[] = [
    { id: '1', type: 'warning', message: 'CERT-2026 certification deadline is approaching (Feb 1, 2026).', icon: WarningIcon },
    { id: '2', type: 'warning', message: 'CH7-BK-2025 has high budget utilization. Review spending.', icon: WarningIcon },
    { id: '3', type: 'success', message: 'AMLS-2025 is ahead of schedule - early completion expected.', icon: CheckIcon },
];

export const mockFinancials = {
    revenueData: [
        { name: 'Jan', revenue: 150 },
        { name: 'Feb', revenue: 320 },
        { name: 'Mar', revenue: 580 },
        { name: 'Apr', revenue: 950 },
        { name: 'May', revenue: 1250 },
        { name: 'Jun', revenue: 2100 },
        { name: 'Jul', revenue: 4150 },
    ],
    budgetAllocation: [
        { name: 'Content (GDCCSI)', value: 25, color: '#1FB8CD' },
        { name: 'Marketing (CANNON)', value: 35, color: '#46A758' },
        { name: 'Systems (AMLS, TMB)', value: 20, color: '#E68161' },
        { name: 'Creative (Suno, CREATIVE)', value: 15, color: '#B4413C' },
        { name: 'Other', value: 5, color: '#F3F4F6' },
    ],
};

export const mockTasks: Task[] = [
  { id: '47', name: 'CompTIA A+ ce Certification Renewal', project: 'CERT-2026', dueDate: '2026-02-01', priority: 'High' },
  { id: '50', name: 'CompTIA Security+ ce Certification Renewal', project: 'CERT-2026', dueDate: '2026-02-01', priority: 'High' },
  { id: '331', name: 'Develop first ebook task lists', project: 'GDCCSI-2025', dueDate: '2025-06-31', priority: 'High' },
  { id: '1136', name: 'Complete My Monthly Review', project: 'Personal', dueDate: '2025-08-01', priority: 'Medium' },
  { id: '1173', name: 'Meal Prep Veggies Every Sunday', project: 'Personal', dueDate: '2025-07-27', priority: 'Medium' },
  { id: '96', name: 'Prospect Freelance Listings', project: 'NCA-2025', dueDate: '2025-07-26', priority: 'High' },
  { id: '70', name: 'Write Memoir (Church Memories)', project: 'MEMOIR-2025', dueDate: '2025-07-27', priority: 'Low' },
  { id: '53', name: 'Organize/Export Suno Creations', project: 'Suno-EXP-2025', dueDate: '2025-12-31', priority: 'Medium' },
];