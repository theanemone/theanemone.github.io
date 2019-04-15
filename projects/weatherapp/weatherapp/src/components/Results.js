import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Results = props =>{
    const { err,humidity,sunrise,sunset,temp,pressure,wind,city}=props.weather
    let content=null
    if(!err&&city)
    {
        const sunriseTime=new Date(sunrise*1000).toLocaleTimeString()
        const sunsetTime=new Date(sunset*1000).toLocaleTimeString()
        content=
        (
           <>
                <div className="row">
                <div className="tile"id="temp"> <h4>{Math.round(temp)} &#176;C</h4></div>
                <div className="tile"id="details"><div className="label"><h4>{city}</h4></div></div>
                <div className="tile"id="sun"><div className="label"><h4>Wschód słonca {sunriseTime}</h4></div>
                <br/>
                <div className="label"><h4>Zachód słonca {sunsetTime}</h4></div>
                </div>
                <div className="tile"id="wind"><div className="label"><h4>Siła wiatru {wind} m/s</h4></div>
                <br/>
                <div className="label"><h4>Wilgotność {humidity} &#37;</h4></div>
                </div>
                </div>
                <div className="row">
              
                </div>
                {/* <div className="tile"id="sunriseicon"><div className="label"><i className="sunriseico"><FontAwesomeIcon icon="sun" /></i></div></div>
                </div>
                <div className="row">
                
                <div className="tile"id="sunsetTime"><div className="label2"><h4></h4></div></div>
                <div className="tile"id="sunsetIcon"><div className="label"><i className="sunsetico"><FontAwesomeIcon icon="sun" /></i></div></div>
                </div>
                <div className="row">
                <div className="tile"id="wind"><div className="label1"><h4>Siła wiatru</h4></div></div>
                <div className="tile"id="windDetails"><div className="label2"><h4>{wind} m/s</h4></div></div>
                <div className="tile"id="windIcon"><div className="label"><i className="windico"><FontAwesomeIcon icon="wind" /></i></div></div>
                </div>
                <div className="row">
                <div className="tile"id="pressure"><div className="label1"><h4>Ciśnienie</h4></div></div>
                <div className="tile"id="pressureDetails"><div className="label2"><h4>{pressure} hPa</h4></div></div>
                <div className="tile"id="pressureIcon"><div className="label"><i className="waterico"><FontAwesomeIcon icon="water" /></i></div></div>
                </div> */}
                
                
                
                {/* <h3>  Wyniki wyszukiwania dla: <strong>{city}</strong></h3>
                <h4> Data i godzina: {date}</h4>
                
                <h4>Wschód słońca: {sunriseTime}</h4>
                <h4>Zachód słońca: {sunsetTime}</h4>
                <h4>Aktualna siła wiatru: {wind} m/s</h4>
                <h4>Aktualne ciśnienie: {pressure} hPa</h4> */}
           </> 
        )
    }
return (
    <div className="results">
 {err ? `Nie ma takiego miasta jak ${city}`:content}
 </div>
)

}
export default Results