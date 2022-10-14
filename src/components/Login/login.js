import React, { useState } from "react";
import PropTypes from "prop-types";
import "./login.css";

async function loginUser(credentials) {
  return fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    setToken(token);
  };

  return (
    <div className="form_container">
      <form className="form-wrapper" onSubmit={handleSubmit}>
        <h3 className="form_head">login</h3>
        <p>Login with random Username and Password</p>
        <div className="usr_name">
          {/* <label htmlFor="username">Username</label> */}
          <input
            className="pad"
            type="text"
            id="username"
            placeholder="Username"
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="usr_pass">
          {/* <label htmlFor="password">Password</label> */}
          <input
            className="pad"
            type="password"
            id="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="form_btn">
          Continue
        </button>
      </form>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
