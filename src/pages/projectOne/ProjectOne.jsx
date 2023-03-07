import { useEffect, useState } from 'react';
import NavbarHome from '../../NavbarHome';
import './ProjectOne.css'
function  ProjectOne(){
    const lat =17.883586;
    const lon =102.747612 ;
    const apiKey="f8d1648ff140eacd53d8f265f6fda9f7"
    const [city,setCity] = useState({})
    const [load,isLoad] = useState(false)
    useEffect(()=>{
      const url=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      fetch(url)
      .then(res=>res.json())
      .then(data=>{
          setCity(data)
          isLoad(true)
      })
      
    },[])
  
    const convertTemp=(k)=>{
        return (k-273).toFixed()
    }
    return (
        <>
        <NavbarHome />
      { load && <div className="AppOne">
          <section>
              <div className="location">
                  <h1 className="city">{city.name}</h1>
                  <p className="state">TH</p>
              </div>
              <div className="cardOne">
                  <div className="weather">
                      <h1>{convertTemp(city['main'].temp)}&deg;C</h1>
                      <small>สูงสุด : {convertTemp(city['main'].temp_max)}&deg;C , ต่ำสุด : {convertTemp(city['main'].temp_min)}&deg;C</small>
                  </div>
                  <div className="info">
                      <div className="status">{city['weather'][0].main}</div>
                      <div className="humidity">ความชื้น = {city['main'].humidity}</div>
                      <div className="wind">ความเร็วลม = {city['wind'].speed}</div>
                  </div>
              </div>
          </section>
      </div>
}
      </>
    
    );
}

export default ProjectOne;

/*
console.log(city['weather'][0].main)
     console.log(city['main'].temp)
      
              */