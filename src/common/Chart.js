import React from 'react'
import { Doughnut } from 'react-chartjs-2';

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
      <Doughnut data={data} />
    </div>
  )
}

export default Chart
