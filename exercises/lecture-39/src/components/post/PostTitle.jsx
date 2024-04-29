import { useContext } from "react";
import PostContext from "./PostContext.jsx";

const PostTitle = () => {
  const post = useContext(PostContext);
  return (
    <h3>
      {post.title} {post.id}
    </h3>
  );
};

export default PostTitle;
