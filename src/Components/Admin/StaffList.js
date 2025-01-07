import axios from "axios";
import React, { useEffect, useState } from "react";

function StaffList() {
  const [StaffList, setStaffList] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4060/stafflist")
      .then((response) => {
        console.log(response);
        setStaffList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <div class="container text-center mt-5">
        <h1 class="fw-bold mb-4">Staff LIST</h1>
        <div class="container ">
          <div class="row">
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">SL.NO</th>
                  <th scope="col">NAME</th>
                  <th scope="col">ID.NO</th>
                  <th scope="col">Department</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              {StaffList.map((staff, index) => {
                return (
                  <tbody>
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{staff.name}</td>
                      <td>{staff.idno}</td>
                      <td>{staff.department}</td>
                      <td>{staff.email}</td>
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

export default StaffList;
