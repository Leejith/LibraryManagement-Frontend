import React, { useState } from 'react'

function RequestList() {
    const [requests, setRequests] = useState([]);
  return (
    <div>
        <div className="container my-5">
      <h2 className="mb-4">Borrow Requests</h2>
      {requests.length === 0 ? (
        <div>No requests received.</div>
      ) : (
        <table className="table table-bordered">
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

export default RequestList