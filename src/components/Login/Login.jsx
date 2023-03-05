import React, { useState } from "react";
import styles from "./Login.module.css";
import "./Login.module.css";
import validate from "./validation";
import logo from "../../images/login-RickAndMorty.png";

function Login({ login }) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [userDataError, setUserDataError] = useState({
    username: "",
    password: "",
  });

  function handleChange(event) {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setUserDataError(
      validate({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (Object.values(userDataError).length) {
      alert("Debe ingresar User Name y Password");
      return;
    }
    login(userData);
  }

  return (
    <div className={styles.formContainer}>
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <img src={logo} alt="" />
          <div className={styles.infocontainer}>
            <label style={{ marginBottom: "20px" }}>User Name</label>
            <input
              autoFocus
              className={
                userDataError.username ? styles.errorInput : styles.input
              }
              type="text"
              name="username"
              placeholder="Escribe tu email..."
              onChange={handleChange}
            />
            {userDataError.username ? (
              <p className={styles.errorText}>{userDataError.username}</p>
            ) : null}

            <label style={{ marginBottom: "20px" }}>Password</label>
            <input
              className={
                userDataError.password ? styles.errorInput : styles.input
              }
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Escribe tu password..."
            />
            {userDataError.password ? (
              <p className={styles.errorText}>{userDataError.password}</p>
            ) : null}
            
            <button className={styles.Button} type="submit">
              <strong>Login</strong>
            </button>
            <br />
            <p style={{ marginBottom: "1px" }}>User : nriascos@gmail.com</p>
            <p style={{ marginTop: "1px" }}>Password : ABcd12345</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
