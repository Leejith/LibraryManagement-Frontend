import React, { useState } from "react";
import "../../Assets/Styles/Addbook.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddBook() {
  const navigate=useNavigate()
  const [AddBook, setAddBook] = useState({
    booktitle: "",
    authorname: "",
    genre: "",
    description: "",
    date: "",
    file: null,
  });

  const handleChange = (e) => {
    setAddBook({ ...AddBook, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setAddBook({ ...AddBook, coverImage: e.target.files[0] });
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      console.log(reader);

      reader.onload = () => {
        setAddBook(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formdata = new FormData()
    for (let i in AddBook){
      formdata.append(i,AddBook[i])
    }
    axios.post("http://localhost:4060/savebook",formdata,{
      headers:{"content-type":"multipart/formdata"}
    })
    .then((response)=>{
      alert(response.data.msg)
      navigate("/BookList")
    })
    .catch((err)=>{
      console.log(err)
    })

  };
  const handleCoverImage=(e)=>{
    handleFileChange(e)
    handleChange(e)
  }
  const handleReset = () => {
    setAddBook({
      booktitle: "",
      authorname: "",
      genre: "",
      description: "",
      Date: "",
      file: null,
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
                          <img src={""} alt="upload cover image" />
                        </div>
                      </label>
                      <input
                        type="file"
                        class="form-control d-none"
                        accept="image/*"
                        id="coverimage"
                        onChange={handleCoverImage}
                        required
                      />
                      <div class="mb-3">
                        <label class="form-label fw-semibold">Book Title</label>
                        <input
                          type="text"
                          class="form-control"
                          name="booktitle"
                    
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
                          name="authorname"
                        
                          onChange={handleChange}
                          placeholder="Enter author's name"
                          required
                        />
                      </div>
                    </div>

                    {/* Right Side: Form Fields */}
                    <div class="col-md-8">
                      <div class="mb-3">
                        <label class="form-label fw-semibold">
                          Book Description
                        </label>
                        <textarea
                          class="form-control"
                          name="description"
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
                          name="date"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div class="mb-3">
                        <label class="form-label fw-semibold">Genre</label>
                        <select
                          class="form-select"
                          name="genre"
                        
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
                      <div class="d-flex justify-content-between mt-4">
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
