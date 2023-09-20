import PropTypes from "prop-types";
import {onAuthStateChanged} from "firebase/auth"
import { useEffect } from "react";
import { auth, deletePost } from "../../firebase/auth";
import { useState } from "react";

const Post = ({post}) => {
  const [currentUser, setCurrentUser] = useState({email:""});
  const {author,content} = post.data() 
  useEffect(() => {
    onAuthStateChanged(auth,(user) => {
      if(!user) return
      setCurrentUser(user)
    })
  })

  const onDeletingPost = () => {
    deletePost(post).then(() => {
      alert("Deleted")
    })
  }
  return (
    <div className="min-w-full flex justify-center flex-col items-center bg-sky-100 p-5 rounded flex-wrap break-all	">
        <p>{author}</p>
        <p>{content}</p>
        {currentUser.email === author &&<button onClick={onDeletingPost}>Delete</button>}
    </div>
  )
}

Post.propTypes = {
  post: PropTypes.object
}

export default Post