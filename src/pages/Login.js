import "./Login.css";
import Template from "../components/Template";
import login from "../assets/images/login.jpg";
const Login = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1={"Build skills for today, tomorrow, and beyond"}
        desc2={"Education to future-proof your career."}
        image={login}
        formType={"login"}
        setIsLoggedIn={setIsLoggedIn}
      />
    </div>
  );
};
export default Login;
