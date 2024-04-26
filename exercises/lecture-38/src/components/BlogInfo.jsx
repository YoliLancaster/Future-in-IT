import { useContext } from "react";
import BlogContext from "./BlogContext.jsx";
import Layout from "./post/Layout.jsx";

const BlogInfo = () => {
  const blogName = useContext(BlogContext);
  return (
    <Layout>
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:mt-20">
        {blogName}
      </h1>
    </Layout>
  );
};

export default BlogInfo;
