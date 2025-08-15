import { Link, NavLink } from "react-router-dom";
import logoLight from "../assets/logo/logoLight.png";
// import logoDark from "../assets/logo/logoDark.png";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import toast from "react-hot-toast";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const clickLogoutHandler = () => {
    setIsLoggedIn(false);
    toast.success("Logged out", {
      className: "my-toast",
      bodyClassName: "my-toast-body",
      progressClassName: "my-toast-progress",
    });

    navigate("/");
  };

  return (
    <div className="navbar-div">
      <div>
        <Link to="/">
          <img
            src={logoLight}
            alt="logo"
            width={160}
            height={32}
            loading="lazy"
          />
        </Link>
      </div>
      <nav className="navbar">
        <span className="nav-links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="#">About</NavLink>
          <NavLink to="#">Contact </NavLink>
        </span>
        <span>
          {isLoggedIn && <button onClick={clickLogoutHandler}>Logout</button>}

          {!isLoggedIn && (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
          {isLoggedIn && (
            <button onClick={() => navigate("/dashboard")}>Dashboard</button>
          )}
          {!isLoggedIn && (
            <button onClick={() => navigate("/signup")}>Signup</button>
          )}
        </span>
      </nav>
    </div>
  );
};

export default Navbar;
