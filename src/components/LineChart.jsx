import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: 'line-chart',
          //background: '#ffffff',
         // borderRadius: '8px',
        },
        stroke: {
            curve: 'smooth' // set the strokeCurve option to "smooth"
          },
          title:{
                text:'Options',
                align:'left'
          },
          subtitle:{
            text:'May-jun 2021',
            align:'left'
          },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        }
      },
      series: [
        {
          name: 'Series 1',
          data: [30, 40, 25, 50, 49, 21, 70, 51, 32, 28, 55, 40]
        },
        {
          name: 'Series 2',
          data: [23, 12, 54, 32, 61, 43, 76, 54, 23, 12, 54, 32]
        }
      ]
    }
  }

  render() {
    return (
      <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={230} />
    );
  }
}

export default LineChart;
