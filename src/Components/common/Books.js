import React, { useEffect, useState } from 'react'
import '../../Assets/Styles/Books.css' 
import axios from 'axios'
import { Link } from 'react-router-dom'

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
  const displayBook = Book.slice(0, 3);

  return (
    <div class="container-fluid  books-con ">
        <h1 class="text-center py-3">BOOKS</h1>
      <div class="container ">
        <div class="row">
        {
          displayBook.map((Book)=>{
            
            return(
            <div class=" col-lg-4 col-md-6 col-sm-12">
              <div class="card book-card">
                <img src={Book.image} class="card-img-top"/>
                <div class="card-body text-center">
                  <h5 class="card-title">{Book.title}</h5>
                  <p class="card-text">{Book.price}</p>
                  <a href="#" class="btn view-button">View Book</a>
                </div>
              </div>
            </div>
            
              
            )
          })
        }
      </div>
      </div> 
      <Link to={'/book'}><button type="button" class="btn more-button p-3">EXPLORE MORE</button></Link>
    </div>
  )
}

export default Books