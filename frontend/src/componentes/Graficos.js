import React from "react";
import Chart from "react-apexcharts";

const Graph = ({ data, title }) => {
  const chartOptions = {
    chart: {
      height: 350,
      type: "line",
    },
    stroke: {
      curve: "straight",
      width: 3,
      colors: ['#210df5']
    },
    xaxis: {
      categories: data.map((med) => med.data),
      labels: {
        style: {
          colors: '#111827',
          fontSize: '13px'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: '#111827',
          fontSize: '13px'
        }
      }
    },
    title: {
      text: title,
      align: 'center',
      margin: 20,
      style: {
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#111827'
      }
    },
    fill: {
      colors: ['#180bc210']
    }
  };

  const chartSeries = [
    {
      name: title,
      data: data.map((med) => med.value),
      type: 'area'
    }
  ];

  return <Chart options={chartOptions} series={chartSeries} type="line" height={350} />;
};

export default Graph;
