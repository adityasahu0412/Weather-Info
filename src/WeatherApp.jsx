import './WeatherApp.css'
import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import BasicRating from './Rating';
import { useState } from 'react';
export default function WeatherApp(){
const [weatherInfo,setweatherInfo] = useState({
    // city:"Delhi",
    // feelsLike:21.59 ,
    // humidity: 96,
    // temp:20.93,
    // tempMax: 24.5,
    // tempMin: 20.51,
    // weather: "clear sky"
});
    let updateInfo = (newInfo)=>{
        setweatherInfo(newInfo);
    }

  return(
    <div>
        <h1>Weather Information</h1>
        <SearchBox updateInfo = {updateInfo}/>
        <InfoBox info = {weatherInfo}/>
        <BasicRating />

    </div>
    
  )
}