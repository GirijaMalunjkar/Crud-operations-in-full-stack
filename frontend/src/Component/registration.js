import React, { useState } from "react";
import "./registration.css";

function RegistrationForm() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      fname: "fname",
      lname: "lname",
      email: "email",
      password: "pass",
      confirm: "cpass"
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

    // Find user registration info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const registrationErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for registration form
  const registrationForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>First Name </label>
          <input type="text" name="fame" required />
          {registrationErrorMessage("fname")}
        </div>
        <div className="input-container">
          <label>Last Name </label>
          <input type="text" name="lname" required />
          {registrationErrorMessage("lname")}
        </div>
        <div className="input-container">
          <label>Email </label>
          <input type="email" name="eamil" required />
          {registrationErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {registrationErrorMessage("pass")}
        </div>
        <div className="input-container">
          <label>Conform Password </label>
          <input type="password" name="cpass" required />
          {registrationErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="registration">
      <div className="registration-form">
        <div className="title">Registration</div>
        {isSubmitted ? <div> Account Is Created...</div> : registrationForm}
      </div>
    </div>
  );
}

export default RegistrationForm;