import React, { useEffect, useState } from 'react'
import '../../Assets/Styles/BookDetails.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function BookDetails() {

    const {isbn13} = useParams();
    console.log(isbn13)

    const[Details,setDetails]=useState({})

    useEffect(()=>{
        axios
        .get(`https://api.itbook.store/1.0/books/${isbn13}`)
        .then((response)=>{
            console.log(response)
            setDetails(response.data)
            
        })
        .catch((error)=>{
            console.log(error)
        })

    },[isbn13])

  return (
    <section class="view">
        <div class="container viewbook">
            <div class="row">
                <div class="col m-5 ">
                    <div class="card view-card">
                        <img src={Details.image} class="card-img-top"/>
                        
                        <div class="card-body">
                        <button type="button" class="btn btn-primary">buy now</button>
                        </div>
                    </div> 

                </div>
                <div class="col m-5">
                    <h2>{Details.title}</h2> 
                <h4 className="text-success">${Details.price}</h4> 
                </div>
            </div>
             
        </div>
    </section>
  )
}

export default BookDetails