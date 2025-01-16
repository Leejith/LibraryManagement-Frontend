import React from "react";
import "../../Assets/Styles/AdminHome.css";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import BookList from "./BookList";
import AddBook from "./AddBook";
import StaffList from "./StaffList";
import StudentList from "./StudentList";
import RequestList from "./RequestList";
import BorrowedList from "./BorrowedList";

function AdminHome() {
  
  return (
    <div>
      <div>
        <nav class="navbar navbar-expand-lg fixed-top ">
          <div class="container-fluid">
            <p class="  font-book">BOOKWORLD</p>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title">BOOKWORLD</h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body ">
                <div class="nav d-flex justify-content-center flex-grow-1 pe-2">
                  <li class="nav-item ">
                    <Link class="nav-link active fw-bold" to="borrowlist">
                      BORROWED LIST
                    </Link>
                  </li>

                  <div class="dropdown ">
                    <button
                      class="btn navbar-droplist  dropdown-toggle mx-lg-2 fw-bold"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      USER LIST
                    </button>
                    <ul class="dropdown-menu dropadmin">
                      <li>
                      <Link className="dropdown-item" to="stafflist">
                        STAFF
                      </Link>
                      </li>
                      <li>
                      <Link className="dropdown-item" to="studentlist">
                        STUDENT
                      </Link>
                      </li>
                    </ul>
                  </div>
                  <div class="dropdown">
                    <button
                      class="btn  navbar-droplist dropdown-toggle mx-lg-2 fw-bold"
                      type="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      BOOKS DETAILS
                    </button>
                    <ul class="dropdown-menu dropadmin ">
                      <li>
                      <Link className="dropdown-item" to="booklist">
                        BOOKS LIST
                      </Link>
                      </li>
                      <li>
                      <Link className="dropdown-item" to="addbook">
                        ADD BOOKS
                      </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <a href="#" class="btn login-button ">
                  LOGOUT
                </a>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <div class="container-fluid mt-4 admin-field">
        <div class="p-4"></div>
        <Routes>
            <Route path="booklist" element={<BookList />} />
            <Route path="addbook" element={<AddBook />} />
            <Route path="stafflist" element={<StaffList />} />
            <Route path="studentlist" element={<StudentList />} />
            <Route path="borrowlist" element={<BorrowedList />} />
            {/* Redirect the default /admin route */}
            <Route path="/" element={<Navigate to="borrowlist" />} />
          </Routes>
      </div>
    </div>
  );
}

export default AdminHome;
