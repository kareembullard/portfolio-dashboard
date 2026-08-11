import React from 'react';
import FinancialCenter from '../dashboard/FinancialCenter';
import { mockFinancials } from '../../constants';

const FinancialKPI: React.FC<{title: string, value: string, change: string, positive: boolean}> = ({title, value, change, positive}) => (
    <div className="bg-surface p-4 rounded-lg">
        <p className="text-sm text-text-secondary">{title}</p>
        <p className="text-2xl font-bold text-text-primary">{value}</p>
        <p className={`text-sm font-semibold ${positive ? 'text-success' : 'text-danger'}`}>{change}</p>
    </div>
);

const FinancialsPage: React.FC<{ financials: typeof mockFinancials }> = ({ financials }) => {
    return (
        <div>
            <h1 className="text-2xl font-bold text-text-primary mb-6">Financials</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-6">
                <FinancialKPI title="Total Revenue" value="$1.2M" change="+12.5%" positive={true} />
                <FinancialKPI title="Total Expenses" value="$750K" change="+8.2%" positive={false} />
                <FinancialKPI title="Net Profit" value="$450K" change="+18.3%" positive={true} />
                <FinancialKPI title="ROI" value="60%" change="+5.1%" positive={true} />
            </div>
            <FinancialCenter financials={financials} />
        </div>
    );
};
export default FinancialsPage;