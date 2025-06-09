import BlogCard from "./BlogCard";
import PageHeading from "./PageHeading";
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
function AllBlogs() {
  return (
    <>
      <PageHeading>Blogs</PageHeading>
      <div className="grid grid-cols-1 gap-4 px-4 py-2 md:mx-auto md:max-w-7xl md:grid-cols-3">
        {blogPosts.map((post) => (
          <BlogCard
            key={post.title}
            title={post.title}
            description={post.description}
            image={post.image}
            id={post.id}
          />
        ))}
      </div>
    </>
  );
}

export default AllBlogs;
