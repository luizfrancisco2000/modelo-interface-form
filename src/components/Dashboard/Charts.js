import React from 'react'
import { Bar, Doughnut } from 'react-chartjs-2'

const dataBar = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
      {
        label: 'My Second',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      },
    ]
}; 
const dataPie = {
	labels: [
		'Red',
		'Blue',
		'Yellow'
	],
	datasets: [{
		data: [300, 50, 100],
		backgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		],
		hoverBackgroundColor: [
		'#FF6384',
		'#36A2EB',
		'#FFCE56'
		]
    }]
};

const legendOpts = {
    display: true,
    position: 'right',
    fullWidth: false,
  };

export default class Charts extends React.Component{
    render(){
        return(
            <div>
                {this.props.type==='bar'?
                <Bar data={dataBar} className="chart"/>
                :null}
                {this.props.type==='doughnut'?
                <Doughnut data={dataPie} className='chart' legend={legendOpts}/>
                :null}
            </div>
           
        )
    }
}

