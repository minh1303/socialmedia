import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useState } from "react";
import { register } from "../../firebase/auth";
const Register = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const onEmailChange = (e) => {
    setEmail(e.currentTarget.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onRetypePasswordChange = (e) => {
    setRetypePassword(e.currentTarget.value);
  };

  const onRegister = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      return alert("Password can't be less than 8 letters")
    }
    if (password !== retypePassword) {
      return alert("Retype password isn't correct!")
    }
    register(email, password)
      .then(() => {
         navigate("/")
      })
      .catch((err) => {
        alert(err.message)
      });
  };

  return (
    <div>
      <Header></Header>
      <form action="">
        <label htmlFor="email">
          Email:{" "}
          <input
            type="text"
            id="email"
            value={email}
            onChange={onEmailChange}
          />
        </label>
        <label htmlFor="password">
          Password:{" "}
          <input
            type="password"
            id="password"
            value={password}
            onChange={onPasswordChange}
          />
        </label>
        <label htmlFor="retypepassword">
          Retype Password:{" "}
          <input
            type="password"
            id="retypepassword"
            value={retypePassword}
            onChange={onRetypePasswordChange}
          />
        </label>
        <p>
          <Link to={"/"}>Log-In</Link>
        </p>
        <button onClick={onRegister}>Register</button>
      </form>
    </div>
  );
};

export default Register;
