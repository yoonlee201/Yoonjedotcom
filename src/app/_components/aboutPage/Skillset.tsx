'use client'
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const Skillset = () => {

    return (
        <div>
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
        </div>
  );
}

export default Skillset;