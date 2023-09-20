import { Link, useNavigate } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { useEffect, useState } from "react";
import { auth, login } from "../../firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth, currentUser => {
      if (currentUser) return navigate("/")
    })
  })
  return (
    <>
      <Header></Header>
      <form action="" className="flex flex-col w-1/2 m-auto items-center gap-2 p-5">
        <label htmlFor="email">
          Email:{" "}
          <input className="border-black border-2 rounded-md"
            type="text"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password">
          Password:{" "} 
          <input className="border-black border-2 rounded-md"
            type="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
        <p>
          <Link to={"/register"}>Sign up</Link>
        </p>
        <button
          onClick={(e) => {
            e.preventDefault();
            login(email, password)
              .then(() => {
                alert("Logged in");
              })
              .catch((err) => {
                alert(err.message);
              });
          }}
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;
