import React, { useState } from 'react'

function BorrowedList() {
    const [BorrrowedList, setBorrowedList] = useState([]);
  return (
    <div>
      <div class="container my-5">
      <h2 class="mb-4 fw-bold">Borrow Requests</h2>
      {BorrowedList.length === 0 ? (
        <div>No requests received.</div>
      ) : (
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>User ID</th>
              <th>Book Title</th>
              <th>Requested At</th>
            </tr>
          </thead>
          <tbody>
            
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
         
          </tbody>
        </table>
      )}
    </div>
    </div>
  )
}

export default BorrowedList
