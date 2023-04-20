import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import logo from "../../../imgs/header-logo.png";
import searchIcon from "../../../imgs/icons/searchIcon.png";
import cartImg from "../../../imgs/icons/shopping-cart.png";
import { BsChevronDoubleDown } from "react-icons/bs";
import { BsChevronDoubleUp } from "react-icons/bs";
import { auth } from "../../../firebase";
import { useAuth } from "../../../context/GlobalState";
import { signOut } from "firebase/auth";
const Header = () => {
  const { user, cart } = useAuth();
  const signout = () => {
    auth.signOut();
  };
  const [isClicked, setIsClicked] = useState(true);
  const toggleHandler = () => {
    setIsClicked(!isClicked);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-black fixed-top ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img
              className="header-logo mt-2"
              src={logo}
              alt="logo-img"
              style={{ width: "90px" }}
            />
          </Link>
          <button
            onClick={toggleHandler}
            className={styles["navbar-toggler"]}
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={styles["navbar-toggler-icon"]}>
              {isClicked ? <BsChevronDoubleDown /> : <BsChevronDoubleUp />}
            </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className={styles["header-search"]}>
              <input
                type="text"
                placeholder="search"
                className={styles.searchInput}
              />
              <img
                className="py-2 px-1"
                src={searchIcon}
                alt="search-icon"
                style={{ width: "27px", backgroundColor: "#F79B34" }}
              />
            </div>
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className={styles["nav-item-small"]}>
                <Link
                  to={!user && "login"}
                  className={styles.link}
                  onClick={signout}
                >
                  <div className="text-white-50">
                    {" "}
                    Hello {user ? `${user.email}` : "Guest"}
                  </div>
                  <div className="text-white h6">
                    {user ? "Sign Out" : "Sign In"}
                  </div>
                </Link>
              </li>
              <li className={styles["nav-item-small"]}>
                <Link to="orders" className={styles.link}>
                  <div className="text-white-50 mx-lg-3">Returns</div>
                  <div className="text-white h6 mx-lg-3">& Orders</div>
                </Link>
              </li>
              <li className={styles["nav-item-small"]}>
                <div className="text-white-50">Your</div>
                <div className="text-white h6">Prime</div>
              </li>
              <li className={styles["nav-item-small"]}>
                <Link to="checkout" className={styles.link}>
                
                  <img
                    src={cartImg}
                    alt="#"
                    width={30}
                    className="mt-lg-2 ms-lg-3"
                  />
                  <strong
                    className="text-white text-center m-auto px-2 py-1 "
                    style={{ backgroundColor: "red", width:"30px", height:"30px", borderRadius:"30%"}}
                  >
                    {cart?.length}
                   
                  </strong>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
