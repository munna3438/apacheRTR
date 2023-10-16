import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  Rectangle,
  AreaChart,
  Area,
} from "recharts";
import "./dashboard.css";

const Dashboard = () => {
  const data = [
    {
      name: "Mar",
      investment: 100000,
      revenue: 10400,
      amt: 2400,
    },
    {
      name: "Apr",
      investment: 200000,
      revenue: 24500,
      amt: 2210,
    },
    {
      name: "May",
      investment: 500000,
      revenue: 67000,
      amt: 2290,
    },
    {
      name: "Jun",
      investment: 500000,
      revenue: 40000,
      amt: 2000,
    },
    {
      name: "jul",
      investment: 600000,
      revenue: 50900,
      amt: 2181,
    },
    {
      name: "Aug",
      investment: 700000,
      revenue: 61000,
      amt: 2500,
    },
  ];
  return (
    <div>
      <div className="chart">
        <div className="lineBarchart">
          <div className="lineChart">
            <h1>A demo of LineCharts</h1>
            <LineChart
              width={600}
              height={400}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </div>
          <div className="barChart">
            <h1>A demo of BarCharts</h1>
            <BarChart
              width={600}
              height={400}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar
                dataKey="investment"
                fill="#8884d8"
                activeBar={<Rectangle fill="pink" stroke="blue" />}
              />
              <Bar
                dataKey="revenue"
                fill="#82ca9d"
                activeBar={<Rectangle fill="gold" stroke="purple" />}
              />
            </BarChart>
          </div>
        </div>
        <div className="areachart">
          <h1>A demo of AreaCharts</h1>
          <AreaChart
            width={1200}
            height={500}
            data={data}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="investment"
              stroke="#8884d8"
              fill="#8884d8"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="blue"
              fill="#82ca9d"
            />
          </AreaChart>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
