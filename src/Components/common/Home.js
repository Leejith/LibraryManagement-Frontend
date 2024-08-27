import React from 'react'
import{BrowserRouter,Routes,Route} from 'react-router-dom';
import "../../Assets/Styles/Home.css"
import Navbar from './Navbar';

function Home() {
  return (
    
    <section class='main-home'>
          <div class='container py-5'>
              <div class="row py-4">
                  <div class="col-lg-7 pt-5 text-center">
                      <h1>BOOKWORLD</h1>
                      <button class="btn1">explore more</button>
                  </div>
              </div>
          </div>
      </section>
  )
}

export default Home