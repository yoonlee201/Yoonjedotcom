'use client';

import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { skills } from '@/constants/skills';
import Image from 'next/image';

const COLORS = ['hsl(230, 11%, 57%)', 'hsl(0, 7%, 83%)'];

const Skillset: React.FC = () => {
    const data = skills.map(skill => [
        { name: skill.name, value: skill.percent },
        { name: 'Other', value: 100 - skill.percent },
    ]);

    return (
        <div className="flex w-[90%] flex-wrap justify-center overflow-hidden pt-6">
            {data.map((dataSet, i) => (
                <div
                    key={i}
                    className="m-2 flex flex-col items-center">
                    <div className="relative h-[6.25rem] w-[6.25rem] sm:h-[7.5rem] sm:w-[7.5rem] md:h-[8.125rem] md:w-[8.125rem]">
                        <ResponsiveContainer
                            width="100%"
                            height="100%">
                            <PieChart>
                                <Pie
                                    data={dataSet}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius="85%"
                                    outerRadius="100%"
                                    startAngle={90}
                                    endAngle={450}
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
                        <div className="absolute inset-0 flex items-center justify-center">
                            <Image
                                className="h-[35%] w-[35%]"
                                width={50}
                                height={50}
                                src={skills[i].icon}
                                alt={skills[i].name}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skillset;
