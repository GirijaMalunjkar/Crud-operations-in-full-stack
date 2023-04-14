import React, { useState } from "react";
import "./login.css";

function LoginForm() {
  // React States for checking the error
  const [error, setError] = useState({});
  const [submitted, setSubmitted] = useState(false);

  //State for login
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  // Handling the name change
  const handleName = (e) => {
    setName(e.target.value);
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
    if (name === '' || password === '') {
      setError(true);
    } else {
      //send data to api
      fetch('http://localhost:8080/api/UserLogin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: name,
          password: password
        }),
      })
        .then(response => {
          const j = response.json();
          console.log(j);
          return j;
        })
        .then(d => {
          console.log('1111',d);
          if (d.loginSuccess) {
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

  // JSX code for login form
  return (
    <div id="loginPage" className="login">
      <div className="login-form">
        <div className="title">Log In</div>
        <div className="form">
          {submitted ?
            error ? "Invalid User Name or Password " : "Logged In Successfully" :
            <form>
              <div className="input-container">
                <label> User Name </label>
                <input onChange={handleName} type="text" name="name" required />
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

export default LoginForm;