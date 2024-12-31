import React from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';

const ChartDisplay = ({ data, selectedCompany }) => {
  if (!selectedCompany) return <div>Select a company to view data</div>;

  const filteredData = data.filter((item) => item.company === selectedCompany);

  return (
    <div className="chart-container">
      <h2>{selectedCompany} Performance</h2>
      <LineChart width={700} height={400} data={filteredData}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#e0dfdf" />
        <Line type="monotone" dataKey="value" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default ChartDisplay;
