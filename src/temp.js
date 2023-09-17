import React from 'react'
import "./style.css"
const Temp = () => {
  return (
    <div>
      <div className='wrap'>
      <div className='search'>
          <input type="search" 
           placeholder='search...'
           autoFocus
           id = "search"
           className='searchTerm'/>

           <button className='searchButton' type='button'>
        Search</button>
      </div>
      </div>

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
         <div className='extra-temp'>
           <div className='temp-info-minmax'>
           <div className='two-sided-section'>
           <p> <i className='{} wi wi-sunset'></i></p>
            <p className='extra-info-leftside'> 19:19 PM  <br /> Sunset</p>
           </div>
           
           
           </div>
         </div>
        
      </article>
    </div>
  )
}

export default Temp
