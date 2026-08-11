
export enum ProjectStatus {
  OnTrack = 'On Track',
  AtRisk = 'At Risk',
  OffTrack = 'Off Track',
  Completed = 'Completed',
  BehindSchedule = 'Behind Schedule',
  AheadOfSchedule = 'Ahead of Schedule',
  Planning = 'Planning',
  InProgress = 'In Progress',
}

export interface Project {
  id: string;
  name: string;
  phase: string;
  health: 'green' | 'yellow' | 'red';
  status: ProjectStatus;
  completion: number;
  budget: number;
  spent: number;
  lead: string;
  endDate: string;
  nextMilestone: string;
}

export interface Kpi {
  title: string;
  value: string;
  trend: 'up' | 'down' | 'stable';
  change: string;
  icon: React.ElementType;
}

export interface Alert {
  id: string;
  type: 'warning' | 'info' | 'success';
  message: string;
  icon: React.ElementType;
}

export interface FinancialData {
  month: string;
  revenue: number;
  target: number;
  expenses: number;
}

export interface Task {
  id: string;
  name: string;
  project: string;
  dueDate: string;
  priority: 'High' | 'Medium' | 'Low';
}