import React from 'react';

const SettingsCard: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="bg-surface rounded-lg">
        <div className="p-4 border-b border-border">
            <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
        </div>
        <div className="p-6">
            {children}
        </div>
    </div>
);

const FormGroup: React.FC<{ label: string; children: React.ReactNode; }> = ({ label, children }) => (
    <div className="mb-4">
        <label className="block text-sm font-medium text-text-secondary mb-1">{label}</label>
        {children}
    </div>
);

const Toggle: React.FC<{ label: string; enabled: boolean; setEnabled: (e:boolean) => void; }> = ({ label, enabled, setEnabled }) => {
    return (
        <label htmlFor={label} className="flex items-center cursor-pointer justify-between">
            <span className="text-sm text-text-primary">{label}</span>
            <div className="relative">
                <input id={label} type="checkbox" className="sr-only" checked={enabled} onChange={() => setEnabled(!enabled)} />
                <div className="block bg-border w-12 h-6 rounded-full"></div>
                <div className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${enabled ? 'translate-x-6 bg-primary' : ''}`}></div>
            </div>
        </label>
    );
};


const SettingsPage: React.FC = () => {
    const [notifications, setNotifications] = React.useState({
        projectUpdates: true,
        criticalAlerts: true,
        weeklyReports: false,
    });
    
    return (
        <div>
            <h1 className="text-2xl font-bold text-text-primary mb-6">Settings</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <SettingsCard title="Profile">
                    <FormGroup label="Name">
                        <input type="text" defaultValue="John Doe" className="w-full bg-background border border-border rounded-md px-3 py-2 text-text-primary focus:ring-primary focus:border-primary" />
                    </FormGroup>
                    <FormGroup label="Email">
                        <input type="email" defaultValue="john.doe@example.com" className="w-full bg-background border border-border rounded-md px-3 py-2 text-text-primary focus:ring-primary focus:border-primary" />
                    </FormGroup>
                    <button className="bg-primary text-white font-semibold py-2 px-4 rounded-lg hover:bg-primary-hover transition-colors w-full mt-2">Update Profile</button>
                </SettingsCard>
                <SettingsCard title="Notifications">
                    <div className="space-y-4">
                        <Toggle label="Email on project updates" enabled={notifications.projectUpdates} setEnabled={(val) => setNotifications(p => ({...p, projectUpdates: val}))} />
                        <Toggle label="SMS for critical alerts" enabled={notifications.criticalAlerts} setEnabled={(val) => setNotifications(p => ({...p, criticalAlerts: val}))} />
                        <Toggle label="Weekly performance reports" enabled={notifications.weeklyReports} setEnabled={(val) => setNotifications(p => ({...p, weeklyReports: val}))} />
                    </div>
                </SettingsCard>
            </div>
        </div>
    );
};

export default SettingsPage;