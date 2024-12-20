import React, { useState } from "react";
import { mockHistoricalData } from "../constants/mock";
import { convertUnixTimestampToDate } from "../helpers/date-helper";
import Card from "./Card";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { chartConfig } from "../constants/config";
import ChartFilter from "./ChartFilter";

const Chart = () => {
    const [data, setData] = useState(mockHistoricalData);
    const [filter, setFilter] = useState("1w");

    const formatData = () => {
        if (!data || !data.c || !data.t || data.c.length !== data.t.length) {
            console.error("Invalid data structure", data);
            return [];
        }

        return data.c.map((item, index) => ({
            value: typeof item === "number" ? item.toFixed(2) : "N/A",
            date: data.t[index] ? convertUnixTimestampToDate(data.t[index]) : "Invalid Date",
        }));
    };

    return (
        <Card>
            <ul className="flex absolute top-2 right-2 z-40">
                {Object.keys(chartConfig).map((item) => (
                    <li key={item}>
                        <ChartFilter
                            text={item}
                            active={filter === item}
                            onClick={() => setFilter(item)}
                        />
                    </li>
                ))}
            </ul>
            <ResponsiveContainer>
                <AreaChart data={formatData()}>
                    <defs>
                        <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#312e81" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#312e81" stopOpacity={0} />
                        </linearGradient>
                    </defs>
                    <Area
                        type="monotone"
                        dataKey="value"
                        stroke="#312e81"
                        fillOpacity="1"
                        strokeWidth="0.5"
                        fill="url(#chartColor)"
                    />
                    <Tooltip />
                    <XAxis dataKey="date" />
                    <YAxis domain={["dataMin", "dataMax"]} />
                </AreaChart>
            </ResponsiveContainer>
        </Card>
    );
};

export default Chart;
