import PageHeading from "../ui/PageHeading";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getAllBlogs from "../api/apiGetAllBlogs";


function BlogPost() {
  const { data: blogPosts = [] }
    = useQuery({
    queryKey: ["blogs"],
    queryFn: getAllBlogs,
  });
  const { blogId } = useParams();
  const blogPost = blogPosts.find((post) => post._id === blogId);
  return (
    <div className="grid grid-cols-1 gap-4 px-4 py-2 md:mx-auto md:max-w-6xl">
      <PageHeading>{blogPost.title}</PageHeading>

      <img
        src={blogPost.image}
        alt="Blog Post"
        className="h-68 lg:h-128 mb-4 w-full object-cover object-center md:h-96"
      />

      <div className="text-sm font-light text-gray-800 md:mx-auto md:max-w-xl md:text-lg lg:max-w-4xl">
        <p>{blogPost.content}</p>
      </div>
    </div>
  );
}

export default BlogPost;
