import React, { useState } from "react";
import "../../Assets/Styles/Addbook.css";

function AddBook() {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    isbn: "",
    genre: "",
    publishedDate: "",
    quantity: 0,
    coverImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, coverImage: e.target.files[0] });
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      console.log(reader);

      reader.onload = () => {
        setFormData(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book Details Submitted:", formData);
    // Add API call here to save book data
  };

  const handleReset = () => {
    setFormData({
      title: "",
      author: "",
      isbn: "",
      genre: "",
      publishedDate: "",
      quantity: 0,
      coverImage: null,
    });
  };

  return (
    <section class="container-fluid addbook">
      <div class="container my-5 ">
        <div class="row justify-content-center">
          <div class="col-lg-10">
            <div class="card add-card">
              <div class="card-header text-center add-card">
                <h3 class="fw-bold mb-0">Add New Book</h3>
              </div>
              <div class="card-body p-4">
                <form onSubmit={handleSubmit}>
                  <div class="row">
                    {/* Left Side: Image Input */}
                    <div class="col-md-4 ">
                      <label for="coverimage">
                        <div class="mb-4 book-cover  ">
                          <img src={formData} alt="upload cover image" />
                        </div>
                      </label>
                      <input
                        type="file"
                        class="form-control d-none"
                        accept="image/*"
                        id="coverimage"
                        onChange={handleFileChange}
                        required
                      />
                      <div class="mb-3">
                        <label class="form-label fw-semibold">Book Title</label>
                        <input
                          type="text"
                          class="form-control"
                          name="title"
                          value={formData.title}
                          onChange={handleChange}
                          placeholder="Enter book title"
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label fw-semibold">
                          Author Name
                        </label>
                        <input
                          type="text"
                          class="form-control"
                          name="author"
                          value={formData.author}
                          onChange={handleChange}
                          placeholder="Enter author's name"
                          required
                        />
                      </div>
                    </div>

                    {/* Right Side: Form Fields */}
                    <div class="col-md-8">
                      <div class="mb-3">
                        <label class="form-label fw-semibold">Price</label>
                        <input
                          type="number"
                          class="form-control"
                          name="price"
                          value={formData.price}
                          onChange={handleChange}
                          placeholder="Enter book price"
                          min="0"
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label fw-semibold">
                          Book Description
                        </label>
                        <textarea
                          class="form-control"
                          name="description"
                          value={formData.description}
                          onChange={handleChange}
                          placeholder="Enter book description"
                          rows="4"
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label fw-semibold">
                          Published Date
                        </label>
                        <input
                          type="date"
                          class="form-control"
                          name="publishedDate"
                          value={formData.publishedDate}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label fw-semibold">Genre</label>
                        <select
                          class="form-select"
                          name="genre"
                          value={formData.genre}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Choose Genre</option>
                          <option value="Fiction">Fiction</option>
                          <option value="Non-Fiction">Non-Fiction</option>
                          <option value="Science">Science</option>
                          <option value="History">History</option>
                        </select>
                      </div>
                      <div class="d-flex justify-content-between">
                        <button
                          type="reset"
                          class="btn btn-outline-dark rounded-pill px-4"
                          onClick={handleReset}
                        >
                          Reset
                        </button>
                        <button
                          type="submit"
                          class="btn btn-primary rounded-pill px-4 add-button"
                        >
                          Add Book
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AddBook;
