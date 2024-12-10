import React, { useEffect, useState } from "react";
import "../../Assets/Styles/Landing.css";
import logo from "../../Assets/Images/logo.png";
import { Link } from "react-router-dom";
import home from "../../Assets/Images/home.png";
import { motion } from "framer-motion";
import ABOUTUS from "../../Assets/Images/about us.jpg";
import img1 from "../../Assets/Images/aboutimg4.webp";
import img2 from "../../Assets/Images/aboutimg2.webp";
import img3 from "../../Assets/Images/Aboutimg3.jpg";
import author1 from "../../Assets/Images/author1.jpg";
import author2 from "../../Assets/Images/author2.jpg";
import author3 from "../../Assets/Images/author3.jpg";
import author4 from "../../Assets/Images/author4.jpg";
import author5 from "../../Assets/Images/author5.webp";
import axios from "axios";

function Landing() {
  const [Book, setBook] = useState([]);
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    axios
      .get("https://api.itbook.store/1.0/new")
      .then((response) => {
        console.log(response);
        setBook(response.data.books);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const displayBook = Book.slice(0, 3);

  const handleShowMessage = () => {
    setShowMessage(true);
  };

  const handleCloseMessage = () => {
    setShowMessage(false);
  };

  const quotes = [
    {
      author: "C.S. Lewis",
      image: author1,
      quote: "“We are what we believe we are.”",
      book: "The Chronicles of Narnia",
    },
    {
      author: "J.K. Rowling",
      image: author2,
      quote:
        "“Words are, in my not-so-humble opinion, our most inexhaustible source of magic.”",
      book: "Harry Potter Series",
    },
    {
      author: "J.R.R. Tolkien",
      image: author3,
      quote: "“Even the smallest person can change the course of the future.”",
      book: "The Lord of the Rings",
    },
    {
      author: "F. Scott Fitzgerald",
      image: author4,
      quote:
        "“Gatsby believed in the green light, the orgastic future that year by year recedes before us.”",
      book: "The Great Gatsby",
    },
    {
      author: "Mark Twain",
      image: author5,
      quote:
        "“The man who does not read has no advantage over the man who cannot read.”",
      book: "Adventures of Huckleberry Finn",
    },
  ];

  return (
    <div class="LandingPage">
      {/* Navbar */}
      <div>
        <nav class="navbar navbar-expand-lg fixed-top lan-nav ">
          <div class="container-fluid">
            <img class="logo " src={logo} />
            <p class="lan-book">BOOKWORLD</p>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title ">BOOKWORLD</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body ">
                <ul class="navbar-nav justify-content-center flex-grow-1 pe-2">
                  <li class="nav-item lan-list">
                    <a class="nav-link  active mx-lg-2" href="About">
                      ABOUT US
                    </a>
                  </li>
                  <li class="nav-item lan-list">
                    <a class="nav-link active mx-lg-2" href="">
                      BOOKS
                    </a>
                  </li>
                </ul>
                <Link to="/login">
                  <a href="#" class="btn login-register ">
                    Login / Register
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </div>

      {/* Landing page */}

      <section class="landing">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-7 col-md-7 col-12 py-lg-5 p-5 order-1">
              <h1 class="display-1 lan-anime ">BOOKWORLD</h1>
              <p class="my-lg-5 my-sm-3 lan-anime">
                Reading gives us someplace to go when we have to stay where we
                are, as turning pages and discovering new worlds allow us to get
                lost in the story and find ourselves within it
              </p>
              <div class="m-2">
                <button
                  class="btn lan-more lan-anime"
                  onClick={handleShowMessage}
                >
                  explore more
                </button>
              </div>
            </div>
            <div class="col-lg-5 col-md-5 col-12 my-sm-1  p-5 order-sm-2">
              <motion.img
                src={home}
                class="img-fluid ab-img"
                initial={{ opacity: 0, x: "6%" }}
                whileInView={{ opacity: 1, y: 0, x: "-1%" }}
                transition={{ duration: 1.5 }}
              />
            </div>
          </div>
        </div>
      </section>


      {/* about */}

      <section id="About">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12 p-5">
              <motion.img
                src={ABOUTUS}
                class="img-fluid ab-img"
                initial={{ opacity: 0, x: "-7%" }}
                whileInView={{ opacity: 1,  x: "3%" }}
                transition={{ duration: 1.5 }}
              />
            </div>
            <div class="col-lg-6 col-md-6 col-12 p-lg-4 p-2">
              <h1>ABOUT US</h1>
              <p>
                Welcome to BOOKWORLD, your digital gateway to a world of
                knowledge and imagination. Our mission is to provide a diverse
                and extensive collection of e-books that cater to every reader's
                interest and curiosity At BOOKWORLD, we believe that access to
                literature and information should be limitless. Our online
                library offers a wide array of books across various genres,
                ensuring that there's something for everyone We are dedicated to
                fostering a love for reading and lifelong learning by offering a
                vast selection of digital books. Our e-library is designed to
                make reading convenient and enjoyable, anytime and anywhere
                Discover a new chapter in your reading journey with BOOKWORLD.
                Our digital collection is constantly expanding, featuring both
                timeless classics and contemporary works to enrich your literary
                experience. At BOOKWORLD, we strive to make knowledge accessible
                to all. Our e-library provides a user-friendly platform where
                you can explore and enjoy a treasure trove of books, enhancing
                your personal and professional growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* author */}

      <div class="container my-5">
        <h2 class="fw-bold text-center mb-4">Authors Say About Their Books</h2>
        <div
          id="authorQuotesCarousel"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            {quotes.map((item, index) => (
              <div
                class={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div class="text-center">
                  <img
                    src={item.image}
                    alt={item.author}
                    className="rounded-circle mb-3 shadow"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <blockquote class="blockquote">
                    <p class="fs-4">“{item.quote}”</p>
                  </blockquote>
                  <p class="blockquote-footer mt-2">
                    {item.author} <cite title={item.book}>- {item.book}</cite>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#authorQuotesCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#authorQuotesCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>

      {/* about books */}
      <section id="AboutBook">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-6 col-md-6 col-12 p-5 ">
              <h1 class="gap-3">About the Genre Collections</h1>
              <p>
                "At BookWorld, we believe in the power of stories to transport
                you to different worlds, broaden your horizons, and ignite your
                imagination. Our extensive genre collection offers something for
                every reader—whether you’re drawn to the thrills of mystery, the
                magic of fantasy, the wisdom of non-fiction, or the charm of
                romance. With handpicked books across genres, BookWorld ensures
                that you’ll always find the perfect companion for your reading
                journey. Explore our curated selections today and discover your
                next favorite story." "With thousands of titles spanning
                multiple genres, BookWorld is your gateway to discovering new
                perspectives, revisiting timeless classics, and finding that
                perfect book for any moment. Dive into our world of books and
                let your next adventure begin"
              </p>
            </div>
            <div class="col-lg-6 col-md-6 col-12 p-lg-3 p-5 position-relative">
              <motion.img
                src={img1}
                alt="Image 1"
                className="position-absolute img-fluid"
                initial={{ x: "-40%", y: "-60%", opacity: 0 }}
                whileInView={{ x: "40%", y: "-40%", opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                style={{ width: "220px" }}
              />

              {/* Image 2 */}
              <motion.img
                src={img2}
                alt="Image 2"
                className="position-absolute img-fluid"
                initial={{ x: "120%", y: "10%", opacity: 0 }}
                whileInView={{ x: "95%", y: "30%", opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                style={{ width: "300px", transform: "translate(-50%, -50%)" }}
              />

              {/* Image 3 */}
              <motion.img
                src={img3}
                alt="Image 3"
                className="position-absolute img-fluid"
                initial={{ x: "-5%", y: "100%", opacity: 0 }}
                whileInView={{ x: "10%", y: "90%", opacity: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                style={{ width: "300px", transform: "translate(-50%, -50%)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* collections */}

      <div class="container-fluid books-con ">
        <h1 class="text-center py-3">Discover Our Collections</h1>
        <div class="container ">
          <div class="row ">
            {displayBook.map((Book) => {
              return (
                <div class=" col-lg-4 col-md-6 col-sm-12">
                  <div class="card book-card">
                    <img src={Book.image} class="card-img-top" />
                    <div class="card-body text-center">
                      <h5 class="card-title">{Book.title}</h5>
                      <p class="card-text">{Book.price}</p>
                      <a class="btn view-button" onClick={handleShowMessage}>
                        View Book
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button
          type="button"
          class="btn more-button p-3"
          onClick={handleShowMessage}
        >
          EXPLORE MORE
        </button>
      </div>

      {/* alert */}
      {showMessage && (
        <div className="message-overlay">
          <div className="message-box">
            <h4>Please Login or Register</h4>
            <p>To continue, you need to log in or register an account.</p>
            <button className="btn btn-primary" onClick={handleCloseMessage}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Landing;
