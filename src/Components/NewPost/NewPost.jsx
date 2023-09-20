/* eslint-disable react/prop-types */
import { useCallback, useState } from "react";
import { posting } from "../../firebase/auth";
import PropTypes from "prop-types";
const NewPost = ({ user }) => {
  const [content, setContent] = useState("");
  const onPosting = async () => {
    if (content.length < 1) return alert("Please type content");
    console.log(user.email);
    await posting(user.email, content);
  };
  return (
    <div className="flex flex-col justify-center w-1/4 m-auto gap-1 p-4">
      <textarea className="border-2 border-black"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
        name=""
        id=""
        cols={30}
        rows={3}
      ></textarea>
      <div className="flex justify-center gap-2">
        <button onClick={onPosting}>
          Post
        </button>
        <button
          onClick={useCallback(() => {
            setContent("");
          }, [])}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

NewPost.proptypes = { user: PropTypes.object };

export default NewPost;
