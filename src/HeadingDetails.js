import React, { Component } from 'react'
// ICONS 
import {infoIcon} from "./ICONS/Icons"
// CSS
import "./HeadingDetails.css"

export default class HeadingDetails extends Component {
    constructor(){
        super()
    this.changeTempInfo = (e)=>{ 
        let cel = document.querySelector("#C");
        let far = document.querySelector("#F");
        if (e.target.id === "F"){
            if (far.classList.contains("active")){
            }
            else{
            cel.classList -= "active";
            far.classList += " active";
            this.props.tempValueChange(this.props.tempValue,this.props.tempState,"F")
        }
        }
        if (e.target.id === "C"){
            console.log(cel.classList.contains("active"))
            if (cel.classList.contains("active")){}
            else{
                cel.classList += " active";
                this.props.tempValueChange(this.props.tempValue,this.props.tempState,"C")
                far.classList -= "active";
            }
        }
    }
    this.changeChartData=(e)=>{
        let daily = document.querySelector("#daily");
        let hourly = document.querySelector("#hourly");
        if(e.target.id === "daily"){
            if(this.props.chartState === "daily"){

            }else{
                daily.classList += " active";
                hourly.classList -= "active";
                this.props.chartValueChange("daily")
            }
        }else{
            if(this.props.chartState === "hourly"){

            }else{
                hourly.classList += " active";
                this.props.chartValueChange("hourly");
                daily.classList -= "active";
            }
        }
    }
    this.changeWindInfo = (e)=>{ 
        let mile = document.querySelector("#M");
        let km = document.querySelector("#KM");
        if (e.target.id === "M"){
            if(mile.classList.contains("active")){}
            else{
                mile.classList += " active";
                this.props.windValueChange(this.props.windSpeedValue,this.props.windState,"M");
                km.classList -= "active";
            }
        }
        if (e.target.id === "KM"){
            if(km.classList.contains("active")){}
            else{
                km.classList += " active";
                this.props.windValueChange(this.props.windSpeedValue,this.props.windState,"Km");
                mile.classList -= "active";
            }
        }
    }
}
    render() {
        return (
            <>
            <div className="heading">
                <section>
                    <div className="windChangeToggle">
                        <button className="" id ="KM" onClick={(e)=>{this.changeWindInfo(e)}}>Km/s</button>
                        <button className = "active " id ="M" onClick={(e)=>{this.changeWindInfo(e)}}>M/s</button>
                    </div>
                    <div className="windChangeToggle">
                        <button className = "active " id ="daily" onClick={(e)=>this.changeChartData(e)}>Daily</button>
                        <button className="" id ="hourly" onClick={(e)=>this.changeChartData(e)}>Hourly</button>
                 </div>
                    <div className="tempChangeToggle">
                        <button className="" id="C" onClick={(e)=>{this.changeTempInfo(e)}}>C<sup>o</sup></button>
                        <button className = "active " id="F" onClick={(e)=>{ this.changeTempInfo(e)}}>F<sup>o</sup></button>
                    </div>
                 </section>
                </div>
                <div className="current">
                    {infoIcon}
                    <h1>CURRENT</h1>
            </div></>
        )
    }
}