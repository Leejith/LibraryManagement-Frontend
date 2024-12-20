import React, { useEffect, useState } from "react";
import "../../Assets/Styles/BookDetails.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function BookDetails() {
  const { isbn13 } = useParams();
  console.log(isbn13);
  const [Details, setDetails] = useState({});
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [reviewText, setReviewText] = useState("");
  // const [rating, setRating] = useState(0);

  useEffect(() => {
    axios
      .get(`https://api.itbook.store/1.0/books/${isbn13}`)
      .then((response) => {
        console.log(response);
        setDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [isbn13]);

  const reviews = [
    {
      name: "Jane Doe",
      comment: "Absolutely loved the story! A wonderful read.",
    },
    {
      name: "John Smith",
      comment: "Engaging and thought-provoking. Highly recommend!",
    },
    { name: "Alice Brown", comment: "Well-written and captivating!" },
    { name: "Chris Lee", comment: "A masterpiece! Will read again." },
    { name: "Mary Ann", comment: "Fascinating from start to finish!" },
  ];

// const overallRating = (
//     reviews.reduce((total, review) => total + review.rating, 0) / reviews.length
//   ).toFixed(1);

  const reviewsToDisplay = showAllReviews ? reviews : reviews.slice(0, 3);

  const handleSubmitReview = () => {
    // console.log("Submitted Review:", rating, reviewText);
    // setRating(0);
    // setReviewText("");
  };
  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };

  // const handleStarClick = (star) => {
  //   setRating(star);
  // };
  return (
    
    <section class="view mt-5">
      <div class="container my-5">
        <div class="card cardbook shadow-lg">
          <div class="row g-0">
            <div class="col-md-3 text-center p-4">
              <img
                src={Details.image}
                alt="Book Cover"
                className="img-fluid rounded shadow-sm"
              />
              <div class="mt-5">
                <button class="btn borrow fw-bold  w-100 mb-4">
                  Borrow Book
                </button>
                <button class="btn  borrow fw-bold w-100">Add to Cart</button>
              </div>
            </div>
            ;
            <div class="col-md-8 p-4">
              <h2 class="fw-bold d-flex align-items-center">
                {Details.title}
                {/* <span className="badge bg-warning text-dark ms-3 fs-6">{overallRating} / 5</span> */}
              </h2>
              <p>
                <strong>Author:</strong> {Details.authors}
              </p>
              <p>
                <strong>Category:</strong> Fiction
              </p>
              {/* <p><strong>ISBN:</strong> 123-456-789</p> */}
              <p>
                <strong>Description:</strong> {Details.desc}
              </p>
              <p>
                <strong>Availability:</strong>{" "}
                <span className="text-light fw-bold">In Stock</span>
              </p>

              <div class="review-section">
                <hr />
                <h4 class="fw-bold">Reviews</h4>

                <div class="mb-4">
                  <p class="mb-2">
                    <strong>Your Rating:</strong>
                  </p>
                  {/* <div class="mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={`me-1 fs-4 star ${star <= rating ? "selected" : "unselected"}`}
                      onClick={() => handleStarClick(star)}
                    >
                      ⭐
                    </span>
                  ))}
                </div> */}
                  <textarea
                    class="form-control mb-3"
                    placeholder="Write your review here..."
                    rows="3"
                    value={reviewText}
                    onChange={handleReviewTextChange}
                  ></textarea>
                  <button
                    class="btn btn-review fw-bold"
                    onClick={handleSubmitReview}
                  >
                    Submit Review
                  </button>
                </div>

                <ul class="list-unstyled">
                  {reviewsToDisplay.map((review, index) => (
                    <li class="mb-4" key={index}>
                      <strong>{review.name}:</strong>
                      <p class="mb-1">{review.comment}</p>
                      {/* <div>
                      <small className="text-muted">Rating: {review.rating} / 5</small>
                    </div> */}
                    </li>
                  ))}
                </ul>

                {reviews.length > 3 && (
                  <button
                    class="btn btn-link p-0 text-decoration-none"
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
    </section>
  );
}

export default BookDetails;
