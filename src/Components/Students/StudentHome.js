import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import home from '../../Assets/Images/home.png'
import '../../Assets/Styles/Home.css'
function StudentHome() {
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
    <><section class="home mt-5 mt-lg-2">
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-7 col-md-7 col-12 py-lg-5 p-5 mt-4 order-1">
                <h1 class="display-1 anime ">BOOKWORLD</h1>
                <p class="my-lg-5 my-sm-3 anime">Reading gives us someplace to go when we have to stay where we are,
                  as turning pages and discovering new worlds allow us to get lost in the story
                  and find ourselves within it</p>
                <div class="input-group m-2">
                  <Link to={'/studentbook'}><button class="btn ex-more anime anime-btn">explore more</button></Link>
                </div>
              </div>
              <div class="col-lg-5 col-md-5 col-12 my-sm-1   order-sm-2">
                <img src={home} alt="" class="img-fluid " />
    
              </div>
            </div>
          </div>
    
    
        </section><div class="container-fluid book-con ">
            <h1 class="text-center py-3">BOOKS</h1>
            <div class="container ">
              <div class="row ">
                {displayBook.map((Book) => {
    
                  return (
                    <div class=" col-lg-4 col-md-6 col-sm-12">
                      <div class="card books-card">
                        <img src={Book.image} alt=""class="card-img-top" />
                        <div class="card-body text-center">
                          <h5 class="card-title">{Book.title}</h5>
                          <p class="card-text b-3">{Book.price}</p>
                          <a href="/home"  class=" fw-bold views-button ">View Book</a>
                        </div>
                      </div>
                    </div>
    
    
                  )
                })}
              </div>
            </div>
            <Link to={'/studentbook'}><button type="button" class="btn more-books p-3">EXPLORE MORE</button></Link>
          </div></>
  )
}

export default StudentHome
