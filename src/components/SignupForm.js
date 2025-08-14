import { useState } from "react";
import "./SignupForm.css";
import { FaRegEyeSlash, FaEye } from "react-icons/fa";
import toast from "react-hot-toast";

const Signup = () => {
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
    }
    
  };
  return (
    <div>
      <div>
        <button>Student</button>
        <button>Instructor</button>
      </div>
      <form action="" onSubmit={submitHandler}>
        <div>
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

        <div>
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

        <div>
          <label htmlFor="createPassword">
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
            <span onClick={() => setShowCreatePassword((prev) => !prev)}>
              {showCreatePassword ? <FaRegEyeSlash /> : <FaEye />}
            </span>
          </label>
          <label htmlFor="confirmPassword">
            <p>
              Confirm Password <sup>*</sup>
            </p>
            <input
              type={showConfirmPassword ? "text" : "password"}
              required
              value={formData.confirmPassword}
              placeholder="Confrim Password"
              name="confirmPassword"
              id="confirmPassword"
              onChange={changeHandler}
            />
            <span onClick={() => setShowConfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? <FaRegEyeSlash /> : <FaEye />}
            </span>
          </label>
          <button>Create Account</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
