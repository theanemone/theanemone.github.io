import React, { Component } from 'react';
import Form from './Form'
import Results from './Results'
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun} from '@fortawesome/free-solid-svg-icons'


library.add(faSun)

const APIKEY='c1c25f387fb9506d5b0da81ad4177c8b'
class App extends Component {
  
state ={
  value:"",
  city:"",
  humidity:"",
  sunrise:"",
  sunset:"",
  temp:"",
  pressure:"",
  wind:"",
  err:false,

}
InputChanger = (e) =>{
  this.setState({
    value:e.target.value
  })
}
ButtonSubmit = (e) =>{
  e.preventDefault()
console.log("potwierdzony formularz");
const API=`http://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKEY}&units=metric`
fetch(API)
.then(response=>{
  if(response.ok) {
return response

}
throw Error("Nie udało się")
})
.then(response => response.json())
.then(data =>{
  
  this.setState(state =>({
 
  err:false,
  humidity:data.main.humidity,
  sunrise:data.sys.sunrise,
  sunset:data.sys.sunset,
  temp:data.main.temp,
  pressure:data.main.pressure,
  wind:data.wind.speed,
  city:state.value,
 
}))
})
.catch(err=>{
  this.setState(state =>({
    err:true,
    city:state.value,

  }))
})
}
render() {
    return (
      <div className="App">
     <Form text={this.state.value} 
     changer={this.InputChanger}
     submit={this.ButtonSubmit}
     />
     <Results weather={this.state}/>
      </div>
    );
  }
}

export default App;
