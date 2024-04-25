import { useState, useEffect } from "react";
import PostContext from "./PostContext.jsx";
import Layout from "./Layout.jsx";
import Header from "./Header.jsx";
import PostMain from "./PostMain.jsx";

const Post = () => {
  const [post, setPost] = useState({
    id: "number",
    title: "string",
    content: "string",
    cover: "string",
    likes: "number",
  });

  const fetchData = async () => {
    const response = await fetch(
      "https://my-json-server.typicode.com/NataMimoza/db/posts/1"
    );
    const data = await response.json();
    setPost(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PostContext.Provider value={post}>
      <Layout>
        <Header />
        <PostMain />
      </Layout>
    </PostContext.Provider>
  );
};

export default Post;
