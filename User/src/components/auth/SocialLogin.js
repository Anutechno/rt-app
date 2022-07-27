import React from "react";

// 3rd party components
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import AppleLogin from "react-apple-login";

// Images
import googleIc from "../../assets/authentication/google-ic.svg";
import facebookIc from "../../assets/authentication/facebook-ic.svg";
import appleIc from "../../assets/authentication/apple-ic.svg";

const SocialLogin = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div className="socialLogin">
      <GoogleLogin
        clientId="149251934447-ki37eutjhqpoaoji9gojcjoga07ctlpe.apps.googleusercontent.com"
        render={(renderProps) => (
          <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
            <img src={googleIc} alt="" />
            <span> Continue with Google</span>
          </button>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
      />
      <button>
        <img src={appleIc} alt="" />
        <span>Continue with Apple</span>
        <div className="appleLogin">
          <AppleLogin
            clientId={"com.react.apple.login"}
            redirectURI={"https://redirectUrl.com"}
            responseType={"code"}
            responseMode={"query"}
            usePopup={false}
            designProp={{
              height: 30,
              width: 300,
              color: "black",
              border: false,
              type: "sign-in",
              border_radius: 15,
              scale: 2,
              locale: "en_US",
            }}
          />
        </div>
      </button>
      <FacebookLogin
        appId="1088597931155576"
        callback={responseFacebook}
        render={(renderProps) => (
          <button onClick={renderProps.onClick}>
            <img src={facebookIc} alt="" />
            <span>Continue with Facebook</span>
          </button>
        )}
      />
    </div>
  );
};

export default SocialLogin;
