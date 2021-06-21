import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { BsThreeDots } from "react-icons/bs";

function Chart() {
  
  const data = {
    options: {
      centerText: {
          display: true,
          text: `90%`
      }     },
    datasets: [{
      labels:[
        '30%','25%','45%',
      ],
      data: [45, 25, 30],
      backgroundColor: [
        'red',
        '#5C5CFF',
        '#800080'
      ],
   
      borderColor: [
        'red',
        '#5C5CFF',
        '#800080',
      ],
      Outline: [
        'none',
        'none',
        'none',
      ],
      
      hoverOffset: 4
    }],
    text:"hrlloyea",
  
  };
  return (
    <div>
      <div className="card shadow border-0" style={{height: 'auto',width: '300px'}}>
        <div className="card-body">
      <ul class="list-group ">
      <li class="list-group-item border-0">Open Position By Department   <BsThreeDots className="ml-3" /></li>
      </ul>
      <div className="card-body">
      <Doughnut data={data} />
    </div>
    
    </div>
    </div>
    </div>
  )
}

export default Chart
