import React from 'react'
import "./style.css"
const Temp = () => {
  return (
    <div>
      <div className='Wrap'>
      <div className='search'>
          <input type="search" 
           placeholder='Enter the city name'
           autoFocus
           id = "search"
           className='searchTerm'/>
      </div>
        <button className='searchButton' type='button'></button>
      </div>
    </div>
  )
}

export default Temp
