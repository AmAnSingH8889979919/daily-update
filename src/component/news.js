 import axios from 'axios'
 import './news.css'
import React, { useState } from 'react'
 
 export default function News() {
  const [data, setData] = useState([])
  const getNews =()=>{
    axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=441170b8acd24225ad6af82fbcaf168a")
    .then((response)=>{
      console.log(response.data.articles);
      setData(response.data.articles);
    }
    )
  }
  getNews();
    
   return (
     <div className='container_div'>
      <div className='row'>
        {
          data.map((value)=>{
            return(
              <div className='card'>
              <h1> {value.title}</h1>
              <img src={value.urlToImage} className='card-img' alt={value.title} />
              <p className='content'>{value.content}</p>
              <a href={value.url}>for more info</a>
              </div>
               
            )
           })
        }
         {/* <div className='card'>
              <h1>name: {}</h1>
              <img  className='card-img' />
              <p className='content'>{}content</p>
              <a >for more info</a>
              </div> */}
        </div>
      </div>
        
     
   )
 }
 