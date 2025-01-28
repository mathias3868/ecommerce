import React from "react";
import formSideImg from "../../assets/sideImg/Side-Image.png";
import Button from "../../components/Button";
import iconLogo from "../../assets/logo/logoedit.png";
function Signup() {
  return (
    <div>
      <div>
        <img src={formSideImg} alt="photo" />
      </div>

      <div>
        <div>
          <img src={iconLogo} alt="logo photo" />
          <h3>Welcome to Shopify</h3>
        </div>
        <p>
          Type your email or number and password to create a Shopify account
        </p>
        <form>
          <input type="email/number" />
          <input type="password" />
          <button>create account</button>
          <small>
            By continuing you agree to Shopify{" "}
            <a href="#">terms and condition</a>
          </small>
        </form>
        <Button>sign up with facebook</Button>
        <p>
          For further support, you may visit the Help center or contact our
          customer service team
        </p>
      </div>
    </div>
  );
}

export default Signup;
