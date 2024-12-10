import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Assets/Styles/StProf.css'; // Assuming your CSS is in this path

function StafPr() {
  const [books, setBooks] = useState([]);
  
  // Fetching the book data from the API
  useEffect(() => {
    axios
      .get("https://api.itbook.store/1.0/new")
      .then((response) => {
        console.log(response);
        setBooks(response.data.books); // Update state with fetched books
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // Display a subset of books (from index 5 to 7)
  const displayBooks = books.slice(5, 8);

  return (
    <div className="container-fluid main">
      {/* Sidebar */}
      <ul className="nav flex-column one">
        <li className="nav-item">
          <h1>Welcome Staff</h1>
        </li>
        <li className="nav-item">
          <h4>Reg No : 961820104059</h4>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btt1">Edit</button>
        </li>
        <li className="nav-item">
          <button type="button" className="btn btt2">Primary</button>
        </li>
      </ul>

        {/* Suggested Books Section */}
        <div className="row dash2">
          <div className="col-12">
            <h1>SUGGESTED FOR YOU</h1>
            <div className="container">
              <div className="row">
                {displayBooks.map((book) => (
                  <div className="col-lg-4 col-md-6 col-sm-12 car-con" key={book.isbn13}>
                    <div className="card card1">
                      <img src={book.image} className="card-img-top" alt={book.title} />
                      <div className="card-body">
                        <h5 className="card-title">{book.title}</h5>
                        <a href={book.url} className="btn btn-primary">View More</a>
                        <a href="#" className="btn btn-2">Fav</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default StafPr;
