import React, { useEffect } from "react";
import '../../../../index.css'

const LoginForm = ({ setOturumAc }) => {
  useEffect(() => {
    document.title = "Login. Nike TR";
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="nike-unite-swoosh">
        <img
          src="https://s3.nikecdn.com/unite/app/912/images/swoosh_black.png"
          alt="nike"
        />
      </div>
      <div className="header-text">
        <span>
          FOR EVERYTHING ABOUT NIKE <br /> YOUR ACCOUNT
        </span>
      </div>
      <form>
        <div className="login-panel-form">
          <input required placeholder="Email address" type="text" />
          <input required placeholder="Password" type="password" />
          <span className="login-panel-desc">
            <input type="checkbox" className="m-0" />
            {" "}I agree to Nike{" "}
            <a
              href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=privacyPolicy&country=TR&language=tr&mobileStatus=false&requestType=redirect&uxId=com.nike.commerce.nikedotcom.web"
              className="underline"
            >
              Privacy Policy {" "}
            </a>
            & {" "}
            <a
              href="https://agreementservice.svs.nike.com/rest/agreement?agreementType=termsOfUse&country=TR&language=tr&mobileStatus=false&requestType=redirect&uxId=com.nike.commerce.nikedotcom.web"
              className="underline"
            >
              Terms of use
            </a>
          </span>
          <button className="login-panel-button">SIGN IN</button>
          <span className="text-center mt-4 text-xs">
            Not a member?{" "}
            <span
              className="underline cursor-pointer"
              onClick={() => setOturumAc(true)}
            >
              Join Us.
            </span>
          </span>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
