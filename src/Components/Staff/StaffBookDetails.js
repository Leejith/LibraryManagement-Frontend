import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../../Assets/Styles/BookDetails.css"
import { useParams } from 'react-router-dom';
import imgurl from '../../Api/Imgurl';

function StaffBookDetails() {

  const [Details, setDetails] = useState({});
   const [showAllReviews, setShowAllReviews] = useState(false);
   const [reviewText, setReviewText] = useState("");
   const [rating, setRating] = useState(0);  // State for rating
   const [Reviews, setReviews] = useState([]);
   const [showConfirmationModal, setShowConfirmationModal] = useState(false);
   const [isBorrowed, setIsBorrowed] = useState(false);
   const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4060/viewbook/${id}`)
      .then((response) => {
        console.log(response);
        setDetails(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);


  const handleorder=(e)=>{
    const teacherid = localStorage.getItem("staffid")
    const bookid = id
    axios.post("http://localhost:4060/order",{
      teacherid : teacherid,
      bookid : bookid
    })
    .then((response) => {
      console.log(response);
      setIsBorrowed(true);
      handleCancel()
    })
    .catch((err) => {
      console.log(err);
    });
  }

  const handleconfirmborrow = () => {
    setShowConfirmationModal(true);

  };

  const handleCancel = () => {
    setShowConfirmationModal(false);
  };

  const reviewsToDisplay = showAllReviews ? Reviews : Reviews.slice(0, 3);

  const handleSubmitReview = async () => {
    const staffid = localStorage.getItem("staffid");
    const role = "staff";
    const postid = id;

    if (!reviewText.trim()) {
      alert("Please write a review before submitting.");
      return;
    }

    if (rating === 0) {
      alert("Please provide a rating.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:4060/savereview", {
        role: role,
        staffid: staffid,
        postid: postid,
        content: reviewText,
        rating: rating,
      });

      alert("Review submitted successfully!");
      setReviewText("");
      setRating(0);
      console.log(response.data);
    } catch (error) {
      console.error("Error submitting review:", error);
      alert("Failed to submit the review. Please try again.");
    }
  };
  
  const handleReviewTextChange = (e) => {
    setReviewText(e.target.value);
  };
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  return (
    <section class="view mt-5">
      <div class="container my-5">
        <div class=" cardbook shadow-lg">
          <div class="row g-0">
            <div class="col-md-3 text-center p-4">
              <img
                src={`${imgurl}${Details?.image?.originalname}`}
                alt="Book Cover"
                className="img-fluid rounded shadow-sm"
              />
              <div class="mt-5">
              {!isBorrowed ? (
                  <button class="btn borrow fw-bold w-100 mb-4" onClick={handleconfirmborrow}>
                    Borrow Book
                  </button>
                ) : (
                  <button class="btn borrow fw-bold w-100 mb-4" disabled>
                    Unavailable
                  </button>
                )}
                <button class="btn  borrow fw-bold w-100">Add to Cart</button>
              </div>
            </div>
            ;
            <div class="col-md-8 p-4">
              <h2 class="fw-bold d-flex align-items-center">
                {Details.booktitle}
              </h2>
              <p>
                <strong>Author:</strong> {Details.authorname}
              </p>
              <p>
                <strong>Category:</strong> {Details.genre}
              </p>
              <p>
                <strong>Description:</strong> {Details.description}
              </p>
              <p><strong>Status:</strong> {isBorrowed ? "Unavailable" : "Available"}</p>

              <div class="review-section">
                <hr />
                <h4 class="fw-bold">Reviews</h4>

                <div class="mb-4">
                  <p class="mb-2">
                    <strong>Your Rating:</strong>
                  </p>
                  <div class="star-rating mb-3">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        class={`star ${rating >= star ? "filled" : ""}`}
                        onClick={() => handleRatingChange(star)}
                      >
                        ★
                      </span>
                    ))}
                  </div>
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
                      <strong>
                        {review.role === "student"
                          ? review.studentid?.name
                          : review.staffid?.name}
                        :
                      </strong>
                      <p class="mb-1">{review.content}</p>
                      <p class="text-muted">Rating: {review.rating} ★</p>
                    </li>
                  ))}
                </ul>

                {Reviews.length > 3 && (
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
        <div class={`modal fade ${showConfirmationModal ? 'show' : ''}`} id="borrowConfirmationModal" style={{ display: showConfirmationModal ? 'block' : 'none' }} aria-labelledby="borrowConfirmationModalLabel" aria-hidden={!showConfirmationModal}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="borrowConfirmationModalLabel">Confirm Borrowing</h5>
              <button type="button" class="btn-close" onClick={handleCancel} aria-label="Close"></button>
            </div>
            <div className="modal-body text-center">
              <p>You are about to borrow the book:</p>
              <h4>{Details.booktitle}</h4>
              <img
                src={`${imgurl}${Details?.image?.originalname}`}
                alt="Book Cover"
                class="img-fluid rounded shadow-sm"
                width="100"
              />
              <div class="mt-3">
                <button class="btn btn-success" onClick={handleorder}>Confirm</button>
                <button class="btn btn-danger ms-3" onClick={handleCancel}>Cancel</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default StaffBookDetails
