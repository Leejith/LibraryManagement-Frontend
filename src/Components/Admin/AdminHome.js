import React, { useState } from "react";
import "../../Assets/Styles/AdminHome.css";
import BookList from "./BookList";
import AddBook from "./AddBook";
import StaffList from "./StaffList";
import StudentList from "./StudentList";
import RequestList from "./RequestList";

function AdminHome() {
  const [AdminField, SetAdminField] = useState();

  const renderAdminField = () => {
    switch (AdminField) {
      case "BookList":
        return <BookList />;
      case "AddBook":
        return <AddBook />;
      case "StaffList":
        return <StaffList />;
      case "StudentList":
        return <StudentList />;
      case "RequestList":
        return <RequestList />;
      default:
        return <RequestList/>;
    }
  };
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
                    <a class="nav-link active fw-bold" aria-current="page" onClick={() => SetAdminField("RequestList")}>
                      REQUEST LIST
                    </a>
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
                        <a
                          class="dropdown-item"
                          onClick={() => SetAdminField("StaffList")}
                        >
                          STAFF
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          onClick={() => SetAdminField("StudentList")}
                        >
                          STUDENT
                        </a>
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
                        <a
                          class="dropdown-item"
                          onClick={() => SetAdminField("BookList")}
                        >
                          BOOKS
                        </a>
                      </li>
                      <li>
                        <a
                          class="dropdown-item"
                          onClick={() => SetAdminField("AddBook")}
                        >
                          ADD BOOKS
                        </a>
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
        <div class="p-4">{renderAdminField()}</div>
      </div>
    </div>
  );
}

export default AdminHome;
