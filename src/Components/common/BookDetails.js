import React, { useEffect, useState } from 'react'
import '../../Assets/Styles/BookDetails.css'
import axios from 'axios'
import { useParams } from 'react-router-dom'

function BookDetails() {

    const {isbn13} = useParams();
    console.log(isbn13)

    const[Details,setDetails]=useState({})
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [showAllReviews, setShowAllReviews] = useState(false);
    const [rating, setRating] = useState(0);
    const [reviewText, setReviewText] = useState("");
    const reviews = [
        { name: "Jane Doe", comment: "Absolutely loved the story! A wonderful read." },
        { name: "John Smith", comment: "Engaging and thought-provoking. Highly recommend!" },
        { name: "Alice Brown", comment: "Well-written and captivating!" },
        { name: "Chris Lee", comment: "A masterpiece! Will read again." },
        { name: "Mary Ann", comment: "Fascinating from start to finish!" },
      ];

      const overallRating = (
        reviews.reduce((total, review) => total + review.rating, 0) / reviews.length
      ).toFixed(1);
     
      const reviewsToDisplay = showAllReviews ? reviews : reviews.slice(0, 3);
    useEffect(()=>{
        axios
        .get(`https://api.itbook.store/1.0/books/${isbn13}`)
        .then((response)=>{
            console.log(response)
            setDetails(response.data)
            
        })
        .catch((error)=>{
            console.log(error)
        })

    },[isbn13])


    const handleSubmitReview = () => {
      // For now, simply log the rating and review text to console
      console.log("Submitted Review:", rating, reviewText);
      // Clear the form after submission
      setRating(0);
      setReviewText("");
    };
    const handleReviewTextChange = (e) => {
      setReviewText(e.target.value);
    };

    const handleStarClick = (star) => {
      setRating(star);
    };
return(
      <div className="container my-5">
      <div className="card shadow-lg">
        <div className="row g-0">
          <div className="col-md-4 text-center bg-light p-4" style={{ position: "sticky", top: "0", zIndex: "10" }}>
            <img src="https://via.placeholder.com/200x300" alt="Book Cover" className="img-fluid rounded shadow-sm" />
            <div className="mt-4">
              <button className="btn btn-primary w-100 mb-2">Borrow Book</button>
              <button className="btn btn-outline-danger w-100">Add to Cart</button>
            </div>
          </div>

          <div className="col-md-8 p-4">
            <h2 className="fw-bold d-flex align-items-center">
              Book Title
              <span className="badge bg-warning text-dark ms-3 fs-6">{overallRating} / 5</span>
            </h2>
            <p><strong>Author:</strong> John Doe</p>
            <p><strong>Category:</strong> Fiction</p>
            <p><strong>ISBN:</strong> 123-456-789</p>
            <p><strong>Description:</strong> This book is a fascinating tale that explores the depths of human emotions. A must-read for everyone looking for an engaging story.</p>
            <p><strong>Availability:</strong> <span className="text-success fw-bold">In Stock</span></p>

            <div className="review-section" style={{ maxHeight: "300px", overflowY: "auto" }}>
              <hr />
              <h4 className="fw-bold">Reviews</h4>

              <div className="mb-4">
                <p className="mb-2"><strong>Your Rating:</strong></p>
                <div className="mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`me-1 fs-4 star ${star <= rating ? "selected" : "unselected"}`}
                      onClick={() => handleStarClick(star)}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
                <textarea
                  className="form-control mb-3"
                  placeholder="Write your review here..."
                  rows="3"
                  value={reviewText}
                  onChange={handleReviewTextChange}
                ></textarea>
                <button className="btn btn-primary" onClick={handleSubmitReview}>Submit Review</button>
              </div>

              <ul className="list-unstyled">
                {reviewsToDisplay.map((review, index) => (
                  <li className="mb-4" key={index}>
                    <strong>{review.name}:</strong>
                    <p className="mb-1">{review.comment}</p>
                    <div>
                      <small className="text-muted">Rating: {review.rating} / 5</small>
                    </div>
                  </li>
                ))}
              </ul>

              {reviews.length > 3 && (
                <button
                  className="btn btn-link p-0 text-decoration-none"
                  onClick={() => setShowAllReviews(!showAllReviews)}
                >
                  {showAllReviews ? "Show Less" : "Show More"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default BookDetails