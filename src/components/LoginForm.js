import { useState } from "react";
import "./LoginForm.css";
import { FaRegEyeSlash, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const changeHandler = (event) => {
    setFormData((prevData) => ({
      prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const clickHandler = () => {
    showPassword ? setShowPassword(false) : setShowPassword(true);
  };

  return (
    <div>
      <form action="">
        <label htmlFor="email">
          <p>
            Email Address <sup>*</sup>
          </p>
          <input
            required
            value={formData.email}
            type="email"
            name="email"
            id="email"
            placeholder="Enter email address"
            onChange={changeHandler}
          />
        </label>

        <label htmlFor="password">
          <p>
            Password <sup>*</sup>
          </p>
          <input
            required
            name="password"
            value={formData.password}
            onChange={changeHandler}
            type={showPassword ? "text" : "password"}
            id="password"
            placeholder="Enter Password"
          />
          <span onClick={clickHandler}>
            {showPassword ? <FaRegEyeSlash /> : <FaEye />}
          </span>
          <Link to="#">Forgot Password</Link>
        </label>

        <button>Sign in</button>
      </form>
    </div>
  );
};
export default LoginForm;
