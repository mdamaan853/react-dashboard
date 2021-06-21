import React from "react";
import { IoIosNotifications } from "react-icons/io";

const navbar={
  height:'70px',
  fontSize:'30px',
};
const navbarBrand={
  fontSize:'26px',
  marginLeft:'30px',
  marginTop:'20px',
}

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg shadow-sm" style={navbar}>
        <a class="navbar-brand" href="#" style={navbarBrand}>
          Dashboard
          <p style={{fontSize:'12px'}}>Monday, 02 July</p>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">
            <img src="https://img.icons8.com/material-two-tone/24/000000/menu--v3.png" />
          </span>
        </button>

        <div class="collapse navbar-collapse" id="navbarText">
       </div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">
                <IoIosNotifications />
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <img className="rounded" />
              </a>
            </li>
          </ul>
     
      </nav>
    </div>
  );
}

export default Header;
