import React, { Component } from "react";
import Chart from "react-apexcharts";
import { BiDotsVerticalRounded } from "react-icons/bi";
class SplineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
          
      series: [{
        name: 'series1',
        data: [1, 40, 8, 51, 42, 109, 100]
      }, {
        name: 'series2',
        data: [61, 32, 45, 32, 34, 52, 41]
      }],
      options: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        // xaxis: {
        //   type: 'datetime',
        //   categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        // },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      },
    
    
    };
  

  }

  render() {
    return (
      
      <div className="card shadow border-0" style={{height: 'auto',width:'550px',paddingLeft:'10px' , marginBottom:'20px'}}>
      <div className="card-body">
        <ul class="list-group ">
        <div className="row">
          <div className="col-md-4">
          <li class="list-group-item border-0">Application Recieved</li>
          </div>
          <div className="col-md-3"> <li class="list-group-item border-0">This Year</li></div>
          <div className="col-md-3"><li class="list-group-item border-0">This Year</li></div>
          <div className="col-md-3"><li class="list-group-item border-0"><BiDotsVerticalRounded />Download Repo</li>
          </div>
          <div className="col-md-3">Today</div>
        </div>
     
     
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="area" height={350} />

           </div>
           </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default SplineChart;
