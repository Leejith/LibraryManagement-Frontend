import axios from "axios";
import React, { useEffect, useState } from "react";
import imgurl from "../../Api/Imgurl";
import "../../Assets/Styles/AdminHome.css";

function BookList() {
  const [Book, setBook] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const booklist = () => {
    axios
      .get("http://localhost:4060/booklist")
      .then((response) => {
        setBook(response.data.data);
        setFilteredBooks(response.data.data); // Initialize filtered list
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    booklist();
  }, []);

  const openModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBook(null);
  };

  const removebook = () => {
    if (selectedBook) {
      axios
        .post(`http://localhost:4060/removebook/${selectedBook._id}`)
        .then(() => {
          booklist();
          closeModal();
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  const handleSearch = (e) => {
    const search = e.target.value.toLowerCase();
    setSearchTerm(search);

    const filtered = Book.filter((book) => {
      return (
        book.booktitle.toLowerCase().includes(search) ||
        book.genre.toLowerCase().includes(search) ||
        book.authorname?.toLowerCase().includes(search)
      );
    });

    setFilteredBooks(filtered);
  };

  return (
    <div>
      <div class="container text-center mt-5">
        <h1 class="fw-bold mb-4">BOOK LIST</h1>
        <div class="container">
          <div class=" search-col order-sm-2">
            <div class="se-box">
              <input
                type="text"
                name="search"
                placeholder="search..."
                value={searchTerm}
                onChange={handleSearch}
                class="search-box"
              />
              <button class="search-button" type="button">
                <i class="ri-search-line"></i>
              </button>
            </div>
          </div>
          <div class="row">


            <table class="table mb-5">
              <thead>
                <tr>
                  <th scope="col">SL.NO</th>
                  <th scope="col">TITLE</th>
                  <th scope="col">AUTHOR</th>
                  <th scope="col">GENRE</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              {filteredBooks.length > 0 ?
                (searchTerm ? filteredBooks : Book).map((book, index) => {
                  return (
                    <tbody key={book._id}>
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td class="fw-bold">{book.booktitle}</td>
                        <td class="fw-semibold">{book.authorname}</td>
                        <td class="fw-semibold">{book.genre}</td>
                        <td>
                          <a href="#"
                            class="btn remove-button fw-bold"
                            onClick={() => openModal(book)}
                          >
                            remove Book
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  );
                }
                ) : (
                  <div class="text-center mt-5">
                    <h3 class="text-dark  fw-bold ">No books found !</h3>
                    <p>Try a different search term .</p>
                  </div>
                )
              }
            </table>
          </div>
        </div>
      </div>
      {showModal && selectedBook && (
        <div class="modal d-flex justify-content-center align-items-center show removebook-box">
          <div class="modal-dialog">
            <div class="modal-content remove-bookbox">
              <div class="modal-header remove-header">
                <h5 class="modal-title fw-bold">Confirm Removal</h5>
                <button
                  type="button"
                  class="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div class="modal-body text-center">
                <p>Are you sure you want to remove this book?</p>
                <img
                  src={`${imgurl}${selectedBook?.image?.originalname}`}
                  alt={selectedBook.booktitle}
                  class="img-fluid mb-3 remove-img"
                />
                <p class="fw-bold">{selectedBook.booktitle}</p>
                <p>Genre: {selectedBook.genre}</p>
              </div>
              <div class="modal-footer d-flex justify-content-between">
                <button class="btn btn-dark" onClick={closeModal}>
                  Cancel
                </button>
                <button class="btn btn-danger" onClick={removebook}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BookList;

