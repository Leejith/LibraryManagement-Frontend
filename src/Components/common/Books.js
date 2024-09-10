import React, { useEffect, useState } from 'react'
import '../../Assets/Styles/Books.css' 
import axios from 'axios'

function Books() {
  const[Book,setBook]=useState([])
  useEffect(()=>{
    axios.get("https://api.itbook.store/1.0/new")
    .then((response)=>{
      console.log(response)
      setBook(response.data.books)
    })
    .catch((error)=>{
      console.log(error)
    })
  },[])

  return (
    <div class="container-fluid  books-con ">
        <h1 class="text-center py-4 Books">BOOKS</h1>
      <div class="container card-row">
        {
          Book.map((Book)=>{
            // i=[]
            // if(Book.[i]<=4)
            return(
            
              <div class="card ">
                <img src={Book.image} class="card-img-top"/>
                <div class="card-body">
                  <h5 class="card-title">{Book.title}</h5>
                  <p class="card-text">{Book.price}</p>
                  <a href="#" class="btn btn-primary">View Book</a>
                </div>
              </div>
            
              
            )
          })
        }
      </div>
       

    </div>
  )
}

export default Books