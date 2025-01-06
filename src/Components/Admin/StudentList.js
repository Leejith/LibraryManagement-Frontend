import axios from "axios";
import React, { useEffect, useState } from "react";

function StudentList() {
  const [StudentsList, setStudentsList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4060/studentlist")
      .then((response) => {
        console.log(response);
        setStudentsList(response.data.data);
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
                  <th scope="col">department</th>
                  <th scope="col">reg.no</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              {StudentsList.map((data, index) => {
                return (
                  <tbody>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{data.name}</td>
                      <td>{data.department}</td>
                      <td>{data.regno}</td>
                      <td>{data.email}</td>
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

export default StudentList;
