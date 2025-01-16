import axios from 'axios';
import React, { useEffect, useState } from 'react'
import "../../Assets/Styles/BookDetails.css"
import { useParams } from 'react-router-dom';
import imgurl from '../../Api/Imgurl';

function StaffBookDetails() {

  const [Details, setDetails] = useState({});
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [Reviews, setReviews] = useState([]);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [isBorrowed, setIsBorrowed] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const [similarBooks, setSimilarBooks] = useState([]);
  const [latestBooks, setLatestBooks] = useState([]);
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

  const calculateAverageRating = (reviews) => {
    const totalRatings = reviews.reduce((sum, review) => sum + review.rating, 0);
    return (totalRatings / reviews.length).toFixed(1);
  };
  const averageRating = calculateAverageRating(Reviews);
  const handleorder = (e) => {
    const teacherid = localStorage.getItem("staffid")
    const bookid = id
    axios.post("http://localhost:4060/order", {
      teacherid: teacherid,
      bookid: bookid
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
  useEffect(() => {
    console.log("Book ID in frontend:", id);
    axios
      .get(`http://localhost:4060/reviewlist/${id}`)
      .then((response) => {
        console.log("Reviews fetched:", response.data.data);
        setReviews(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews:", error.response ? error.response.data : error.message);
      });
  }, [id]);

  const handleFavoriteToggle = () => {
    const Studentid = localStorage.getItem("studentid");
    const bookid = id;

    setIsFavorite((prevState) => !prevState);


    axios
      .post(`http://localhost:4060/addlike/${Studentid}/${bookid}`)
      .then((response) => {
        // If the like is added successfully
        console.log("Like status updated successfully:", response.data);
      })
      .catch((error) => {
        // If an error occurs (like already exists)
        console.error("Error adding/removing like:", error);

        // If the book has already been liked, revert the UI state
        if (error.response && error.response.data.msg === "You have already liked this book.") {
          alert("You have already liked this book.");
        } else {
          setIsFavorite((prevState) => !prevState); // Revert UI on any other error
        }
      });
  };
  useEffect(() => {
    if (Details?.genre) {
      axios
        .get(`http://localhost:4060/similarbook/${Details.genre}`)
        .then((response) => {
          setSimilarBooks(response.data.data);
        })
        .catch((error) => {
          console.error("Error fetching similar books:", error);
        });
    }
  }, [Details?.genre]);

  useEffect(() => {
    axios
      .get('http://localhost:4060/latestbook')
      .then((response) => {
        setLatestBooks(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching latest books:", error);
      });
  }, []);
  return (
    <div class="view">
    <section class="view mt-5">
      <div class="container my-5">
        <div class=" cardbook shadow-lg">
          <div class="row g-0">
            <div class="col-md-3 text-center p-4">
              <img
                src={`${imgurl}${Details?.image?.originalname}`}
                alt="Book Cover"
                className="img-fluid rounded details-img shadow-sm"
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
              <div class="d-flex justify-content-between align-items-center mb-3">
                <h2 class="fw-bold mb-0 title">{Details?.booktitle} <span class=" rating-size"> {averageRating} ★</span></h2>
                
                <div> <i
                  class={`ri-heart-${isFavorite ? "fill" : "line"} fs-3 bg-dark-round`}
                  style={{
                    color: isFavorite ? "red" : "black",
                    cursor: "pointer",
                  }}
                  onClick={handleFavoriteToggle}
                ></i></div>
              </div>
              <p class="fw-semibold">
                <strong>AUTHOR:</strong> {Details.authorname}
              </p>
              <p class="fw-semibold">
                <strong>CATEGORY:</strong> {Details.genre}
              </p>
              <p class="fw-semibold">
                <strong>DESCRIPTION:</strong> {Details.description}
              </p>
              <p class="fw-semibold"><strong>STATUS:</strong> {isBorrowed ? "Unavailable" : "Available"}</p>

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
                    class="btn btn-link p-0 text-decoration-none show-more"
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
          <div class="modal-dialog mt-5">
            <div class="modal-content book-confirm">
              <div class="modal-header confirm-header">
                <h5 class="modal-title" id="borrowConfirmationModalLabel">Confirm Borrowing</h5>
                <button type="button" class="btn-close" onClick={handleCancel} aria-label="Close"></button>
              </div>
              <div class="modal-body text-center">
                <p class="fw-semibold">You are about to borrow the book:</p>
                <h4 class="fw-bold">{Details.booktitle}</h4>
                <img
                  src={`${imgurl}${Details?.image?.originalname}`}
                  alt="Book Cover"
                  class="img-fluid rounded confirmbuy-img shadow-sm mt-3 mb-4"
                
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

    {similarBooks.length > 0 && (
        <div class="container ">
          <h3 class="fw-bold text-center">Books You Might Like</h3>
          <div class="row mt-3">
            {similarBooks.map((book, index) => (
              <div class="col-md-3 mb-4" key={index}>
                <div class="card similarbook-card">
                  <img
                    src={`${imgurl}${book.image?.originalname}`}
                    alt={book.booktitle}
                    class=" img-fluid"
                  />
                  <div class="card-body text-center">
                    <h5 class="card-title">{book.booktitle}</h5>
                    <p class="card-text">{book.authorname}</p>
                    <a href={`/Staffbookdetails/${book._id}`} class="btn view-button fw-bold">View Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Latest Books Section */}
      {latestBooks.length > 0 && (
        <div class="container mt-3">
          <h3 class="fw-bold text-center">Latest Books</h3>
          <div class="row mt-3">
            {latestBooks.map((book, index) => (
              <div class="col-md-3 mb-4" key={index}>
                <div class="card similarbook-card">
                  <img
                    src={`${imgurl}${book.image?.originalname}`}
                    alt={book.booktitle}
                    class="card-img-top"
                  />
                  <div class="card-body text-center">
                    <h5 class="card-title">{book.booktitle}</h5>
                    <p class="card-text">{book.authorname}</p>
                    <a href={`/Staffbookdetails/${book._id}`} class="btn view-button ">View Details</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      </div>
  )
}

export default StaffBookDetails
