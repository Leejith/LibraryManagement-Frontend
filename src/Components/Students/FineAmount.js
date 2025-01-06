import React, { useState } from "react";
import "../../Assets/Styles/Profile.css";

function FineAmount() {
  const [fine, setFine] = useState([
    { id: 1, book: "The Great Gatsby", dueDate: "2024-12-01", amount: 50 },
    { id: 2, book: "1984", dueDate: "2024-12-05", amount: 90 },
  ]);

  const [totalFine, setTotalFine] = useState(
    fine.reduce((total, fine) => total + fine.amount, 0)
  );

  // const[Total,setTotal] = useState(totalFine())
  // const totalFine=()=>{
  //   fine.reduce((Total,fine)=>Total+fine.amount,0)
  // }

  return (
    <div>
      <h2 class="fw-bold">Fine Amount</h2>

      <div class="mt-5 ">
        <table class="table table-striped ">
          <thead>
            <tr>
              <th>Book Title</th>
              <th>Due Date</th>
              <th>Fine Amount (₹)</th>
            </tr>
          </thead>
          <tbody>
            {fine.map((fine) => (
              <tr>
                <td>{fine.book}</td>
                <td>{fine.dueDate}</td>
                <td>{fine.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <h5 class="text-end">Total Fine: ₹{totalFine}</h5>
      </div>

      {/* <div class="mt-4">
  <h4>Pay Your Fine</h4>

    <button type="submit" class="btn btn-primary">
      Pay Now
    </button>
</div> */}
    </div>
  );
}

export default FineAmount;
