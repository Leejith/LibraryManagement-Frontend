import React, { useEffect, useState } from 'react'
import'../../Assets/Styles/BookMore.css'
import axios from 'axios'

function BookMore() {

    const[Items,setItems]=useState([])
    useEffect(()=>{
      axios.get("https://api.itbook.store/1.0/new")
      .then((response)=>{
        console.log(response)
        setItems(response.data.books)
      })
      .catch((error)=>{
        console.log(error)
      })
    },[])

  return (
<div>
    <div class="container-fluid cat-nav">
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 m-sm-auto  cat-drop order-1">
            <div class="dropdown ">
                <button class="btn btn-secondary dropdown-toggle cat-button" type="button" data-bs-toggle="dropdown">
                CATEGORY
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">comic</a></li>
                    <li><a class="dropdown-item" href="#">novel</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 m-sm-auto  search-col order-sm-2">
                <div class="se-box">
                    
                    <input type='text' name='search'placeholder='search...' class="search-box"/>
                    <button class="search-button" type="buton"><i class="ri-search-line"></i></button>
                </div>
                
                
            </div>
        </div>

    </div>

    <section>
    <div class="container-fluid  books-con ">
        <h1 class="text-center py-3">BOOKS</h1>
      <div class="container ">
        <div class="row">
        {
          Items.map((Items)=>{
            
            return(
            <div class=" col-lg-4 col-md-6 col-sm-12">
              <div class="card book-card">
                <img src={Items.image} class="card-img-top"/>
                <div class="card-body text-center">
                  <h5 class="card-title">{Items.title}</h5>
                  <p class="card-text">{Items.isbn13}</p>
                  <a href={`/details/${Items.isbn13}`} class="btn view-button">View Book</a>
                </div>
              </div>
            </div>
            
              
            )
          })
        }
      </div>
      </div> 
      
    </div>
        
    </section>
</div>
  )
}

export default BookMore