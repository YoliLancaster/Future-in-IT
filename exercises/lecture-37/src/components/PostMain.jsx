import { useContext, useState } from "react";
import PostTitle from "./PostTitle.jsx";
import PostContext from "./PostContext.jsx";

const PostMain = () => {
  const post = useContext(PostContext);
  const [likes, setLikes] = useState(0);

  const like = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <div className="post-footer">
      <PostTitle />
      <p>{post.content}</p>
      <button id="like" onClick={like}>
        Like this post <strong>{likes}</strong>
      </button>
    </div>
  );
};

export default PostMain;
