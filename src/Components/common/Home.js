import React from 'react'
import "../../Assets/Styles/Home.css"
import ABOUTUS from '../../Assets/Images/about us.jpg'
import home from '../../Assets/Images/home.png'


function Home() {
  return (
   
  <><section class="home">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-7 col-md-7 col-12 py-lg-5 p-5 order-1">
            <h1 class="display-1 anime">BOOKWORLD</h1>
            <p class="my-lg-5 my-sm-3 anime">Reading gives us someplace to go when we have to stay where we are,
            as turning pages and discovering new worlds allow us to get lost in the story
            and find ourselves within it</p>
            <div class="input-group m-2">
              <button class="btn ex-more anime anime-btn">explore more</button>
            </div>
            </div>
          <div class="col-lg-5 col-md-5 col-12 my-sm-1   order-sm-2">
          <img src={home} class="img-fluid "/>

          </div>
        </div>
      </div>
      

    </section>
    
    
    
   {/* about  */}
    
    <section id="About">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-12 p-5">
            <img src={ABOUTUS} class="img-fluid ab-img"/>
           
          </div>
          <div class="col-lg-6 col-md-6 col-12 p-lg-4 p-2">
            <h1>ABOUT US</h1>
            <p>Welcome to BOOKWORLD, your digital gateway to a world of knowledge and imagination. Our mission is to provide a diverse and extensive collection of e-books that cater to every reader's interest and curiosity
            At BOOKWORLD, we believe that access to literature and information should be limitless. Our online library offers a wide array of books across various genres, ensuring that there's something for everyone
            We are dedicated to fostering a love for reading and lifelong learning by offering a vast selection of digital books. Our e-library is designed to make reading convenient and enjoyable, anytime and anywhere
            Discover a new chapter in your reading journey with BOOKWORLD. Our digital collection is constantly expanding, featuring both timeless classics and contemporary works to enrich your literary experience.
            At BOOKWORLD, we strive to make knowledge accessible to all. Our e-library provides a user-friendly platform where you can explore and enjoy a treasure trove of books, enhancing your personal and professional growth.
            </p>

          </div>
        </div>
      </div>
      

    </section></>
   
  )
}

export default Home