import React, { useEffect, useState } from "react";
import "../../Assets/Styles/BookMore.css";
import axios from "axios";
import { motion } from 'framer-motion';

function BookMore() {
  const [Books, setBooks] = useState([]);
  useEffect(() => {
    axios
      .get("https://api.itbook.store/1.0/new")
      .then((response) => {
        console.log(response);
        setBooks(response.data.books);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div class="container-fluid category-nav more-book fixed-top mb-5">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-sm-12 m-sm-auto order-1">
            <div class="dropdown ">
              <button
                class="btn btn-secondary dropdown-toggle category-button"
                type="button"
                data-bs-toggle="dropdown"
              >
                CATEGORY
              </button>
              <ul class="dropdown-menu category-menulist">
                <li>
                  <a class="dropdown-item" href="#">
                    comic
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    novel
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-sm-12 m-sm-auto  search-col order-sm-2">
            <div class="se-box">
              <input
                type="text"
                name="search"
                placeholder="search..."
                class="search-box"
              />
              <button class="search-button" type="buton">
                <i class="ri-search-line"></i>
              </button>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div class="container-fluid  Morebooks-con ">
          <h1 class="text-center py-3">BOOKS</h1>
          <div class="container ">
            <div class="row">
              {Books.map((books,index) => {
                return (
                  
                    <div class=" col-lg-4 col-md-6 col-sm-12">
                      <motion.div
                       key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 ,delay: index * 0.1}}
                  >
                      <div class="card book-card">
                        <img src={books.image} class="card-img-top" />
                        <div class="card-body text-center">
                          <h5 class="card-title fw-bold">{books.title}</h5>
                          <p class="card-text">{books.isbn13}</p>
                          <a
                            href={`/details/${books.isbn13}`}
                            class="btn view-button fw-bold"
                          >
                            View Book
                          </a>
                        </div>
                      </div>
                      </motion.div>
                    </div>
                  
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BookMore;
