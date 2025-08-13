import { Link } from "react-router-dom";
import logoLight from "../assets/logo/logoLight.png";
import logoDark from "../assets/logo/logoDark.png";

const Navbar = () => {
  return (
    <div>
      <div>
        <Link to="/">
          <img src={logoDark} alt="logo" width={160} height={32} loading="lazy" />
        </Link>
      </div>
      <div>
        <a href="">Home</a>
        <a href=""></a>
        <a href=""></a>
      </div>
    </div>
  );
};

export default Navbar;
