import { Outlet } from "react-router-dom";
import "./Template.css";
import Signup from "./SignupForm";
import LoginForm from "./LoginForm";
import frame from "../assets/images/frame.png";

const Template = ({ title, desc1, desc2, image, formType, setIsLoggedIn }) => {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>
          <span>{desc1}</span>
          <span>{desc2}</span>
        </p>
        {formType === "signup" ? <Signup /> : <LoginForm />}
        <div>
          <span></span>
          <span>OR</span>
          <span></span>
        </div>
        <button>Sign up with google</button>
      </div>
      <div>
        <img
          src={image}
          alt="Students"
          width={558}
          height={490}
          loading="lazy"
        />
        <img
          src={frame}
          alt="frameImg"
          width={558}
          height={508}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Template;
