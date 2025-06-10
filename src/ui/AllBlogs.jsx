import BlogCard from "./BlogCard";
import PageHeading from "./PageHeading";
import blogPosts from "../api/apiGetAllBlogs"; // Assuming you have a data file with blog posts
import { useQuery } from "@tanstack/react-query";
import getAllBlogs from "../api/apiGetAllBlogs";

function AllBlogs() {
  const { data } = useQuery({
    queryKey: ["blogs"],
    queryFn: getAllBlogs,
  });
  return (
    <>
      <PageHeading>Blogs</PageHeading>
      <div className="grid grid-cols-1 gap-4 px-4 py-2 md:mx-auto md:max-w-7xl md:grid-cols-3">
        {data?.map((post) => (
          <BlogCard
            key={post.title}
            title={post.title}
            description={post.content}
            image={post.image}
            id={post._id}
          />
        ))}
      </div>
    </>
  );
}

export default AllBlogs;
