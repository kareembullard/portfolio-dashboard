
import React from 'react';
import { Task } from '../../types';

const priorityClasses: Record<Task['priority'], string> = {
  High: 'text-danger',
  Medium: 'text-warning',
  Low: 'text-text-secondary',
};

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-border">
      <div>
        <p className="font-medium text-text-primary">{task.name}</p>
        <p className="text-xs text-text-secondary">{task.project}</p>
      </div>
      <div className="flex items-center space-x-4">
        <span className={`text-sm font-semibold ${priorityClasses[task.priority]}`}>{task.priority}</span>
        <span className="text-sm text-text-secondary">{task.dueDate}</span>
        <button className="text-text-secondary hover:text-primary">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </button>
      </div>
    </div>
  );
};

const OperationalAnalytics: React.FC<{ tasks: Task[], searchTerm: string; }> = ({ tasks, searchTerm }) => {

    const filteredTasks = tasks.filter(task =>
        task.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        task.project.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="bg-surface p-6 rounded-lg">
            <h4 className="text-lg font-semibold text-text-primary mb-4">Upcoming Tasks</h4>
            <div>
                {filteredTasks.length > 0 ? (
                    filteredTasks.map(task => <TaskItem key={task.id} task={task} />)
                ) : (
                    <p className="text-text-secondary text-center py-4">No tasks match your search.</p>
                )}
            </div>
            <div className="mt-4 text-right">
                <a href="#" className="text-sm text-primary hover:underline">View all tasks</a>
            </div>
        </div>
    );
};

export default OperationalAnalytics;