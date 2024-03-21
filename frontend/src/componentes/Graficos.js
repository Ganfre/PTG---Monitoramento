import React from "react";
import Chart from "react-apexcharts";

const Graph = ({ data, title }) => {
  const chartOptions = {
    chart: {
      height: 350,
      type: "line",
    },
    theme: {
      monochrome: {
        enabled: true,
        color: '#255aee',
        shadeTo: 'light',
        shadeIntensity: 0.65
      }
    },
    stroke: {
      curve: "straight",
      width: 3,
      colors: ['#210df5']
    },
    markers: {
      size: 5,
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
      type: "gradient",
      gradient: {
          shade: 'dark', 
          type: 'vertical',
          gradientToColors: ['#87CEFA'], 
          inverseColors: false, 
          opacityFrom: 0.8, 
          opacityTo: 0.3, 
          stops: [20, 100]
      }
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
