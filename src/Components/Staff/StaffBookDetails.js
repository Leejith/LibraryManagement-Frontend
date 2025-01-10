import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import "../../Assets/Styles/BookDetails.css"

function StaffBookDetails() {
    const { id } = useParams();
  console.log(id);
  const [Details, setDetails] = useState({});
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [reviewText, setReviewText] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:4060/viewbook/${id}`)
      .then((response) => {
        console.log(response);
        setDetails(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

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

  const reviewsToDisplay = showAllReviews ? reviews : reviews.slice(0, 3);

  const handleSubmitReview = () => {
  };
  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };

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
              <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
            </div>
            ;
            <div class="col-md-8 p-4">
              <h2 class="fw-bold d-flex align-items-center">
                {Details.title}
              </h2>
              <p>
                <strong>Author:</strong> {Details.authors}
              </p>
              <p>
                <strong>Category:</strong> Fiction
              </p>
              <p>
                <strong>Description:</strong> {Details.desc}
              </p>

              <div class="review-section">
                <hr />
                <h4 class="fw-bold">Reviews</h4>

                <div class="mb-4">
                  <p class="mb-2">
                    <strong>Your Rating:</strong>
                  </p>
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
  )
}

export default StaffBookDetails
