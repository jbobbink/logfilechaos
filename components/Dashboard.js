import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Dashboard = ({ data }) => {
  // Dummy sample data; replace with processed log/GSC data
  const sampleData = [
    { url: '/home', requests: 240 },
    { url: '/about', requests: 180 },
    { url: '/contact', requests: 120 },
  ];

  return (
    <div className="dashboard">
      <div className="card">
        <h2>Most Requested URLs</h2>
        <table className="data-table">
          <thead>
            <tr>
              <th>URL</th>
              <th>Requests</th>
            </tr>
          </thead>
          <tbody>
            {sampleData.map(item => (
              <tr key={item.url}>
                <td>{item.url}</td>
                <td>{item.requests}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="card">
        <h2>URL Trends</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={sampleData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="url" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="requests" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      {/* Additional cards for "URLs ranking but not crawled" and "URLs crawled but not ranking" can be added here */}
    </div>
  );
};

export default Dashboard;
