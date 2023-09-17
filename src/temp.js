import React, { useEffect, useState } from 'react'
import "./style.css"
const Temp = () => {

const [ searchValue , setSearchValue] = useState("Chemnitz") ;

const getWeatherInfo = async()=> {
 try{
  let url =  
  `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&appid=177f01a2d62e1d420e2bdfdb235f75f4` 
    let res = await fetch(url);
    let data = await res.json();
  
      const {temp , humidity , pressure} = data.main ;
      const {main : weathermood} = data.weather
      console.log(temp , humidity , pressure , weathermood)
 }
catch (error) {
console.log(error)
 }
} ; 
  
 useEffect(()=> {
  getWeatherInfo();
 } , []);
  return (
    <div>
      <div className='wrap'>
      <div className='search'>
          <input type="search" 
           placeholder='search...'
           autoFocus
           id = "search"
           className='searchTerm'
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
           />

           <button className='searchButton' type='button'onClick={getWeatherInfo} >


        Search</button>
      </div>
      </div>
      
      {/* nich wala area
         */}
      <article className='widget'>
        <div className='weatherIcon'>
         <i className={"wi wi-day-sunny"}></i>
        </div>

        <div className='weatherInfo'>
        <div className='temperature'>
        <span>25.5</span>
        </div>
         
        <div className='description'>
        <div className='weatherCondition'>sunny</div>
           <div className='place'> Ambala, India </div>
        </div>
        </div>

        <div className='date'>{new Date().toLocaleString()}</div>

          {/* ummmm 4 sections jo divdie kiye the 
         */}
         <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                5:15 PM <br />
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                19:19 <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                19:19 <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                 19 :19 <br />
                Speed
              </p>
            </div>
          </div>
        </div>
        
      </article>
    </div>
  )
}

export default Temp
