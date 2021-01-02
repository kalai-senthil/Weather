import React, { Component } from 'react'
import HeadingDetails from "./HeadingDetails"
import Template from "./Template"
import AirComponents from "./AirComponents"
// ICONS 
import {uvIcon,tempIcon,humidityIcon,pressureIcon,windIcon,windDirectionIcon,windSpeedIcon} from "./ICONS/Icons"
// CSS 
import "./Details.css"
export class Details extends Component {

    render() {
        return (
            <div className="bg">
                <HeadingDetails chartValueChange={this.props.actionChart} chartState={this.props.chartOrderState} tempState={this.props.tempValueState} tempValueChange={this.props.actionTemp} windValueChange={this.props.actionWind} windState = {this.props.windStateValue} windSpeedValue={this.props.windSpeedValue} tempValue={this.props.tempValue} />
                <div className = "details">
                    <Template info = {"Temperature"} value = {this.props.tempValue +" "+this.props.tempValueState} icon = {tempIcon}/>
                    <Template info = {"Humidity"} value = {`${this.props.humidityValue} %`} icon = {humidityIcon}/>
                    <Template info = {"Pressure"} value = {`${this.props.pressureValue} hPa`} icon = {pressureIcon} />
                    <Template info = {"Wind Speed"} value = {this.props.windSpeedValue +" "+this.props.windStateValue+"/s"} icon = {windIcon}/>
                    <Template info = {"Wind Direction"} value = {this.props.windDirectionValue} icon ={windDirectionIcon}/>
                    <Template info = {"Air Quality"} value = {this.props.airQualityValue} icon ={windSpeedIcon}/>
                    <Template info = {"Ultra Violet Index"} value = {this.props.uvIndexValue} icon ={uvIcon}/>
                </div>
                <AirComponents co={this.props.co} nh3={this.props.nh3} no={this.props.no} no2={this.props.no2} o3={this.props.o3} so2 = {this.props.so2} pm25={this.props.pm25} pm10={this.props.pm10} />
            </div>
        )
    }
}

export default Details
