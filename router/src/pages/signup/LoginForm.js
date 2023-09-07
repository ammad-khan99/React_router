import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const user = { username: "", email: "", password: "" };
  const [credentials, setCredentials] = useState(user);
  const navigate = useNavigate();

  const handleOnchange = (event) => {
    console.log(credentials);
    console.log(event.target);
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
    console.log(credentials);
  };

  const validateName = () => {
      if (credentials.username.length >= 5 && credentials.username.length <= 10) {
          return true;
    } else {
      return false;
    }
  };

  const validateEmail = () => {
    if (credentials.email.includes("@")) {
      return true;
    } else {
      return false;
    }
  };

  const validatePassword = () => {
    if (credentials.password.length >= 8) {
      return true;
    } else {
        return false;
    }
};

const handleSubmit = (event) => {
  if (validateName() && validateEmail() && validatePassword()) {
    navigate('/welcome')
  } else {
    alert("Please Enter valid credentials");
  }
  event.preventDefault();
};

return (
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Username</label>
        <input
          type="text"
          id="name"
          name="username"
          value={credentials.username}
          onChange={handleOnchange}
        ></input>
        <p>
          {validateName()
            ? ''
            : 'Name should contain min 5 and max 10 characters'}
        </p>
        <br />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={credentials.email}
          onChange={handleOnchange}
        ></input>
        <p>{validateEmail() ? `` : `Enter a valid email`}</p>
        <br />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={credentials.password}
          onChange={handleOnchange}
        ></input>
        <p>
          {validatePassword()
            ? ``
            : `Password should contain atleast 8 characters`}
        </p>
        <br />

        <input type="submit"></input>
      </form>
    </div>
  );
}

export default LoginForm;