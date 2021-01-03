import React, { useState } from 'react'
// ICONS 
import {atmosphereIcon, clearSkyIcon, cloudyIcon, drizzleIcon, rainIcon, snowIcon, thunderStormIcon} from"./ICONS/Icons"
// CSS 
import "./DefaultWeather.css"
export default function DefaultWeather(props) {
    let [atmos,setAtmos] = useState(["Mist","Smoke",'Haze','Dust','Fog','San','Dust','Ash','Squall','Tornado'])
        return (
            <div className="icon-section">
               {props.main === "Clouds" && <div className="cloudy">
                    {cloudyIcon}
                </div>}
                {props.main === "Rain" && <div className="rain">
                    {rainIcon}
                </div>}
                {props.main === "Thunderstorm" && <div className="thunderstorm">
                    {thunderStormIcon}
                </div>}
                {props.main === "Drizzle" && <div className="arizzle">
                    {drizzleIcon}
                </div>}
                {props.main === "Clear" && <div className="clear-sky">
                    {clearSkyIcon}
                </div>}
                {props.main === "Snow" && <div className="snow">
                    {snowIcon}
                </div>}
               {atmos.includes(props.main) && <div className="atmosphere">
                    {atmosphereIcon}
                </div>}
            </div>
        )
}