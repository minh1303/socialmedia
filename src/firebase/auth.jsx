import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword
} from "firebase/auth";
import app from "./firebase";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
const db = getFirestore(app);

const auth = getAuth(app);

const register = async (email, password) => {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  await setDoc(doc(db, "accounts", user.user.uid), {
    email: user.user.email,
    photoUrl: user.user.photoURL,
  });
};



const login = async (email, password) => {
  await signInWithEmailAndPassword(auth, email, password);
};

const posting = async (author, content) => {
  await addDoc(collection(db, "posts"), {
    author,
    content,
  });
};

const deletePost = async (post) => {
  await deleteDoc(doc(db, "posts", post.id));
}

export { db, register, login, auth, posting, deletePost};
