import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const style = {
    marginTop: "20px",
    marginBottom: "20px",
    backgroundColor: "orange",
    padding: "10px 50px",
    color: "white",
    border: "none",
    borderRadius: "10px",
  };
  return (
    <div>
      <div className="flex">
        <form action="#" className="form">
          <h1 style={{ color: "orange" }}>Login Form:</h1>
          <input type="text" placeholder="Enter Name" />
          <br />
          <input type="text" placeholder="Enter Email" />
          <br />
          <Link to="#" style={{color:"red"}}>use Google instead</Link>
          <input type="submit" style={style} />
        </form>
      </div>
    </div>
  );
};

export default Login;
