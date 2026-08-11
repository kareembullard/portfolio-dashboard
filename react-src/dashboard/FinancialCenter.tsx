
import React from 'react';
import { 
    LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, 
    Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, Sector
} from 'recharts';
import { mockFinancials } from '../../constants';

const formatCurrency = (value: number) => `$${value.toLocaleString()}`;

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-surface p-3 rounded-md border border-border shadow-lg">
        <p className="label text-sm text-text-secondary">{`${label}`}</p>
        <p className="intro font-semibold text-primary">{`Revenue : ${formatCurrency(payload[0].value)}`}</p>
      </div>
    );
  }
  return null;
};

const CustomLegend = (props: any) => {
    const { payload } = props;
    return (
        <div className="flex justify-center items-center gap-4 mt-4">
            {payload.map((entry: any, index: number) => (
                <div key={`item-${index}`} className="flex items-center space-x-2 text-sm">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></span>
                    <span className="text-text-secondary">{entry.value}</span>
                </div>
            ))}
        </div>
    );
}

const FinancialCenter: React.FC<{ financials: typeof mockFinancials }> = ({ financials }) => {
    
    return (
        <div className="mt-8 grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="bg-surface rounded-lg p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4">Revenue Tracking</h3>
                <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={financials.revenueData} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#3A3C3C" strokeOpacity={0.5} />
                            <XAxis dataKey="name" tick={{ fill: '#9CA3AF', fontSize: 12 }} stroke="#3A3C3C"/>
                            <YAxis tickFormatter={(value) => `$${value}`} tick={{ fill: '#9CA3AF', fontSize: 12 }} stroke="#3A3C3C" />
                            <Tooltip content={<CustomTooltip />} cursor={{ stroke: '#1FB8CD', strokeWidth: 1, strokeDasharray: '3 3' }} />
                            <Line type="monotone" dataKey="revenue" stroke="#1FB8CD" strokeWidth={3} dot={{ r: 4, fill: '#1FB8CD' }} activeDot={{ r: 8 }} />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className="bg-surface rounded-lg p-6">
                <h3 className="text-lg font-semibold text-text-primary mb-4">Budget Allocation</h3>
                <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                           <Pie
                                data={financials.budgetAllocation}
                                cx="50%"
                                cy="50%"
                                innerRadius="60%"
                                outerRadius="80%"
                                dataKey="value"
                                paddingAngle={5}
                                cornerRadius={8}
                           >
                                {financials.budgetAllocation.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} stroke={entry.color} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(value, name) => [`${value}%`, name]} />
                            <Legend content={<CustomLegend />} />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default FinancialCenter;
