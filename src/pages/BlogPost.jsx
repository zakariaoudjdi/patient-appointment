import PageHeading from "../ui/PageHeading";
import { useParams } from "react-router-dom";
const blogPosts = [
  {
    id: 1,
    title: "Understanding Pregnancy",
    description: "A comprehensive guide to pregnancy stages and care.",
    image: "../../images/pregnant-couple.jpg",
  },
  {
    id: 2,
    title: "Nutrition During Pregnancy",
    description: "Essential dietary tips for a healthy pregnancy.",
    image: "../../images/nutrition.jpg",
  },
  {
    id: 3,
    title: "Preparing for Labor",
    description: "What to expect and how to prepare for labor and delivery.",
    image: "../../images/runner.jpg",
  },
];

function BlogPost() {
  const { blogId } = useParams();
  const blogPost = blogPosts.find((post) => post.id === parseInt(blogId));
  return (
    <div className="grid grid-cols-1 gap-4 px-4 py-2 md:mx-auto md:max-w-6xl">
      <PageHeading>{blogPost.title}</PageHeading>

      <img
        src={blogPost.image}
        alt="Blog Post"
        className="h-68 lg:h-128 mb-4 w-full object-cover object-center md:h-96"
      />

      <div className="text-sm font-light text-gray-800 md:mx-auto md:max-w-xl md:text-lg lg:max-w-4xl">
        <p>{blogPost.description}</p>
      </div>
    </div>
  );
}

export default BlogPost;
