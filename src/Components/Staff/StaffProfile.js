import React, { useEffect, useState } from "react";
import "../../Assets/Styles/Profile.css";
import Mybook from "./Mybook";
import Favorites from "./Favorites";
import profileimg from "../../Assets/Images/profile.png";
import StaffCart from "./StaffCart";
import axios from "axios";
import imgurl from '../../Api/Imgurl'
function StaffProfile() {
 const [SlideisOpen, setSlideIsOpen] = useState(false);
   const [activeComponent, setActiveComponent] = useState("MyBook");
   const [profile, setProfile] = useState({});
   const [EditPage, setEditPage] = useState(false);
   const [editData, setEditData] = useState(profile);
   const [UserProfile,setUserProfile]=useState({})

  const toggleSidebar = () => {
    setSlideIsOpen(!SlideisOpen);
  };

  const renderActiveComponent = () => {
    switch (activeComponent) {
      case "MyBook":
        return <Mybook />;
      case "Favorites":
        return <Favorites />;
      case "StaffCart":
        return <StaffCart />;
      default:
        return <Mybook />;
    }
  };
  useEffect(() => {
    const id = localStorage.getItem("staffid")
    console.log(id)
    axios.get(`http://localhost:4060/staffprofile/${id}`)
      .then((response) => {
        console.log(response, "ïi")
        setUserProfile(response.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  const profileChange = (upload) => {
    const file = upload.target.files[0];
    if (file) {
      const reader = new FileReader();
      console.log(reader);

      reader.onload = () => {
        setProfile(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };


  const handleEditClick = () => {
    setEditData(profile);
    setEditPage(true);
  };
  const handleClose = () => {
    setEditPage(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleSave = () => {
    setProfile(editData);
    setEditPage(false);
  };
  return (
    <div>
      {/* navbar */}

      <nav class="navbar navbar-expand-lg fixed-top">
        <div class="container-fluid">
          <button
            className="btn menu-btn d-lg-none me-2"
            onClick={toggleSidebar}
          >
            <i class="ri-menu-line"></i>
          </button>

          <h1 class="navbar-brand  m-2 fw-bold">BOOKWORLD</h1>
          <div class="ms-auto">
            <ul class="nav profile-nav text-dark d-none d-lg-flex">
              <li class="nav-item ">
                <a
                  class="nav-link "
                  href="#myBook"
                  onClick={() => setActiveComponent("MyBook")}
                >
                  My Book
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#favorites"
                  onClick={() => setActiveComponent("Favorites")}
                >
                  Favorites
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link "
                  href="#cart"
                  onClick={() => setActiveComponent("StaffCart")}
                >
                  Cart
                </a>
              </li>
            </ul>

            {/* Dropdown for small screens */}
            <ul class="nav fw-bold d-lg-none">
              <li class="nav-item  dropdown">
                <a
                  class="nav-link dropdown-toggle "
                  href="#"
                  id="menuDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Menu
                </a>
                <ul
                  class="dropdown-menu profile-menu  dropdown-menu-end "
                  aria-labelledby="menuDropdown"
                >
                  <li>
                    <a
                      class="dropdown-item"
                      href="#myBook"
                      onClick={() => setActiveComponent("MyBook")}
                    >
                      My Book
                    </a>
                  </li>
                  <li>
                    <a
                      class="dropdown-item "
                      href="#favorites"
                      onClick={() => setActiveComponent("Favorites")}
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
        class={`sidebar ${SlideisOpen ? "sidebar-open" : "sidebar-closed"} `}
      >
        <button class="btn d-lg-none close-btn" onClick={toggleSidebar}>
          <i class="ri-close-large-line"></i>
        </button>
        <div class="p-2 mt-3">
        <div class="text-center mb-5   text-slidebar">
            <img
              src={`${imgurl}${UserProfile?.image?.originalname}`}
              alt="Profile"
              class="rounded-circle profile-img img-fluid "
            />
            <button
              class="btn edit-btn fw-bold position-absolute mt-5 fs-4 "
              style={{
                width: "60px",
                height: "60px",
              }}
              onClick={handleEditClick}
            >
              <i class="ri-edit-fill"></i>
            </button>
            <h5 class="mt-4">{UserProfile.name}</h5>
            <p>{UserProfile.regno}</p>
            <p>{UserProfile.department}</p>
            <p>{UserProfile.email}</p>
            
          </div>
        </div>
      </div>

      {/* main content */}
      <div class="main-content mt-5">
        <div class="p-4">{renderActiveComponent()}</div>
      </div>

      {/* editprofile */}
      {EditPage && (
        <div class="modal show d-block " tabIndex="-1">
          <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content form-edit">
              <div class="modal-header edit-header">
                <h5 class="modal-title fw-bold ">Edit Profile</h5>
                <button
                  type="button"
                  class="btn-close close-edit"
                  onClick={handleClose}
                ></button>
              </div>
              <div class="modal-body">
                <form>
                  <div class="mb-2 text-center">
                    <label for="upload-pic">
                      <img
                        src={profile || profileimg}
                        class="rounded-circle border-dark profile-pic"
                      />
                    </label>
                    <input
                      type="file"
                      id="upload-pic"
                      accept="image/*"
                      class="form-control"
                      onChange={profileChange}
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Name</label>
                    <input
                      type="text"
                      class="form-control"
                      name="name"
                      value={profile.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div class="mb-3">
                    <label class="form-label">Department</label>
                    <input
                      type="text"
                      class="form-control"
                      name="department"
                      value={profile.department}
                      onChange={handleChange}
                    />
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button class="btn btn-dark" onClick={handleSave}>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default StaffProfile;
