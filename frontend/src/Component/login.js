import React, { useState } from "react";
import "./login.css";

function LoginForm() {
  // React States
  const [errorMsg, setErrorMsg] = useState({});
  const [isSubmite, setIsSubmite] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMsg({ name: "pass", message: errors.pass });
      } else {
        setIsSubmite(true);
      }
    } else {
      // Username not found
      setErrorMsg({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMsg = (name) =>
    name === errorMsg.name && (
      <div className="error">{errorMsg.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMsg("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMsg("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="login">
      <div className="login-form">
        <div className="title">Log In</div>
        {isSubmite ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default LoginForm;