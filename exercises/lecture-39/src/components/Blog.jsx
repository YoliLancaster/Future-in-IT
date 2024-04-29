import Post from "./post/Post.jsx";
import Header from "./post/Header.jsx";
import BlogContext from "./BlogContext.jsx";
import BlogInfo from "./BlogInfo.jsx";
import Layout from "./post/Layout.jsx";

const Blog = () => {
  const blogName = "Lana Korolenko Blog";

  return (
    <BlogContext.Provider value={blogName}>
      <Header />
      <Layout>
        <BlogInfo />

        <Post />
      </Layout>
    </BlogContext.Provider>
  );
};

export default Blog;
