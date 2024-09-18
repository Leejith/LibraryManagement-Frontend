import React from 'react'
import '../../Assets/Styles/BookDetails.css'
import  view from '../../Assets/Images/admin.png'

function BookDetails() {
  return (
    <section class="view">
        <div class="container viewbook">
            <div class="row">
                <div class="col mb-5">
                    <div class="card view-card m-auto">
                        <img src={view} class="card-img-top"/>
                        <div class="card-body">
                        <button type="button" class="btn btn-primary">b</button>
                        </div>
                    </div> 

                </div>
                <div class="col">

                </div>
            </div>
             
        </div>
    </section>
  )
}

export default BookDetails