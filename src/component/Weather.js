import React, { useEffect, useState } from 'react'
import "./weather.css";


export default function Weather() {
 
    const [city, setcity] = useState(null);
    const [search, setSearch] = useState("bijuri");
    useEffect( ()=> {
        const fetchApi = async()=>{
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=f7280bf8b97d842710b0b54364d1a6e7`
         const response = await fetch(url);
         const resJson = await response.json();
                  console.log(resJson.main);
                setcity(resJson.main); 


        }
        fetchApi();
    }, [search] )
  return (
    <div className='container-main'>
        <div className='center_div'> 
        <h1>Weather Report </h1>
        <div className='input-container'>
            <input type="search" placeholder='City Name ' className='input' onChange={(event)=>{
             setSearch(event.target.value)
            }} />
        </div>
        <div className='data'> 
        {
            !city ? (
                <p>No Data Found</p>
            ):(
                <div>
                <div className='info'>
                <h1 className='location'>
                <i class="w3-jumbo w3-spin fa fa-home"></i> {search}
                 </h1>
                 <h1 className='temp'>{city.temp} Cel</h1>
                 <h3> Min :{city.temp_min} Cel | Max : {city.temp_max} Cel</h3>
                 <h4> Sea Level :{city.sea_level} M | Humidity : {city.humidity}</h4>
           
              </div>
               
              </div>
            )
        }
        </div>
     </div>
    </div>
  )
}
