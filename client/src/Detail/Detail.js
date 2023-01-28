import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import './Detail.scss';
import {Helmet} from "react-helmet";


export default function Detail() {
    const [flower,setFlower]=useState([])
    let {flowerID}=useParams()
    const navigate=useNavigate()

    axios.get(`http://localhost:5050/flowers/${flowerID}`)
    .then(res=>setFlower(res.data))

  return (
    <div className='detail'>
         <Helmet>
      <title>Detail Page</title>
    </Helmet>
      
      {
        <div className='kart' >
            <div className='kartimg'>
              <img src= {flower.image}/>
            </div>
        <div className='price'>
            <h3>{flower.name}</h3>
            <p>${flower.price}</p>
          
            <button className='button-5 ' onClick={()=>navigate(-1)}>Back to Page</button>
        </div>
        </div>

      }
          

          
        
    </div>
  )
}
