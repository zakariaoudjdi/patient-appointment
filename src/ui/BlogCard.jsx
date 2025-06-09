import {Link} from 'react-router-dom';
function BlogCard({ title, description, image,id }) {
  return (
    <div className="col-span-1">
      <img
        src={image}
        alt=""
        className="h-64 w-full object-cover object-center mb-4"
      />
      <div>
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-400 font-light text-md mb-2">{description}</p>
        <Link to={`${id}`}  className="text-fuchsia-500 hover:underline">
          Read more
        </Link>
      </div>
    </div>
  );
}

export default BlogCard;
