import React, { useState } from 'react';
import './css/LoginSignup.css';

const LoginSignup = () => {
  let [login, setLogin] = useState(false);

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        {!login ? (
          <>
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
              <input type="text" placeholder="Your name" />
              <input type="email" placeholder="email id" />
              <input type="password" placeholder="password" />
            </div>
            <button>Continue</button>
            <p className="loginsignup-login">
              Already have an account?{' '}
              <span onClick={() => setLogin(true)}>Login here</span>{' '}
            </p>
            <div className="loginsignup-agree">
              <input type="checkbox" name="" id="" />
              <p>
                By continuing i agree to terms and conditions & privacy policy.
              </p>
            </div>
          </>
        ) : (
          <>
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
              {/* <input type="text" placeholder="Your name" /> */}
              <input type="email" placeholder="email id" />
              <input type="password" placeholder="password" />
            </div>
            <button>Continue</button>
            <p className="loginsignup-login">
              New to shop?{' '}
              <span onClick={() => setLogin(false)}>Signup here</span>{' '}
            </p>
            <div className="loginsignup-agree">
              <input type="checkbox" name="" id="" />
              <p>
                By continuing i agree to terms and conditions & privacy policy.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginSignup;
