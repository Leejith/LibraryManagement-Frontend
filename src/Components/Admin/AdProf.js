import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../Assets/Styles/StProf.css'

function AdProf() {

    const [Book, setBook] = useState([]);
    useEffect(() => {
        axios
            .get("https://api.itbook.store/1.0/new")
            .then((response) => {
                console.log(response);
                setBook(response.data.books)

            })
            .catch((error) => {
                console.log(error);

            })
    }, []);

  return (
    <div>
        <div>
            <div>
                <div class="container-fluid main">
                    <ul class="nav  flex-column one">
                        <li class="nav-item">
                            <h1>BOOK WORLD</h1>
                        </li>
                        <li class="nav-item">
                            <h4>Lic No : 961829</h4>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btt1">Edit</button>
                        </li>
                        <li class="nav-item">
                            <button type="button" class="btn btt2">insights</button>
                        </li>
                    </ul>



                    <div class="container two">
                        <div class="row dash1">
                            <div class="col-lg-3 col-md-6 col-sm-12 box">
                                <div className='box1'>
                                    book borrowed
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 box">
                                <div className='box1'>
                                    Add Books
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 box">
                                <div className='box1'>
                                    Remove Book
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 col-sm-12 box">
                                <div className='box1'>
                                    fine amount
                                </div>
                            </div>
                        </div>

                        <div class="row dash2">
                            <div class="col-12">
                                <h1>BORROW DETAILS</h1>
                                <div class="container ">
                                    <div class="row">
                                        {
                                            Book.map((Book) => {
                                                return (
                                                    <div class="col-lg-4 col-md-6 col-sm-12 car-con">
                                                        Book Name:{Book.title}  ,  borrower : 
                                                    </div>
                                                )
                                            })
                                        }

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default AdProf