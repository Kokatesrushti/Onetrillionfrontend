import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from 'recharts';

const Graph = () => {
  const data = [
    {
      name: 'python',
      sale: 5,
      price: 500,
    },
    {
      name:"C++",
      sale: 10,
      price: 1000,
    },
    {
      name:"Java",
      sale: 8,
      price: 600,
    },
    {
      name:"Javascript",
      sale: 12,
      price: 800,
    },
    {
      name:"PHP",
      sale: 15,
      price: 400,
    },
  ];

  return (
    <div>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={data} width={500} height={300} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line dataKey="sale" stroke="red" />
          <Line dataKey="price" stroke="green" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Graph;
