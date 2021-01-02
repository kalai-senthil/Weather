import React, { Component } from 'react'
import MainWeather from './MainWeather'
import Map from "./Map"
import DisplayChart from "./DisplayChart"
import Details from "./Details"
import "./App.css"
export class App extends Component {
    constructor(){
        super()
        this.state = {
            cityList : [],
            mainDes:"overcast clouds",
            tempValue:"Loading",
            tempValueState:"F",
            humidityValue:"Loading",
            windSpeedValue:"Loading",
            windStateValue:"M",
            pressureValue:"Loading",
            queryMatches:[],
            name:"Puducherry,IN",
            airQualityValue:"Loading",
            uvIndexValue:"Loading",
            windDirectionValue:"Loading",
            ID : "Loading",
            chartOrderState:"Loading",
            longValue:79.830002,
            latValue: 11.93,
            nextSavenDays:[],
            nextSevenDaysTemp:[],
            nextSevenDaysHumidity:[],
            nextSevenDaysPressure:[],
            nextSevenDaysWindSpeed:[],
            main:"Snow",
        }
        this.dataFromHourly = (data)=>{
            let dateStringArray = [];
            let tempStringArray = [];
            let humidityStringArray = [];
            let pressureStringArray = [];
            let windSpeedStringArray = [];
            let d =null;
            let second =null;
            let date =null;
            data.forEach(e=>{
                d = e.dt;
                second = d * 1000;
                let time= "";
                date = new Date(second).toLocaleTimeString().split(" ");
                let dum = date[0].split(":");
                dum.length = 2;
                for (let i = 0; i < dum.length; i++) {
                    const ele = dum[i];
                   if(i !== 1){
                    time += ele + ":";
                   }
                   else{
                    time+=ele;
                   }
                }
                dateStringArray.push(time + " "+date[1]);
                let tempDay = e.temp;
                tempStringArray.push(tempDay);
                let humidity = e.humidity;
                humidityStringArray.push(humidity);
                let pressure = e.pressure;
                pressureStringArray.push(pressure);
                let windSpeed = e.wind_speed;
                windSpeedStringArray.push(windSpeed);
            })
            this.setState({chartOrderState:"hourly",nextSevenDaysWindSpeed:windSpeedStringArray,nextSevenDaysPressure:pressureStringArray,nextSavenDays:dateStringArray,nextSevenDaysTemp:tempStringArray,nextSevenDaysHumidity:humidityStringArray});
        }
        this.dataFromDaily = (data)=>{
            let dateStringArray = [];
            let tempStringArray = [];
            let humidityStringArray = [];
            let pressureStringArray = [];
            let windSpeedStringArray = [];
            data.forEach(e=>{
                let d = e.dt;
                let second = d * 1000;
                let date = new Date(second).toLocaleDateString();
                dateStringArray.push(date);
                let tempDay = ((e.temp.max + e.temp.min)/2).toFixed(2);
                tempStringArray.push(tempDay);
                let humidity = e.humidity;
                humidityStringArray.push(humidity);
                let pressure = e.pressure;
                pressureStringArray.push(pressure);
                let windSpeed = e.wind_speed;
                windSpeedStringArray.push(windSpeed);
            })
            this.setState({chartOrderState:"daily",nextSevenDaysWindSpeed:windSpeedStringArray,nextSevenDaysPressure:pressureStringArray,nextSavenDays:dateStringArray,nextSevenDaysTemp:tempStringArray,nextSevenDaysHumidity:humidityStringArray});

        }
        this.getCityNames = async()=>{
            try{
                let cityList = [];
            const res = await fetch("https://raw.githubusercontent.com/kalai-senthil/live-weather-in-react/main/city.list.min.json");
            const result = await res.json();
            result.forEach(city =>{
                const {name,id,country} = city;
                const {lat,lon} = city.coord;
                cityList.push({id:id,name:name,latitude:lat,longitude:lon,country:country});
            })
            this.setState({cityList:cityList});
            }
            catch{
                alert("Error Occured Refresh")
            }
        }
        this.getAirQuality = async(lat,long)=>{
            let req = await fetch(`https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`)
            let res = await req.json();
            let AQI = res.list[0].main.aqi;
            let com = res.list[0].components
            this.setState({co:com.co,nh3:com.nh3,no:com.no,no2:com.no2,o3:com.o3,so2:com.so2,pm25:com["pm2_5"],pm10:com.pm10});
            switch (AQI){
                case 1:
                    this.setState({airQualityValue:1 + " (Good)"});
                    break;
                case 2:
                   this.setState({airQualityValue: 2 + " (Fair)"});
                    break;
                case 3:
                    this.setState({airQualityValue:3 + " (Moderate)"});
                    break;
                case 4:
                    this.setState({airQualityValue:4 + " (Poor)"});
                    break;
                case 5:
                    this.setState({airQualityValue:5 + " (Very Poor)"}) 
                    break;
                default:
                    this.setState({airQaulityValue:"NA"});
                
            }
        }
        this.windDirFromDeg = (deg)=>{
            let dir = ["N - (North)","NNE - (North/North-East)","NE - (North East)","ENE - (East/North East)","E - (East)","ESE - (East/South East)","SE - (South East)","SSE - (South/South West)","S - South","SSW - (South/South West)","SW - South West","WSW - (West/South West)","W - West","WNW - (West/North West)","NW - (North West)","NNW - (North/North West)"]
            let rem = deg % 360;
            let i = (parseInt((rem/22.5) + 0.5))%16;
            return dir[i];

        }
        this.changeChartValue = (from)=>{
            if(from === "daily" && this.state.chartOrderState === "hourly"){
                this.dataFromDaily(this.state.dailyData);
                this.setState({chartOrderState:"daily"});
            }
            if(from === "hourly" && this.state.chartOrderState === "daily"){
                this.dataFromHourly(this.state.hourlyData);
                this.setState({chartOrderState:"hourly"});
            }
        }
        this.changeWindValue = (wind,windState,from)=>{
        // 1 km = 1.60934 m
        let newWindString = [];
            if(from === "Km" && windState === "M"){
                let windInKM = (wind * 1.60934).toFixed(3);
                this.setState({windSpeedValue:parseFloat(windInKM),windStateValue:"Km"});
                this.state.nextSevenDaysWindSpeed.forEach(e=>{
                    newWindString.push((e * 1.60934).toFixed(3));
                    this.setState({nextSevenDaysWindSpeed:newWindString});
                })
            }
            if(from === "M" && windState === "Km"){
                let windInM = (wind / 1.60934).toFixed(3);
                this.setState({windSpeedValue:parseFloat(windInM),windStateValue:"M"});
                this.state.nextSevenDaysWindSpeed.forEach(e=>{
                    newWindString.push((e / 1.60934).toFixed(3));
                    this.setState({nextSevenDaysWindSpeed:newWindString});
                })
            }
        }
        this.changeTempValue = (temp,tempState,from)=>{
            let newTempString = [];
            if(from === "C" && tempState === "F"){
                let tempInC = ((temp - 32) * 5/9).toFixed(2);
                this.setState({tempValue:parseFloat(tempInC),tempValueState:"C"});
                this.state.nextSevenDaysTemp.forEach(e=>{
                    newTempString.push(((e - 32) * 5/9).toFixed(2));
                })
                this.setState({nextSevenDaysTemp:newTempString});
            }
            if(from === "F" && tempState === "C")
            {
                let tempInF = ((temp * 9/5) + 32).toFixed(2);
                this.setState({tempValue:parseFloat(tempInF),tempValueState:"F"});
                this.state.nextSevenDaysTemp.forEach(e=>{
                    newTempString.push(((e * 9/5) + 32).toFixed(2));
                })
                this.setState({nextSevenDaysTemp:newTempString});
            }
        }
        this.setWind = (value)=>{
            if(this.state.windStateValue === "Km"){
                let newWindString = [];
                this.state.nextSevenDaysWindSpeed.forEach(e=>newWindString.push((e * 1.60934).toFixed(3)));
                this.setState({nextSevenDaysWindSpeed:newWindString});
                return (value * 1.60934).toFixed(2);
            }else{
                return value;
            }
        }
        this.setTemp = (value)=>{
            if(this.state.tempValueState === "C"){
                let newTempString = [];
                this.state.nextSevenDaysTemp.forEach(e=>{
                    newTempString.push(((e - 32) * 5/9).toFixed(2));
                })
                this.setState({nextSevenDaysTemp:newTempString});
                return ((value - 32) * 5/9).toFixed(2);
            }else{
                return value;
            }
        }
        this.getWeather = async(lat,long)=>{
            let res = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=imperial`)
            let result = await res.json();
            console.log(result)
            if(this.state.chartOrderState === "hourly")
            this.dataFromHourly(result.hourly);
            else
            this.dataFromDaily(result.daily);
            this.getAirQuality(this.state.latValue,this.state.longValue);
            this.setState({
                mainDes:result.current.weather[0].description,
                tempValue:this.setTemp(result.current.temp),
                humidityValue:result.current.humidity,
                pressureValue:result.current.pressure,
                windSpeedValue:this.setWind(result.current.wind_speed),
                windDirectionValue:this.windDirFromDeg(result.current.wind_deg),
                main:result.current.weather[0].main,
                uvIndexValue:result.current.uvi,
                dailyData:result.daily,
                hourlyData:result.hourly,
            });
        }
        this.findLongLat = (txt)=>{
            let [name,country] = txt.split(",");
            for (let city of this.state.cityList) {
                 if(city.name === name && city.country === country){
                 let {id,latitude,longitude,country,name} = city
                 this.setState({ID:id,latValue:latitude,longValue:longitude,name:`${name}, ${" "+country}`});
             }
             }
         }
        this.guessQuery = ()=>{
            let query = document.querySelector("#query").value.toLowerCase();
            document.querySelector(".queryCard").style.display = "";
            let matchesFound = [];
            let key = 0;
            if(query !== ""){
                this.state.cityList.forEach(city =>{
                    let {name,country} = city;
                    let namesArray = name.split(" ");
                    let nameString = "";
                    namesArray.forEach(li=>nameString+=li);
                    if(nameString.toLowerCase().indexOf(query) === 0){
                        if(matchesFound.length > 100){
                            matchesFound.length = 100;
                        }else{
                            key++;
                            matchesFound.push({name:name,country:country,key:key});
                            this.setState({queryMatches:matchesFound});
                        }
                    }
            })}
            else{
                this.setState({queryMatches:[]});
            }
        }
        this.changeWeather = ()=>{
            const queryObj = document.querySelector("#query");
            const container = document.querySelector("#container-input");
            const butt = document.querySelector("#btn");
            const value = queryObj.value;
            if(queryObj.classList.contains("input-ani")){
                    queryObj.classList -= "input-ani";
                }
            else{
            queryObj.classList += " input-ani";
            }
            if(butt.classList.contains("btn-bg")){
                butt.classList -= "input-ani";
            }
            else{
            butt.classList += " btn-bg"
            }
            if(container.classList.contains("con-input")){
                container.classList -= "con-input";
            }
            else{
                container.classList += " con-input";
            }
            queryObj.value = '';
            document.querySelector(".queryCard").style.display = "none";
            if(queryObj !== ""){
                this.findLongLat(value);
                this.getWeather(this.state.latValue,this.state.longValue);
            }
        }   
        this.changeQuery = (e)=>{
            let query = e.target.textContent;
            document.querySelector("#query").value = query;
            document.querySelector(".queryCard").style.display = "none";
            this.findLongLat(query);
            this.getWeather(this.state.latValue,this.state.longValue);
        }
        this.getPosition = ({coords})=>{
            this.setState({latValue:coords.latitude,longValue:coords.longitude});
        }
        this.showError = (err)=>{
            switch(err) {
                case err.PERMISSION_DENIED:
                  alert("User denied the request");
                  break;
                case err.POSITION_UNAVAILABLE:
                  alert("Location unavailable.");
                  break;
                case err.TIMEOUT:
                  alert("The request to get user location timed out.");
                  break;
                case err.UNKNOWN_ERROR:
                  alert("An unknown error occurred.");
                  break;
                default:
                    alert("Some Error in getting Your Location");
              }
        }
        this.componentDidMount = ()=>{
            this.getCityNames();
            this.getWeather(this.state.latValue,this.state.longValue);
        }
    }
    render() {
        return (
            <div>
                <div className="first-row">
                    <MainWeather mainDes = {this.state.mainDes} main={this.state.main} name={this.state.name} />
                    <DisplayChart windState = {this.state.windStateValue} tempState={this.state.tempValueState} windSpeedStringArray={this.state.nextSevenDaysWindSpeed} pressureStringArray={this.state.nextSevenDaysPressure} tempStringArray = {this.state.nextSevenDaysTemp} dateStringArray={this.state.nextSavenDays} humidityStringArray={this.state.nextSevenDaysHumidity} />
                </div>
                <div className="" id="container-input"></div>
                <div id="input-back">
                    <div className="input">
                            <input onFocus={()=>{this.guessQuery()
                    document.querySelector(".queryCard").style.display = ""}} onChange={()=>{this.guessQuery()}} type="text" id="query" placeholder="Type A City & Click Search" />
                            <button id="btn" onClick={()=>{this.changeWeather()}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="42.077" height="28.077" viewBox="0 0 92.077 78.077">
                                    <g data-name="Group 11" transform="translate(-1408 -411)">
                                    <g id="Ellipse_33" data-name="Ellipse 33" transform="translate(1408 411)" fill="none" stroke="#fff" strokeWidth="10">
                                        <circle cx="29.5" cy="29.5" r="29.5" stroke="none"/>
                                        <circle cx="29.5" cy="29.5" r="25.5" fill="none"/>
                                    </g>
                                    <line id="Line_2" data-name="Line 2" x2="35.207" y2="24.981" transform="translate(1459.293 458.519)" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="10"/>
                                    </g>
                                </svg>
                            </button>
                    </div>
                            <div style={{display:"none"}} className="queryCard">
                                {this.state.queryMatches.map(e=><p key={e.key} className="results" onClick={(e)=>this.changeQuery(e)}>{e.name + "," + e.country}</p>)}
                            </div>
                </div>
                <Details co={this.state.co} nh3={this.state.nh3} no={this.state.no} no2={this.state.no2} o3={this.state.o3} so2 = {this.state.so2} pm25={this.state.pm25} pm10={this.state.pm10} actionChart={this.changeChartValue} chartOrderState = {this.state.chartOrderState} tempValueState={this.state.tempValueState} actionTemp={this.changeTempValue} actionWind={this.changeWindValue} windStateValue = {this.state.windStateValue} windSpeedValue={this.state.windSpeedValue} tempValue={this.state.tempValue}  uvIndexValue={this.state.uvIndexValue} windDirectionValue={this.state.windDirectionValue} airQualityValue = {this.state.airQualityValue} pressureValue = {this.state.pressureValue} humidityValue={this.state.humidityValue} />
                <Map name={this.state.name} id="map" lat={this.state.latValue} long={this.state.longValue} />
            </div>
        )
    }
}
export default App
