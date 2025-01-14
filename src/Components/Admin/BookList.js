import axios from "axios";
import React, { useEffect, useState } from "react";
import imgurl from '../../Api/Imgurl'
import '../../Assets/Styles/AdminHome.css'

function BookList() {
  const [Book, setBook] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const booklist=()=>{
    axios
      .get("http://localhost:4060/booklist")
      .then((response) => {
        console.log(response);
        setBook(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    booklist()
  }, []);
  const openModal = (book) => {
    setSelectedBook(book);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedBook(null);
  };
  const removebook=(bookid)=>{
    if (selectedBook) {
      axios
        .post(`http://localhost:4060/removebook/${selectedBook._id}`)
        .then((response) => {
          console.log(response);
          booklist();
          closeModal();
        })
        .catch((err) => {
          console.log(err);
        });
    }
    
  }

  return (
    <div>
      <div class="container text-center mt-5">
        <h1 class="fw-bold mb-4">BOOK LIST</h1>
        <div class="container ">
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
              {Book.map((Book, index) => {
                return (
                  <tbody>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td class="fw-bold">{Book.booktitle}</td>
                      <td class="fw-semibold">{Book.authorname}</td>
                      <td class="fw-semibold">{Book.genre}</td>
                      <td>
                        <a class="btn remove-button fw-bold"onClick={() => openModal(Book)}>remove Book</a>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
      {showModal && selectedBook && (
        <div
          class="modal d-flex justify-content-center align-items-center show removebook-box"
        
        >
          <div class="modal-dialog ">
            <div class="modal-content remove-bookbox">
              <div class="modal-header remove-header">
                <h5 class="modal-title fw-bold ">Confirm Removal</h5>
                <button
                  type="button"
                  class="btn-close"
                  onClick={closeModal}
                ></button>
              </div>
              <div class="modal-body text-center">
              <p class="">Are you sure you want to remove this book?</p>
                <img
                  src={`${imgurl}${selectedBook?.image?.originalname}`}
                  alt={selectedBook.booktitle}
                  class="img-fluid mb-3 remove-img"
    
                />
                <p class="fw-bold">{selectedBook.booktitle}</p>
                <p class="">Genre: {selectedBook.genre}</p>
                
              </div>
              <div class="modal-footer d-flex justify-content-between">
                <button
                  class="btn btn-dark"
                  onClick={closeModal}
                >
                  Cancel
                </button>
                <button
                  class="btn btn-danger"
                  onClick={removebook}
                >
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
