'use client';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const COLORS = ['hsl(230, 11%, 57%)', 'hsl(0, 7%, 83%)'];

const Skillset: React.FC = () => {
    const skills = [
        { type: 'javascript', percent: 60 },
        { type: 'react', percent: 75 },
        { type: 'java', percent: 65 },
        { type: 'c', percent: 65 },
        { type: 'typescript', percent: 70 },
        { type: 'node.js', percent: 60 },
        { type: 'next.js', percent: 40 },
        { type: 'git', percent: 80 },
        { type: 'mongodb', percent: 30 },
        { type: 'prisma', percent: 35 },
        { type: 'trpc', percent: 55 },
        { type: 'tailwind', percent: 30 },
        { type: 'python', percent: 20 },
    ];

    const data = skills.map(skill => [
        { name: skill.type, value: skill.percent },
        { name: 'Other', value: 100 - skill.percent },
    ]);

    return (
        <ResponsiveContainer
            width="100%"
            height={600}>
            <PieChart>
                {data.map((dataSet, i) => (
                    <Pie
                        key={i}
                        data={dataSet}
                        cx={`${(i % 5) * 18 + 14}%`}
                        cy={`${Math.floor(i / 5) * 30 + 25}%`}
                        innerRadius={50}
                        outerRadius={63}
                        dataKey="value">
                        {dataSet.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                            />
                        ))}
                    </Pie>
                ))}
                <Tooltip />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default Skillset;
