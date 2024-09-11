import React, { useEffect, useState } from 'react'
import '../../Assets/Styles/StProf.css'
import axios from 'axios'
import Books from '../common/Books';

function StProf() {

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
    const displayBook = Book.slice(0, 3);



    return (
        <div>
            <div class="container-fluid main">
                <ul class="nav flex-column one">
                    <li class="nav-item">
                        <h1>Welcome Leejith</h1>
                    </li>
                    <li class="nav-item">
                        <h4>Reg No : 961820104059</h4>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn btt1">Edit</button>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn btt2">Primary</button>
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
                                favorites
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 box">
                            <div className='box1'>
                                book issued
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
                        <h1>SUGESTED FOR YOU</h1>
                        <div class="container ">
                        <div class="row">
                            {
                                displayBook.map((Book) => {
                                    return (
                                        <div class="col-lg-4 col-md-6 col-sm-12 car-con">
                                            <div class="card card1" >
                                                <img src={Book.image} class="card-img-top" alt="..." />
                                                <div class="card-body">
                                                    <h5 class="card-title">{Book.title}</h5>
                                                    <a href="#" class="btn btn-primary">view more</a>
                                                </div>
                                            </div>
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
    )
}

export default StProf