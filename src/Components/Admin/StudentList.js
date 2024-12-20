import axios from 'axios';
import React, { useEffect, useState } from 'react'

function StudentList() {
    const [StudentsList, setStudentsList] = useState([]);
    useEffect(() => {
      axios
        .get("https://api.itbook.store/1.0/new")
        .then((response) => {
          console.log(response);
          setStudentsList(response.data.books);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  return (
    <div>
        <div class="container text-center mt-5">
        <h1 class="fw-bold mb-4">Student LIST</h1>
        <div class="container ">
          <div class="row">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">SL.NO</th>
                  <th scope="col">NAME</th>
                  <th scope="col">REG.NO</th>
                  <th scope="col">Details</th>
                  <th scope="col">Details</th>
                </tr>
              </thead>
              {StudentsList.map((Book, index) => {
                return (
                  <tbody>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{Book.title}</td>
                      <td>{Book.authors}</td>
                      
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentList