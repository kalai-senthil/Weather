import React,{Component} from 'react'
import { Line } from 'react-chartjs-2';
// import "./css/Chart.css"
class DisplayChart extends Component { 
    constructor(props){
        super(props)
    this.data = {
        labels: this.props.dateStringArray,
        datasets: [
        {
            label: '',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(158, 37, 15, 0.4)',
            borderColor: 'rgba(158, 37, 15, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor:'rgba(158, 37, 15, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(158, 37, 15, 1)',
            pointHoverBorderColor: 'rgba(158, 37, 15, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        },
        {
            label: 'Humidity %',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        },
        {
            label: 'Pressure hPa',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(147, 52, 255, 0.4)',
            borderColor: 'rgba(147, 52, 255, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(147, 52, 255, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(147, 52, 255, 1)',
            pointHoverBorderColor: 'rgba(147, 52, 255, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        },
        {
            label: '',
            fill: true,
            lineTension: 0.1,
            backgroundColor: 'rgba(255, 131, 29, 0.4)',
            borderColor: 'rgba(255, 131, 29, 1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(255, 131, 29, 1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(255, 131, 29, 1)',
            pointHoverBorderColor: 'rgba(255, 131, 29, 1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        },
        ]
    };  
}
  render(){
    this.data.labels = this.props.dateStringArray;
    this.data.datasets[0].label = `Temperature(Avg.) in ${this.props.tempState}`;
    this.data.datasets[0].data = this.props.tempStringArray;
    this.data.datasets[1].data = this.props.humidityStringArray;
    this.data.datasets[2].data = this.props.pressureStringArray;
    this.data.datasets[3].data = this.props.windSpeedStringArray;
    this.data.datasets[3].label = `Wind Speed(Avg.) in ${this.props.windState}/s`;
    return (
        <div id="chart">
            <Line useref="chart" data={this.data}  />
        </div>
    )
}
}
export default DisplayChart