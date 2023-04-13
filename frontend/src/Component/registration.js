import React, { useState } from "react";
import "./registration.css";

function RegistrationForm() {
  // React States for checking the error
  const [error, setError] = useState({});
  const [submitted, setSubmitted] = useState(false);

  //State for registration
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
    setSubmitted(false);
  };

  // Handling the email change
  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  // Handling the password change
  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '' || email === '' || password === '') {
      setError(true);
    } else {
      //send data to api
      fetch('http://localhost:3000/api/User', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password
        }),
      })
        .then(response => {
          const j = response.json();
          console.log(j);
          return j;
        })
        .then(d => {
          console.log(d);
          if (d.msg === 'Added') {
            setSubmitted(true);
            setError(false);
          } else {
            setSubmitted(true);
            setError(true);
          }
        })
        .catch(error => console.error(error));
    }
  };

  // JSX code for registration form
  return (
    <div className="registration">
      <div className="registration-form">
        <div className="title">Registration</div>
        <div className="form">
          {submitted ?
            error ? "error" : "Register Successfully" :
            <form>
              <div className="input-container">
                <label> Name </label>
                <input onChange={handleName} type="text" name="name" required />
              </div>
              <div className="input-container">
                <label>Email </label>
                <input onChange={handleEmail} type="email" name="eamil" required />
              </div>
              <div className="input-container">
                <label>Password </label>
                <input onChange={handlePassword} type="password" name="pass" required />
              </div>
              <div className="button-container">
                <input onClick={handleSubmit} type="submit" />
              </div>
            </form>
          }
        </div>
      </div>
    </div>
  );
}

export default RegistrationForm;