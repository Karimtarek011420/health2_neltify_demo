import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { selectUser } from "../../features/UserSlice";
import './Navbar_animated.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar_animated = (props) => {
  const user = useSelector(selectUser);
  const isLoggedIn = user?.loggedin;
  const name = user?.fname;

  const [isEventspage, setIsEventspage] = useState(props.page); // Initialize directly with props.page
  const [navbar, setNavbar] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const changebg = () => {
      if (window.scrollY >= 600) {
          setNavbar(true);
      } else {
          setNavbar(false);
      }
  };

  // Setup scroll event listener
  useEffect(() => {
      window.addEventListener('scroll', changebg);
      return () => {
          window.removeEventListener('scroll', changebg); // Cleanup event listener on unmount
      };
  }, []);

  const toggleNavbar = () => {
      setIsCollapsed(!isCollapsed);
  };

  return (
    <>
      {/* <nav1>
        <nav class="navbar navbar-dark  navindex ">
          <div class="container-fluid">
            <div className="logo_home_nav">
              <Link to="/">
                <img
                  src={logo}
                  alt="logo"
                  className="img-navbar ms-2 w-100 h-100"
                />
              </Link>
            </div>
            <div className="ms-auto ">
              <ul className="madie list-unstyled d-flex mx-2 justify-content-center align-items-center">
                <button
                  class="navbar-toggler "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarToggleExternalContent"
                  aria-controls="navbarToggleExternalContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                {isLoggedIn ? (
                  <>
                    <li className="mx-2">
                      <i
                        style={{ cursor: "pointer" }}
                        className=" fa-regular fa-user text-white "
                      ></i>
                      <span
                        className="text-white px-1"
                        style={{ cursor: "pointer" }}
                      >
                        karim
                      </span>
                    </li>
                    <li>
                      <li class="dropdown">
                        <Link to="#" class="dropdown-toggle text-white"></Link>
                        <ul class="dropdown-menu">
                          <li>
                            <Link
                              style={{ fontSize: "16px", color: "#012572" }}
                              to="/myaccount"
                            >
                              My account
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{ fontSize: "16px", color: "#012572" }}
                              to="/cal"
                            >
                              My Calendar
                            </Link>
                          </li>
                          <li>
                            <Link
                              style={{ fontSize: "16px", color: "#012572" }}
                              to="/login"
                            >
                              Logout
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </li>
                  </>
                ) : (
                  <></>
                )}
              </ul>
            </div>
          </div>
        </nav>
        <div
          class="collapse position-absolute w-100"
          id="navbarToggleExternalContent"
          data-bs-theme="dark"
        >
          <div class="  bg-white menulist ">
            <h6  className=" px-2 bg-dark text- link-light py-3">Menu </h6>
            <ul className="list-unstyled menulist">
              <li>
                <Link
                  to="/"
                  className="coll_list-item w-100"
                  aria-current="page"
                >
                  &nbsp;&nbsp; Home&nbsp;
                </Link>
              </li>{" "}
              <li>
                    <Link
                      to="/about-us"
                      className="coll_list-item w-100"
                      aria-current="page"
                    >
                      &nbsp;&nbsp; About&nbsp;
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="coll_list-item w-100"
                      aria-current="page"
                    >
                      &nbsp;&nbsp; Board Members&nbsp;
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/agenda"
                      className="coll_list-item w-100"
                      aria-current="page"
                    >
                      &nbsp;&nbsp; Event's Calender&nbsp;
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/membership"
                      className="coll_list-item w-100"
                      aria-current="page"
                    >
                      &nbsp;&nbsp; Become a Member&nbsp;
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contactus"
                      className="coll_list-item w-100"
                      aria-current="page"
                    >
                      &nbsp;&nbsp; Contact us&nbsp;
                    </Link>
                  </li>
            
            </ul>
          </div>
        </div>
      </nav1> */}
      <nav className={!isEventspage ? "navbar " : "navbar navcolor"}>
      <div className="container-fluid">
        <div className="logo_home_nav">
          <Link to="/">
            <img
              src={logo}
              alt="logo"
              className="img-navbar ms-2 w-100 h-100"
            />
          </Link>
        </div>

        <ul className=" madie list-unstyled d-flex mx-2 justify-content-center align-items-center">
          <li>
            <button
              className="navbar-toggler mx-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasDarkNavbar"
              aria-controls="offcanvasDarkNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end menulist"
              tabindex="-1"
              id="offcanvasDarkNavbar"
              aria-labelledby="offcanvasDarkNavbarLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                  Menu
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li>
                    <Link
                      to="/"
                      className="coll_list-item w-100"
                      aria-current="page"
                    >
                      &nbsp;&nbsp; Home&nbsp;
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about-us"
                      className="coll_list-item w-100"
                      aria-current="page"
                    >
                      &nbsp;&nbsp; About&nbsp;
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      className="coll_list-item w-100"
                      aria-current="page"
                    >
                      &nbsp;&nbsp; Board Members&nbsp;
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/agenda"
                      className="coll_list-item w-100"
                      aria-current="page"
                    >
                      &nbsp;&nbsp; Event's Calender&nbsp;
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/membership"
                      className="coll_list-item w-100"
                      aria-current="page"
                    >
                      &nbsp;&nbsp; Become a Member&nbsp;
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/vclub"
                      className="coll_list-item w-100"
                      aria-current="page"
                    >
                      &nbsp;&nbsp; Volunteer Club&nbsp;
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contactus"
                      className="coll_list-item w-100"
                      aria-current="page"
                    >
                      &nbsp;&nbsp; Contact us&nbsp;
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          {isLoggedIn ? (
            <>
              <li className="mx-2">
              <FontAwesomeIcon 
                icon={faUser} 
                style={{ cursor: "pointer" }} 
                className="text-white"
              />                
              <span className="text-white px-1" style={{ cursor: "pointer" }}>
                  {name}
              </span>
              </li>
              <li>
                <li class="dropdown">
                  <Link to="#" class="dropdown-toggle text-white"></Link>
                  <ul class="dropdown-menu">
                    <li>
                      <Link style={{ fontSize: "16px", color:'#012572'  }} to="/myaccount">
                      &nbsp;&nbsp;  My account&nbsp;  
                      </Link>
                    </li>
                    <li>
                      <Link style={{ fontSize: "16px", color:'#012572' }} to="/cal">
                      &nbsp;&nbsp;My Calendar&nbsp;  
                     
                      </Link>
                    </li>
                    <li>
                      <Link style={{ fontSize: "16px", color:'#012572'  }} to="/login">
                      &nbsp;&nbsp; Logout&nbsp;  
                      
                      </Link>
                    </li>
                  </ul>
                </li>
              </li>
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </nav>
    </>
  );
}

export default Navbar_animated;
