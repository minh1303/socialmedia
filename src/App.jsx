import Header from "./Components/Header/Header";
import { useEffect, useState } from "react";
import { auth } from "./firebase/auth";
import { onAuthStateChanged } from "firebase/auth";
import NewPost from "./Components/NewPost/NewPost";
import Posts from "./Components/Posts/Posts";
function App() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) setUser(null)
      setUser(currentUser);
    },auth.currentUser);
  });

  return (
    <>
      <Header></Header>
      {user && <NewPost user={user}></NewPost>}
      <Posts></Posts>
    </>
  );
}

export default App;
