import React from "react";
import Chart from "react-apexcharts";

const Graph = ({ data, title }) => {
  const chartOptions = {
    chart: {
      height: 350,
      type: "line",
    },
    stroke: {
      curve: "smooth",
    },
    xaxis: {
      categories: data.map((med) => med.data),
      labels: {
        style: {
          colors: 'white',
          fontSize: '13px'
        }
      }
    },
    yaxis: {
      labels: {
        style: {
          colors: 'white',
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
        color: 'white'
      }
    },
  };

  const chartSeries = [
    {
      name: title,
      data: data.map((med) => med.value),
    },
  ];

  return <Chart options={chartOptions} series={chartSeries} type="line" height={350} />;
};

export default Graph;
