import { useState } from "react";
import "./SignupForm.css";
import { FaRegEyeSlash, FaEye } from "react-icons/fa";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();
  // ! states handled here...
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
  });

  const [showCreatePassword, setShowCreatePassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // ! handlers handled here...
  const changeHandler = (event) => {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (formData.createPassword !== formData.confirmPassword) {
      toast.error("Passwords doesn't match..!");
      return;
    }

    toast.success("Account Created..");
    const accountData = {
      ...formData,
    };
    console.log(accountData);
    setIsLoggedIn(true);
    navigate("/dashboard");
  };
  return (
    <div className="signup-wrap">
      <div className="role-toggle">
        <div className="role-toggle-internal">
          <button className="active">Student</button>
          <button>Instructor</button>
        </div>
      </div>

      <form className="signup-form" onSubmit={submitHandler}>
        <div className="row two">
          <label htmlFor="firstName">
            <p>
              First Name <sup>*</sup>
            </p>
            <input
              type="text"
              required
              value={formData.firstName}
              placeholder="Enter first name"
              name="firstName"
              id="firstName"
              onChange={changeHandler}
            />
          </label>

          <label htmlFor="lastName">
            <p>
              Last Name <sup>*</sup>
            </p>
            <input
              type="text"
              required
              value={formData.lastName}
              placeholder="Enter last name"
              name="lastName"
              id="lastName"
              onChange={changeHandler}
            />
          </label>
        </div>

        <div className="row one">
          <label htmlFor="email">
            <p>
              Email Address <sup>*</sup>
            </p>
            <input
              type="email"
              required
              value={formData.email}
              placeholder="Enter email address"
              name="email"
              id="email"
              onChange={changeHandler}
            />
          </label>
        </div>

        <div className="row two">
          <label htmlFor="createPassword" className="with-icon">
            <p>
              Create Password <sup>*</sup>
            </p>
            <input
              type={showCreatePassword ? "text" : "password"}
              required
              value={formData.createPassword}
              placeholder="Enter Password"
              name="createPassword"
              id="createPassword"
              onChange={changeHandler}
            />
            <span
              className="pw-toggle"
              onClick={() => setShowCreatePassword((p) => !p)}
            >
              {showCreatePassword ? <FaRegEyeSlash /> : <FaEye />}
            </span>
          </label>

          <label htmlFor="confirmPassword" className="with-icon">
            <p>
              Confirm Password <sup>*</sup>
            </p>
            <input
              type={showConfirmPassword ? "text" : "password"}
              required
              value={formData.confirmPassword}
              placeholder="Confirm Password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={changeHandler}
            />
            <span
              className="pw-toggle"
              onClick={() => setShowConfirmPassword((p) => !p)}
            >
              {showConfirmPassword ? <FaRegEyeSlash /> : <FaEye />}
            </span>
          </label>
        </div>

        {/* moved out so it becomes full-width */}
        <div className="form-actions">
          <button type="submit" className="primary">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
