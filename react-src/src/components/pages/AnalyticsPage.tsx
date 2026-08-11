
import React from 'react';
import { Task } from '../../types';
import OperationalAnalytics from '../dashboard/OperationalAnalytics';

const AnalyticsPage: React.FC<{ tasks: Task[], searchTerm: string; }> = ({ tasks, searchTerm }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-text-primary mb-6">Analytics</h1>
            <OperationalAnalytics tasks={tasks} searchTerm={searchTerm} />
        </div>
    );
};
export default AnalyticsPage;