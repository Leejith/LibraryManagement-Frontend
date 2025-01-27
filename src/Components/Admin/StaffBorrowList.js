import axios from 'axios';
import React, { useEffect, useState } from 'react'

function StaffBorrowList() {
  const [Borrowed, setBorrowed] = useState([]);

  const borrowbook = () => {
    axios.get("http://localhost:4060/borrowedbook")
      .then((response) => {
        console.log(response)
        setBorrowed(response.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    borrowbook()
  }, [])

  const returnbook = (staffid, bookid) => {

    console.log(bookid, "i")
    console.log(staffid, "ii")
    axios.delete(`http://localhost:4060/returnbook/${staffid}`)
      .then((response) => {
        console.log(response)
        borrowbook()
      })
      .catch((err) => {
        console.log(err)
      })

    axios.put(`http://localhost:4060/bookreturnstatus/${bookid}`)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err);
      })
  }
  return (
    <div>
      <div class="container my-5">
        <h2 class="mb-4 fw-bold"> Staff Borrow Books</h2>
        {Borrowed.length === 0 ? (
          <div>No  borrowed books found.</div>
        ) : (

          <table class="table table-bordered">
            <thead>
              <tr>
                <th>User Name</th>
                <th>Book Title</th>
                <th></th>
              </tr>
            </thead>
            {Borrowed.map((e) => {
              return (



                <tbody>

                  <tr>
                    <td class="fw-bold">{e?.staffid?.name}</td>
                    <td>{e?.bookid?.booktitle}</td>
                    <td><button class="btn btn-danger" onClick={() => returnbook(e?.staffid?._id, e?.bookid?._id)}>remove</button></td>
                  </tr>

                </tbody>

              )

            })}

          </table>

        )}
      </div>
    </div>
  )
}

export default StaffBorrowList
