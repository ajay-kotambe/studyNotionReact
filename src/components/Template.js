import "./Template.css";
import Signup from "./SignupForm";
import LoginForm from "./LoginForm";
import frame from "../assets/images/frame.png";
import { FcGoogle } from "react-icons/fc";

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div className="auth-template">
      <div className="auth-left">
        <h1 className="auth-title">{title}</h1>

        <p className="auth-desc">
          <span className="muted">{desc1} </span> <br />
          <span className="accent">{desc2}</span>
        </p>

        {formType === "signup" ? (
          <Signup setIsLoggedIn={setIsLoggedIn} />
        ) : (
          <LoginForm setIsLoggedIn={setIsLoggedIn} />
        )}

        <div className="separator">
          <span></span>
          <span className="sep-text">OR</span>
          <span></span>
        </div>

        <button className="google-btn">
          {/* optional: add a small Google icon if you have one */}
          <span style={{ padding: "2px 0" }}>
            <FcGoogle />
          </span>
          Sign up with Google
        </button>
      </div>

      <div className="auth-right">
        <div className="image-wrap">
          <img
            className="main-img"
            src={image}
            alt="Students"
            width={558}
            height={490}
            loading="lazy"
          />
          <img
            className="frame-img"
            src={frame}
            alt="frame"
            width={558}
            height={508}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default Template;
