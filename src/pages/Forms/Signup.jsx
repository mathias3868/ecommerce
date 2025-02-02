import React, { useState } from "react";
import formSideImg from "../../assets/sideImg/Side-Image.png";
import Button from "../../components/Button";
import iconLogo from "../../assets/logo/logoedit.png";
import styles from "./signup.module.scss";
import { useItem } from "../../contexts/ItemContext";
import { useNavigate } from "react-router-dom";

function Signup() {
  const { CreateAccount } = useItem();
  const [emailOrNumber, setEmailOrNumber] = useState("");
  const [password, setPassWord] = useState("");
  const navigate = useNavigate();

  async function handleCreateAccount(e) {
    e.preventDefault();

    if (emailOrNumber === "" || password === "") {
      alert("enter email or number and password to login");
      return;
    }

    const newUser = {
      emailOrNumber,
      password,
    };

    await CreateAccount(newUser);
    navigate(-1);
  }

  return (
    <div className={styles.signupContainer}>
      <div className={styles.formCol1}>
        <img src={formSideImg} alt="photo" />
      </div>

      <div className={styles.formCol2}>
        <div className={styles.welcome}>
          <img src={iconLogo} alt="logo photo" />
          <h3 className={styles.welcomeText}>Welcome to Shopify</h3>
          <p>
            Type your email or number and password to create a Shopify account
          </p>
        </div>
        <form className={styles.signUpForm} onSubmit={handleCreateAccount}>
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
          <Button className={styles.createBtn}>create account</Button>
        </form>
        <small>
          By continuing you agree to Shopify <a href="#">terms and condition</a>
        </small>
        <p className={styles.facebook}>sign up with facebook</p>
        <p className={styles.lastText}>
          For further support, you may visit the Help center or contact our
          customer service team
        </p>
      </div>
    </div>
  );
}

export default Signup;
