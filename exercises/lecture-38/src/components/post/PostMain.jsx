import { useContext, useState } from "react";
import PostTitle from "./PostTitle.jsx";
import PostContext from "./PostContext.jsx";
import Layout from "./Layout.jsx";

const PostMain = () => {
  const post = useContext(PostContext);
  const [likes, setLikes] = useState(0);

  const like = () => {
    setLikes((prevLikes) => prevLikes + 1);
  };

  return (
    <Layout>
      <div
        className="post-footer w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5 sm:mt-20"
        style={{ padding: "20px" }}>
        <PostTitle />
        <p>{post.content}</p>
        <button id="like" onClick={like}>
          Like this post <strong>{likes}</strong>
        </button>
      </div>
    </Layout>
  );
};

export default PostMain;
