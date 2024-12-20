import React, { useState } from 'react'
import '../../Assets/Styles/Profile.css'
import BorrowBooks from './BorrowBooks';
import MyFavorites from './MyFavorites';
import FineAmount from './FineAmount';

function StudentProfile() {
  const [SlideisOpen, setSlideIsOpen] = useState(false);
  const [activeComponent, setActiveComponent] = useState("MyBook");

  const toggleSidebar = () => {
    setSlideIsOpen(!SlideisOpen);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "MyBook":
        return <BorrowBooks/>;
      case "Favorites":
        return <MyFavorites/>;
      //   case "Cart":
      //     return <Cart />;
      case "FineAmount":
        return <FineAmount/>;
      default:
        return <BorrowBooks/>;
    }
  };
    
return (
  <div>
  {/* navbar */}

  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container-fluid">
      <button
        className="btn  d-lg-none me-2"
        onClick={toggleSidebar}
      >
        <i class="ri-menu-line"></i>
      </button>

      <h1 class="navbar-brand  m-2 fw-bold">BOOKWORLD</h1>
      <div class="ms-auto">
        <ul class="nav d-none d-lg-flex">
          <li class="nav-item">
            <a
              class="nav-link"
              href="#myBook"
              onClick={() => setActiveComponent("MyBook")}
            >
              My Book
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#favorites"
              onClick={() => setActiveComponent("Favorites")}
            >
              Favorites
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#cart"
              onClick={() => setActiveComponent("cart")}
            >
              Cart
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#fineAmount"
              onClick={() => setActiveComponent("FineAmount")}
            >
              Fine Amount
            </a>
          </li>
        </ul>

        {/* Dropdown for small screens */}
        <ul class="nav  fw-bold   d-lg-none">
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="menuDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Menu
            </a>
            <ul
              class="dropdown-menu profile-menu  dropdown-menu-end drop-color text-dark"
              aria-labelledby="menuDropdown"
            >
              <li>
                <a
                  class="dropdown-item"
                  href="#myBook"
                  onClick={() => setActiveComponent("myBook")}
                >
                  My Book
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item "
                  href="#favorites"
                  onClick={() => setActiveComponent("favorites")}
                >
                  Favorites
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item "
                  href="#cart"
                  onClick={() => setActiveComponent("cart")}
                >
                  Cart
                </a>
              </li>
              <li>
                <a
                  class="dropdown-item"
                  href="#fineAmount"
                  onClick={() => setActiveComponent("fineAmount")}
                >
                  Fine Amount
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  {/* Slidebar */}
  <div
    class={`sidebar    ${
      SlideisOpen ? "sidebar-open" : "sidebar-closed"
    } `}
  >
    <button class="btn d-lg-none close-btn" onClick={toggleSidebar}>
      <i class="ri-close-large-line"></i>
    </button>
    <div class="p-2 mt-3">
      <div class="text-center mb-5   text-slidebar">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          class="rounded-circle img-fluid "
        />
        <button
          class="btn edit-btn fw-bold position-absolute mt-5 fs-4 "
          style={{
            width: "60px",
            height: "60px",
            
          }}
          // onClick={() => setShowModal(true)}
        >
         <i class="ri-edit-fill"></i>
        </button>
        <h5 class="mt-4">User Name</h5>
        <p>Department</p>
        <p>ID.NO</p>
      </div>
    </div>
  </div>

  {/* main content */}
  <div class="main-content mt-5">
    <div class="p-4">{renderActiveComponent()}</div>
  </div>
</div>
      );
    };
    

export default StudentProfile