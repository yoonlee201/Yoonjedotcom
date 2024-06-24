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
        <div className="overflow-hidden flex w-[90%] flex-wrap justify-center">
            {data.map((dataSet, i) => (
                <div
                    key={i}
                    className="m-2 flex flex-col items-center">
                    <div className="relative h-[100px] w-[100px] sm:h-[120px] sm:w-[120px] md:h-[130px] md:w-[130px]">
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
