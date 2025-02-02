import React, { useEffect, useState } from "react";
import formSideImg from "../../assets/sideImg/Side-Image.png";
import Button from "../../components/Button";
import iconLogo from "../../assets/logo/logoedit.png";
import { useAuth } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import styles from "./login.module.scss";

function Login() {
  const [emailOrNumber, setEmailOrNumber] = useState("");
  const [password, setPassWord] = useState("");
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (isAuthenticated) navigate(-1);
    },
    [isAuthenticated, navigate]
  );

  // console.log(emailOrNumber, password);

  const handleLogin = (e) => {
    e.preventDefault();

    if (emailOrNumber === "" || password === "") {
      alert("enter email and password to log in");
      return;
    }

    if (emailOrNumber && password) login(emailOrNumber, password);

    // if(input, )
  };

  return (
    <div className={styles.LoginContainer}>
      <div className={styles.formCol1}>
        <img src={formSideImg} alt="photo" />
      </div>

      <div className={styles.formCol2}>
        <div className={styles.welcome}>
          <img src={iconLogo} alt="logo photo" />
          <h3>Welcome to Shopify</h3>
          <p>Type your email or number to log in or create a Shopify account</p>
        </div>

        <form onSubmit={handleLogin}>
          <input
            type="text"
            placeholder="Email or Mobile Number*"
            value={emailOrNumber}
            onChange={(e) => setEmailOrNumber(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassWord(e.target.value)}
          />
          <Button className={styles.createBtn}>Continue</Button>
          <small>
            By continuing you agree to Shopify{" "}
            <a href="#">terms and condition</a>
          </small>
        </form>
        <p className={styles.facebook}>log in with facebook</p>
        <p className={styles.lastText}>
          For further support, you may visit the Help center or contact our
          customer service team
        </p>
      </div>
    </div>
  );
}

export default Login;
