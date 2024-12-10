import React from 'react'
import "../../Assets/Styles/Home.css"
import ABOUTUS from '../../Assets/Images/about us.jpg'
import home from '../../Assets/Images/home.png'
import { Link } from 'react-router-dom'


function Home() {
  return (
   
  <section class="home">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-7 col-md-7 col-12 py-lg-5 p-5 order-1">
            <h1 class="display-1 anime ">BOOKWORLD</h1>
            <p class="my-lg-5 my-sm-3 anime">Reading gives us someplace to go when we have to stay where we are,
            as turning pages and discovering new worlds allow us to get lost in the story
            and find ourselves within it</p>
            <div class="input-group m-2">
            <Link to ={'/book'}><button class="btn ex-more anime anime-btn">explore more</button></Link>  
            </div>
            </div>
          <div class="col-lg-5 col-md-5 col-12 my-sm-1   order-sm-2">
          <img src={home} class="img-fluid "/>

          </div>
        </div>
      </div>
      

    </section>
   
  )
}

export default Home