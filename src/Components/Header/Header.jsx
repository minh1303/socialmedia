import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../../firebase/auth";

const Header = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) setUser(currentUser);
    });
  });
  return (
    <header className="bg-cyan-700 flex justify-around p-3 align-middle text-white">
      <div className="font-bold text-2xl">
        <Link to={"/"}>Odin Book</Link>
      </div>
      {user && <p>Welcome {user.email}</p>}
      <nav>
        <ul className="flex flex-row gap-3">
          {!user && (
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          )}
          {user && (
            <li
              className="cursor-pointer"
              onClick={async () => {
                await signOut(auth);
                setUser(null);
              }}
            >
              Sign out
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
