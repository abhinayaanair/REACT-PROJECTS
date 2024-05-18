import {useState} from 'react'
import SearchBox from "./SeachBox"
import InfoBox from "./InfoBox"
import './WeatherApp.css'

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo]=useState({
        city:"Bengaluru",
        feelsLike: 30.04,
        humidity: 88,
        temp: 26.82,
        tempMax: 29.28,
        tempMin: 26.82,
        weather: "moderate rain",
    })

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo)
    }
    return(
        <div className="WeatherApp">
            <h2>WEATHER NOW</h2>
            <SearchBox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
            </div>
    )
}