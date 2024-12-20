import axios from "axios";
import React, { useEffect, useState } from "react";

function BookList() {
  const [Book, setBook] = useState([]);
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
  return (
    <div>
      <div class="container text-center mt-5">
        <h1 class="fw-bold mb-4">BOOK LIST</h1>
        <div class="container ">
          <div class="row">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">SL.NO</th>
                  <th scope="col">title</th>
                  <th scope="col">author</th>
                  <th scope="col">Details</th>
                  <th scope="col">Details</th>
                </tr>
              </thead>
              {Book.map((Book, index) => {
                return (
                  <tbody>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{Book.title}</td>
                      <td>{Book.authors}</td>
                      <td>
                        <a
                          href={`/details/${Book.isbn13}`}
                          class="btn view-button"
                        >
                          View Book
                        </a>
                      </td>
                      <td>
                        <a class="btn view-button">remove Book</a>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookList;
