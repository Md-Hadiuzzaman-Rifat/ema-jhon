import React from "react";
import { Link } from "react-router-dom";
import img from "../../images/logo.png";
import "./Header.css";


import useFirebase from "./../../hooks/useFirebase";

const Header = ({ handleSearch }) => {
  const { loading, user, login, logout } = useFirebase();

  const handleLogin = () => {
    login();
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <Link to="/"><img src={img} alt="" style={{ width: "200px" }} /></Link>
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/inventory">Inventory</Link>
            </li>
            <li>
              <Link to="/review">Order Review</Link>
            </li>
          </div>
          <div>
              {!loading && (
                <li style={{ color: "orange" }}>{user.displayName}</li>
              )}
            {user.displayName ? (
              <li className="link" onClick={handleLogout}>
                Log Out
              </li>
            ) : (
              <li className="link" onClick={handleLogin}>
                Google
              </li>
            )}
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
