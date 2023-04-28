import React from 'react';
import Chart from 'react-apexcharts';

const data = {
  series: [55, 25, 20],
  options: {
    chart: {
      type: 'pie',
     /// background: '#ffffff',
      //borderRadius: 18,
    },
    labels: ['Basic Tees', 'Custom Short Pants', 'Super Hoodies'],
    colors: ['#98D89E', '#F6DC7D', '#EE8484'],
    stroke: {
        show: false,
        width: 0,
      },
    legend: {
      align: 'left',
      fontSize: '14px',
      fontWeight: 'bold',
      formatter: function(val, opts) {
        const percentage = opts.w.config.series[opts.seriesIndex];
        return `${val} (${percentage}%)`;
      },
    },
    dataLabels: {
        enabled: false,
      }
  },
};

const PieChart = () => {
  return (
    <div>
      <Chart
        options={data.options}
        series={data.series}
        type="pie"
        width="400"
      />
    </div>
  );
};

export default PieChart;
