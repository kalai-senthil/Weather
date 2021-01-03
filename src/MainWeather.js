import React, { Component } from 'react'
import "./MainWeather.css"
import DefaultWeather from './DefaultWeather';
import { infoIcon } from "./ICONS/Icons"
export default class MainWeather extends Component {
    constructor(props){
        super(props)
        let fullDate = new Date();
        let months = ["January","Feb","March","April","May","June","July","August","September","October","November","December"];
        let daysInMonths = {31:["January","March","May","August","December","October","July"],28:"Feb",30:["April","June",'September',"November"]}
        let date = fullDate.getUTCDate();
        let month = fullDate.getMonth();
        let year = fullDate.getFullYear();
        this.state = {
            dateValue : date,
            monthValue : month,
            monthString : months[month],
            yearValue : year,
        }
       
        this.changeYear = (year,choice) =>{
            let nextYear  = null;
            if(choice === "for"){
                nextYear = year + 1;
                this.setState({yearValue:nextYear});
            }
            else{
                nextYear = year - 1;
                this.setState({yearValue:nextYear});
            }
        }
        this.changeMonth = (month,monthString,choice) =>{
            let changeMonth = null;
            if(choice === "for"){
                if(monthString === "December"){
                    changeMonth = month - 11;
                    this.changeYear(this.state.yearValue,choice);
                }else{
                    changeMonth = month + 1;
                }
            }else{
                if(monthString === "January"){
                    changeMonth = month + 11;
                    this.changeYear(this.state.yearValue,choice);
                }else{
                    changeMonth = month - 1;
                }
            }
            return changeMonth;
        }
        this.changeDateBackward = (date,decide31OrNot,choice)=>{
            let newDate = null;
            if(decide31OrNot){
                    if(date <= 1){
                        newDate = date + 30;
                        let newmonth = this.changeMonth(this.state.monthValue,this.state.monthString,choice);
                        this.setState({monthValue:newmonth,monthString:months[newmonth]})
                    }else
                    newDate = date - 1;
            }else{
               
                   if(date <= 1){
                    newDate = date + 29;
                    let newmonth = this.changeMonth(this.state.monthValue,this.state.monthString,choice);
                    this.setState({monthValue:newmonth,monthString:months[newmonth]})
                   }else
                       newDate = date - 1;
            }
            return newDate;
        }
        this.changeDateForward = (date,decide31OrNot,choice)=>{
            let newDate = null;
            if(decide31OrNot){
                    if(date >= 31){
                        newDate = date - 30;
                        let newmonth = this.changeMonth(this.state.monthValue,this.state.monthString,choice);
                        this.setState({monthValue:newmonth,monthString:months[newmonth]})
                    }else
                    newDate = date + 1;
            }else{
               
                   if(date >= 30){
                    newDate = date - 29;
                    let newmonth = this.changeMonth(this.state.monthValue,this.state.monthString,choice);
                    this.setState({monthValue:newmonth,monthString:months[newmonth]})
                   }else
                       newDate = date + 1;
            }
            return newDate;
        }
        this.changeFullDate = (choice)=>
        {
            let newDate = null;
            if(choice === "for")
            newDate = this.changeDateForward(this.state.dateValue,daysInMonths["31"].includes(this.state.monthString),choice);
            else
            newDate = this.changeDateBackward(this.state.dateValue,daysInMonths["31"].includes(months[this.changeMonth(this.state.monthValue,this.state.monthString,choice) - 2]),choice);
            this.setState({dateValue:newDate})
        }
        this.componentDidMount = ()=>{
        }
    }
    render() {
        return (
            <div className="main">
                <p className="data">Data Provided By <a href="https://www.openweather.org" title="openweather.org" rel="noopener noreferrer" target="_blank"><u>OpenWeather</u></a></p>
            <DefaultWeather main={this.props.main}/>
            <p className="main-des">{`${this.props.main} - ${this.props.mainDes}`}</p>
            <p className="city-name">{this.props.name}</p>
            <p className="icons-correction" title="Icons may not be perfect">{infoIcon}</p>
            {/* <div className = "date">
            <svg id="left-arrow" onClick ={()=>{
                this.changeFullDate("rev")}
            } xmlns="http://www.w3.org/2000/svg" width="30" height="35.26" viewBox="0 0 34 39.26">
                <path id="Polygon_7" d="M19.63,0,39.26,34H0Z" transform="translate(0 39.26) rotate(-90)" fill="#393e46"/>
            </svg>
                <p className = "full-date">{this.state.dateValue + " " + this.state.monthString + ", " + this.state.yearValue}</p>
            <svg id="right-arrow" onClick = {
                ()=>{this.changeFullDate("for")}} xmlns="http://www.w3.org/2000/svg" width="30" height="35.26" viewBox="0 0 34 39.26">
                <path d="M19.63,0,39.26,34H0Z" transform="translate(34) rotate(90)" fill="#393e46"/>
            </svg>
            </div> */}
            </div>
        )
    }
}
