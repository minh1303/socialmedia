import { useCollection } from "react-firebase-hooks/firestore";
import { collection, getFirestore } from "firebase/firestore";
import app from "../../firebase/firebase";
import Post from "../Post/Post";
const Posts = () => {
  const [value, loading] = useCollection(
    collection(getFirestore(app), "posts")
  );

  return (
    <div className="w-1/3 flex flex-col items-center justify-center gap-5 m-auto p-5">
      {loading && <div>LOADING!</div>}
      {value &&
        value.docs.map((post) => {
          return (
            <Post
              key={post.id}
              post={post}
            ></Post>
          );
        })}
    </div>
  );
};

export default Posts;
