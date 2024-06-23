'use client';
import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { skills } from '@/constants/skills';
import Image from 'next/image';

const COLORS = ['hsl(230, 11%, 57%)', 'hsl(0, 7%, 83%)'];

const Skillset: React.FC = () => {
    const data = skills.map(skill => [
        { name: skill.type, value: skill.percent },
        { name: 'Other', value: 100 - skill.percent },
    ]);

    return (
        <div className="flex flex-wrap justify-center">
            {data.map((dataSet, i) => (
                <div
                    key={i}
                    className="m-2 flex flex-col items-center"
                    style={{ minWidth: '120px', maxWidth: '170px' }}>
                    <ResponsiveContainer
                        width={150}
                        height={150}>
                        <PieChart>
                            <Pie
                                data={dataSet}
                                cx={`50%`}
                                cy={`50%`}
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
                            <Tooltip />
                        </PieChart>
                    </ResponsiveContainer>
                    <Image
                        className={`absolute mt-10 w-7 h-7`}
                        width={7}
                        height={7}
                        src={skills[i].icon}
                        alt={''}
                    />
                </div>
            ))}
        </div>
    );
};

export default Skillset;
