import axios from "axios";
import React, { useEffect, useState } from "react";

function BookList() {
  const [Book, setBook] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4060/booklist")
      .then((response) => {
        console.log(response);
        setBook(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const removebook=()=>{
    axios.put("")
  }

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
                  <th scope="col">genre</th>
                  <th scope="col"></th>
                </tr>
              </thead>
              {Book.map((Book, index) => {
                return (
                  <tbody>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{Book.booktitle}</td>
                      <td>{Book.authorname}</td>
                      <td>{Book.genre}</td>
                      <td>
                        <a class="btn view-button" onClick={removebook}>remove Book</a>
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
