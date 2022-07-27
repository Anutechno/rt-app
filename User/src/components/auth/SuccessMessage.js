import React from "react";
import { Link } from "react-router-dom";

const SuccessMessage = () => {
  return (
    <section className="successfullSignup">
      <div className="container">
        <div className="borderBox">
          <h1 className="title">
            Hi John, you have successfully joined NichoShop.
          </h1>
          <div className="textBox">
            <p>
              An email containing an activation link has been sent to: <br />
              <span>example@domain.com</span>
            </p>

            <p>
              Please log in your email and click the activation link within 24
              hours to complete your registration.
            </p>
            <div className="toolTipsHover">
              <Link to={"/"} className="redirectLink">
                I haven’t received the email
              </Link>
              <div className="tooltipBox">
                <ul>
                  <li>Please check your spam folder</li>
                  <li>
                    If you haven’t received the email
                    <br />
                    <Link to={"/"} className="redirectLink">
                      IClick here to resend the email
                    </Link>
                  </li>
                  <li>
                    Still not received?
                    <br />
                    <Link to={"/"} className="redirectLink">
                      Try using another email address
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessMessage;
